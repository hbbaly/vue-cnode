<template>
  <div class="module-tab">
    <Scroll
      ref="tabScroll"
      :data="tabList"
      :scroll-content-width="width"
      direction="horizontal"
      style="width:100%;overflow: hidden;">
      <ul class="tab-wrapper">
        <li
          v-for="(item,i) in tabList"
          :key="i"
          class="tab-item"
          @click="requestData(i, item.tab)">
          <p
            :class="{'_bg':changeBg===i}"
            class="__text">{{ item.title }}</p>
        </li>
      </ul>
    </Scroll>
  </div>
</template>
<script>
import Scroll from '@/components/scroll/Scroll'
export default {
  name: 'Tab',
  components: {
    Scroll
  },
  props: {
    tabList: {
      type: Array,
      default () {
        return []
      },
      required: true
    }
  },
  data () {
    return {
      width: '0%',
      changeBg: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.width = this.tabList.length / 4 * 100 + '%'
    })
  },
  methods: {
    requestData (i, tab) {
      this.changeBg = i
      this.$emit('chooseTab', tab)
    }
  }
}
</script>
<style lang="stylus" scoped>
.module-tab
  height:100px
  background: #f6f6f6
  .tab-wrapper
    display :flex
    width:100%
    .tab-item
      width:33.3333%
      text-align :center
      font-size:28px
      line-height :100px
      color: #80bd01
      border-radius: 6px
      ._bg
        color:#fff
        background: #80bd01
        text-align: center
      .__text
        display :inline-block
        width:auto;
        height:60px
        margin-top:20px
        padding: 0 20px
        line-height 60px
        border-radius: 10px

</style>
