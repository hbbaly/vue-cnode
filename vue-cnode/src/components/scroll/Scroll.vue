/*
* @author: hbb
* @Date: 2018-10-31 10:42:56
* @Last Modified time: 2018-12-06 15:35:03
* @ TODO:新增横向滚动监听scroll-content宽度   bubble效果去除
*/
<template>
  <div
    ref="wrapper"
    class="list-wrapper">
    <div
      ref="scrollContentWidth"
      class="scroll-content">
      <div ref="listWrapper">
        <slot>
          <ul class="list-content">
            <li
              v-for="(item,i) in data"
              :key="i"
              class="list-item"
              @click="clickItem($event,item)">{{ item }}</li>
          </ul>
        </slot>
      </div>
      <slot
        :pullUpLoad="pullUpLoad"
        :isPullUpLoad="isPullUpLoad"
        name="pullup">
        <div
          v-if="pullUpLoad"
          :class="pullupWrapper">
          <div
            v-if="!isPullUpLoad"
            class="before-trigger">
            <!-- <span> 加载中......</span> -->
            <span>{{ pullUpTxt }}</span>
          </div>
          <div
            v-else
            class="after-trigger">
            <loading />
          </div>
        </div>
      </slot>
    </div>
    <slot
      :pullDownRefresh="pullDownRefresh"
      :pullDownStyle="pullDownStyle"
      :beforePullDown="beforePullDown"
      :isPullingDown="isPullingDown"
      :bubbleY="bubbleY"
      name="pulldown">
      <div
        v-if="pullDownRefresh"
        ref="pulldown"
        :style="pullDownStyle"
        class="pulldown-wrapper">
        <div
          v-if="beforePullDown"
          class="before-trigger">
          <!-- <bubble :y="bubbleY" /> -->
          <span style="line-height:30px;font-size:15px;">松开刷新数据</span>
        </div>
        <div
          v-else
          class="after-trigger">
          <div
            v-if="isPullingDown"
            class="loading">
            <loading />
          </div>
          <!-- <div v-else><span> 刷新中......</span></div> -->
          <div v-else><span>{{ refreshTxt }}</span></div>
        </div>
      </div>
    </slot>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'
