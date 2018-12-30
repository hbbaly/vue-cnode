<template>
  <div class="topic-list-wrapper">
    <div class="__hd">
      <TabList
        :tab-list="tabList"
        @chooseTab = "chooseTab"/>
    </div>
    <div
      ref="topicScroll"
      class="__bd">
      <Scroll
        :data="topicList"
        :pull-up-load="pullUp"
        :pull-down-refresh="pullDown"
        direction="vertical"
        style="width:100%;overflow: hidden;"
        @pullDownAction="pullDownAction"
        @pullUpAction="pullUpAction">
        <div
          v-for="(item,index) in topicList"
          :key="index"
          :class="{'_border':index===0}"
          class="topic-list">
          <div class="__content">
            <img
              :src="item.author.avatar_url"
              class="__avatar ui-img" >
            <div class="__title">
              <span
                v-if="tab!=='dev'"
                :class="{'__tab_bg':item.top}"
                class="__tab">{{ item.tab|dealTab(item.top) }}</span>
              <p class="__cont">{{ item.title }}</p>
            </div>
            <span class="__replay">{{ item.last_reply_at|replayDay }}</span>
          </div>
        </div>
      </Scroll>
    </div>
  </div>
</template>
<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import Scroll from '@/components/scroll/Scroll'
import TabList from '@/components/tablist/IndexView'

export default {
  name: 'TopicList',
  components: {
    Scroll,
    TabList
  },
  data () {
    return {
      page: 1,
      limit: 15,
      tab: 'all',
      pullDown: true,
      pullUp: true,
      tabList: [
        {
          title: '全部',
          tab: 'all'
        },
        {
          title: '精华',
          tab: 'good'
        },
        {
          title: '分享',
          tab: 'share'
        },
        {
          title: '问答',
          tab: 'ask'
        },
        {
          title: '招聘',
          tab: 'job'
        },
        {
          title: '客户端测试',
          tab: 'dev'
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['topicList'])
  },
  async mounted () {
    await this.getTopics({ page: this.page, tab: this.tab, limit: this.limit })
    await this.$nextTick(() => {
      let h = document.documentElement.clientHeight || document.body.clientHeight
      this.$refs.topicScroll.style.height = h - 150 + 'px'
    })
  },
  methods: {
    ...mapActions(['getTopics']),
    ...mapMutations(['resetTpics']),
    chooseTab (val) {
      this.resetTpics()
      this.tab = val
      this.getTopics({page: this.page, tab: this.tab, limit: this.limit})
    },
    pullUpAction () {
      this.page++
      this.getTopics({page: this.page, tab: this.tab, limit: this.limit})
    },
    pullDownAction () {
      this.page = 1
      this.getTopics({page: this.page, tab: this.tab, limit: this.limit})
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  .topic-list-wrapper
    position relative
    width: 100%;
    height: 100vh;
    .__bd
      position: absolute
      top: 100px
      left: 0
      height:100%
      width:100%
      .topic-list
        display:flex
        align-items:center
        padding: 20px
        font-size: 28px
        border-top: 2px solid #f0f0f0
        .__content
          position relative;
          display:flex
          align-items:center
          width:100%
          .__avatar
            width:60px
            height:60px
            margin-right:10px
            border-radius: 6px
          .__title
            display :flex
            align-items :center
            text-align:left
            .__tab
              padding: 10px
              font-size:20px
              color: #999
              background-color: #e5e5e5
              border-radius: 3px
            .__tab_bg
              color: #fff
              background: #80bd01
            .__cont
              width:480px
              margin-left:10px
              overflow: hidden
              white-space: nowrap
              text-overflow: ellipsis
              color: #333
              font-size:26px
          .__replay
            position absolute
            top:0;
            right:0
            color: #778087
            font-size:22px
            line-height 60px
            white-space: nowrap
      ._border
        border:0

</style>
