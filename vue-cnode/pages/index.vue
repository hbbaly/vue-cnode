<template>
  <div class="page page-index">
    <header>
      <Header/>
    </header>
    <div class="container">
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
  </div>
</template>
<script>
import Header from '~/components/navbar/IndexView.vue'
import TabList from '~/components/tablist/IndexView'
import Topic from '~/components/topiclist/IndexView'
import axios from 'axios'
export default {
  // 首页头部SEO
  head: {
    title: 'CNode：Node.js专业中文社区',
    meta: [
      { hid: 'description', name: 'description', content: 'CNode：Node.js专业中文社区' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'keywords', content: 'nodejs, node, express, connect, socket.io' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '//static2.cnodejs.org/public/images/cnode_icon_32.png' }
    ],
    noscript: [
      { innerHTML: 'Body No Scripts', body: true }
    ],
    script: [
      { src: '/head.js' },
      // Supported since 1.0
      { src: '/body.js', body: true },
    ]
  },
  // asyncData只能在页面上，不能在组建内
  asyncData({ context }) {
    return axios.get(`https://cnodejs.org/api/v1/topics?page=1&limit=15`).then(res => {
      return { topicList: res.data.data }
    })
  },
  components: {
    Header,
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
  async mounted () {
    await this.$nextTick(() => {
      let h = document.documentElement.clientHeight || document.body.clientHeight
      this.$refs.topicScroll.style.height = h - 132 + 'px'
    })
  },
   methods: {
    // ...mapActions(['getTopics']),
    // ...mapMutations(['resetTpics']),
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
      // if (isLoading) this.$loading(true, '', 150)
      const data = await axios.get(`https://cnodejs.org/api/v1/topics?page=${this.page}&tab=${this.tab}&limit=${this.limit}`).then(res => res.data.data)
      this.topicList = isLoading&&this.page===1?data:[...this.topicList,...data]
      // console.log(this.topicList)
      // if (isLoading) this.$loading(false)
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

