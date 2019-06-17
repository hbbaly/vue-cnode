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
import { mapActions, mapGetters } from 'vuex'
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
  // fetch 来操纵 store内数据
  fetch ({ store, params }) {
    store.dispatch('user/getUserInfo',{name:params.name})
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
  // computed: {
  //   ...mapGetters(['user.userInfo'])
  // },
  //  要分模块的话，这样写，
  computed: {
    userInfo () { 
      return this.$store.state.user.userInfo 
    }
  },
  watch: {
    '$route' (val) {
      this.requestData()
    }
  },
  mounted () {
    // this.requestData()
  },
  methods: {
    // ...mapActions({getUserInfo:'user/getUserInfo'}),
    // ...mapMutations({
    //   toggle: 'todos/toggle'
    // })
    // async requestData () {
    //   // this.$loading(true, '', 85)
    //   await this.getUserInfo({name: this.$route.params.name})
    //   // this.collectionNum = this.userInfo.recent_replies.length
    //   // this.$loading(false)
    // }
  }
}
</script>
<style lang="stylus">
.page-user-info
  background: #fff
</style>