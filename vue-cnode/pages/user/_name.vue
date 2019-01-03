<template>
  <div class="page page-user-info">
    <header>
      <Header />
    </header>
    <Info
      :src="userInfo.avatar_url"
      :name="userInfo.loginname"
      :score="userInfo.score"
      :time="userInfo.create_at"
      :github-name="userInfo.githubUsername"
      :collection="collectionNum"/>
    <div class="__container">
      <Topic
        :create-topic="userInfo.recent_replies"
        :join-topic="userInfo.recent_topics" />
    </div>
  </div>
</template>
<script>
import Header from '~/components/navbar/IndexView.vue'
import Info from '~/components/user/UserInfoView'
// import { mapActions, mapGetters } from 'vuex'
import Topic from '~/components/user/TopicView'
import axios from 'axios'
export default {
  name: 'UserInfo',
  // 使用 head（）{}  //可以获取data内的数据
  head () {
    return {
      title: `${this.userInfo.loginname} 的个人主页 - CNode技术社区`,
      meta: [
        { hid: 'description', name: 'description', content: 'CNode：Node.js专业中文社区' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: 'nodejs, node, express, connect, socket.io' },
      ],
    }
    
  },
  asyncData({ params }) {
    return axios.get(`https://cnodejs.org/api/v1/user/${params.name}`).then(res => {
      return { userInfo: res.data.data }
    })
  },
  components: {
    Header,
    Info,
    Topic
  },
  data () {
    return {
      collectionNum: 0
    }
  },
  computed: {
    // ...mapGetters(['userInfo'])
  },
  watch: {
    '$route' (val) {
      this.requestData()
    }
  },
  mounted () {
    this.requestData()
  },
  methods: {
    // ...mapActions(['getUserInfo']),
    async requestData () {
      // this.$loading(true, '', 85)
      // await this.getUserInfo({name: this.$route.params.name})
      // this.collectionNum = this.userInfo.recent_replies.length
      // this.$loading(false)
    }
  }
}
</script>
<style lang="stylus">
.page-user-info
  background: #fff
</style>