import Loading from './loading.vue'
import Bubble from './bubble.vue'
import { getRect } from './dom'
const COMPONENT_NAME = 'scroll'
const DIRECTION_H = 'horizontal'
const DIRECTION_V = 'vertical'
export default {
  'name': COMPONENT_NAME,
  'components': {
    Loading,
    Bubble
  },
  'props': {
    'data': {
      'type': Array,
      'default': function () {
        return []
      }
    },
    'probeType': {
      'type': Number,
      'default': 1
    },
    'click': {
      'type': Boolean,
      'default': true
    },
    'listenScroll': {
      'type': Boolean,
      'default': false
    },
    'listenBeforeScroll': {
      'type': Boolean,
      'default': false
    },
    'listenScrollEnd': {
      'type': Boolean,
      'default': false
    },
    'direction': {
      'type': String,
      'default': DIRECTION_V
    },
    'scrollbar': {
      'type': null,
      'default': false
    },
    'pullDownRefresh': {
      'type': null,
      'default': false
    },
    'pullUpLoad': {
      'type': null,
      'default': false
    },
    'startY': {
      'type': Number,
      'default': 0
    },
    'refreshDelay': {
      'type': Number,
      'default': 20
    },
    'freeScroll': {
      'type': Boolean,
      'default': false
    },
    'mouseWheel': {
      'type': Boolean,
      'default': false
    },
    'bounce': {
      'type': Boolean,
      'default': true
    },
    'zoom': {
      'type': Boolean,
      'default': false
    },
    'status': {
      'type': Number,
      'default': 1
    },
    // 新添加
    'scrollContentWidth': {
      'type': String,
      'default': '0%'
    }
  },
  data () {
    return {
      'beforePullDown': true,
      'isRebounding': false,
      'isPullingDown': false,
      'isPullUpLoad': false,
      'pullUpDirty': true,
      'pullDownStyle': '',
      'bubbleY': 0
    }
  },
  'computed': {
    pullUpTxt () {
      const moreTxt = (this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.more) || '加载中'
      const noMoreTxt = (this.pullUpLoad && this.pullUpLoad.txt && this.pullUpLoad.txt.noMore) || '没有更多数据'
      // 原来的逻辑
      // return this.pullUpDirty ? moreTxt : noMoreTxt
      // 修改的逻辑
      return !this.pullUpDirty ? moreTxt : noMoreTxt
    },
    refreshTxt () {
      return (this.pullDownRefresh && this.pullDownRefresh.txt)
    },
    pullupWrapper () {
      // return this.status===1?'pullup-wrapper':'pullup-Wrapper'
      return 'pullup-wrapper'
    }
  },
  'watch': {
    data () {
      setTimeout(() => {
        this.forceUpdate(true)
      }, this.refreshDelay)
    },
    // 新添加scrool-content宽度
    scrollContentWidth (val) {
      if (val) this.$refs.scrollContentWidth.style.width = this.scrollContentWidth
    }
  },
  created () {
    this.pullDownInitTop = -50
  },
  mounted () {
    setTimeout(() => {
      this.initScroll()
    }, 20)
  },
  destroyed () {
    this.$refs.scroll && this.$refs.scroll.destroy()
  },
  'methods': {
    initScroll () {
      if (!this.$refs.wrapper) {
        return
      }
      if (this.$refs.listWrapper && (this.pullDownRefresh || this.pullUpLoad)) {
        this.$refs.listWrapper.style.minHeight = `${getRect(this.$refs.wrapper).height + 1}px`
      }
      let options = {
        'probeType': this.probeType,
        'click': this.click,
        'scrollY': this.freeScroll || this.direction === DIRECTION_V,
        'scrollX': this.freeScroll || this.direction === DIRECTION_H,
        'scrollbar': this.scrollbar,
        'pullDownRefresh': this.pullDownRefresh,
        'pullUpLoad': this.pullUpLoad,
        'startY': this.startY,
        'freeScroll': this.freeScroll,
        'mouseWheel': this.mouseWheel,
        'bounce': this.bounce,
        'zoom': this.zoom
      }
      this.scroll = new BScroll(this.$refs.wrapper, options)
      if (this.listenScroll) {
        this.scroll.on('scroll', (pos) => {
          this.$emit('scroll', pos)
        })
      }
      if (this.listenScrollEnd) {
        this.scroll.on('scrollEnd', (pos) => {
          this.$emit('scroll-end', pos)
        })
      }
      if (this.listenBeforeScroll) {
        this.scroll.on('beforeScrollStart', () => {
          this.$emit('beforeScrollStart')
        })
        this.scroll.on('scrollStart', () => {
          this.$emit('scroll-start')
        })
      }
      if (this.pullDownRefresh) {
        this._initPullDownRefresh()
      }
      if (this.pullUpLoad) {
        this._initPullUpLoad()
      }
    },
    disable () {
      this.scroll && this.scroll.disable()
    },
    enable () {
      this.scroll && this.scroll.enable()
    },
    refresh () {
      this.scroll && this.scroll.refresh()
    },
    scrollTo () {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement () {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
    clickItem (e, item) {
      this.$emit('click', item)
    },
    destroy () {
      this.scroll.destroy()
    },
    forceUpdate (dirty) {
      if (this.pullDownRefresh && this.isPullingDown) {
        this.isPullingDown = false
        this._reboundPullDown().then(() => {
          this._afterPullDown()
        })
      } else if (this.pullUpLoad && this.isPullUpLoad) {
        this.isPullUpLoad = false
        this.scroll.finishPullUp()
        this.pullUpDirty = dirty
        this.refresh()
      } else {
        this.refresh()
        this.scroll.scrollTo(0, 0)
      }
    },
    _initPullDownRefresh () {
      this.scroll.on('pullingDown', () => {
        this.beforePullDown = false
        this.isPullingDown = true
        this.$emit('pullDownAction')
      })
      this.scroll.on('scroll', (pos) => {
        if (!this.pullDownRefresh) {
          return
        }
        if (this.beforePullDown) {
          this.bubbleY = Math.max(0, pos.y + this.pullDownInitTop)
          this.pullDownStyle = `top:${Math.min(pos.y + this.pullDownInitTop, 10)}px`
        } else {
          this.bubbleY = 0
        }
        if (this.isRebounding) {
          this.pullDownStyle = `top:${10 - (this.pullDownRefresh.stop - pos.y)}px`
        }
      })
    },
    _initPullUpLoad () {
      this.scroll.on('pullingUp', () => {
        this.isPullUpLoad = true
        this.$emit('pullUpAction')
      })
    },
    _reboundPullDown () {
      const {stopTime = 600} = this.pullDownRefresh
      return new Promise((resolve) => {
        setTimeout(() => {
          this.isRebounding = true
          this.scroll.finishPullDown()
          resolve()
        }, stopTime)
      })
    },
    _afterPullDown () {
      setTimeout(() => {
        this.pullDownStyle = `top:${this.pullDownInitTop}px`
        this.beforePullDown = true
        this.isRebounding = false
        this.refresh()
      }, this.scroll.options.bounceTime)
    }
  }
}
</script>

<style lang="stylus" scoped>
    .list-wrapper {
        position: relative;
        height: 100%;
        // position: absolute;
        // left: 0;
        // top: 0;
        // right: 0;
        // bottom: 0;
        overflow: hidden;
        background: #fff;

        .scroll-content {
            position: relative;
            z-index: 1;
        }

        .list-content {
            position: relative;
            z-index: 10;
            background: #fff;

            .list-item {
                height: 60px;
                line-height: 60px;
                font-size: 18px;
                padding-left: 20px;
                border-bottom: 1px solid #e5e5e5;
            }
        }
    }

    .pulldown-wrapper {
        position: absolute;
        width: 100%;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all;

        .after-trigger {
            margin-top: 10px;
        }
    }

    .pullup-wrapper {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 40px 0;
    }
    .pullup-Wrapper {
        padding: 0;
    }
    .coupon-list-wrap {
        padding-bottom: 20px;
    }
</style>
