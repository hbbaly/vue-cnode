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
      <Topic
        :list="topicList"
        :pull-down="pullDown"
        :pull-up="pullUp"
        @pullDownAction="pullDownAction"
        @jumpDetail="jumpDetail"
        @jumpUser="jumpUser"
        @pullUpAction="pullUpAction" />
    </div>
  </div>
</template>
<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'
import TabList from '@/components/tablist/IndexView'
import Topic from '@/components/topiclist/IndexView'
export default {
  name: 'ALLTopic',
  components: {
    TabList,
    Topic
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
    await this.requestTopic(true)
    await this.$nextTick(() => {
      let h = document.documentElement.clientHeight || document.body.clientHeight
      this.$refs.topicScroll.style.height = h - 150 + 'px'
    })
  },
  methods: {
    ...mapActions(['getTopics']),
    ...mapMutations(['resetTpics']),
    chooseTab (val) {
      // this.resetTpics()
      this.tab = val
      this.requestTopic(true)
    },
    pullUpAction () {
      this.page++
      this.requestTopic()
    },
    pullDownAction () {
      this.page = 1
      this.requestTopic()
    },
    async requestTopic (isLoading = false) {
      if (isLoading) this.$loading(true, '', 150)
      await this.getTopics({page: this.page, tab: this.tab, limit: this.limit})
      if (isLoading) this.$loading(false)
    },
    jumpDetail (id) {
      this.$router.push(`/user/topicdetail/${id}`)
    },
    jumpUser (name) {
      this.$router.push(`/user/${name}`)
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

</style>
