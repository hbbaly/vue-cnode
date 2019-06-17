<template>
  <div class="page page-user-info">
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
import Info from './components/UserInfoView'
import { mapActions, mapGetters } from 'vuex'
import Topic from './components/TopicView'
export default {
  name: 'UserInfo',
  components: {
    Info,
    Topic
  },
  data () {
    return {
      collectionNum: 0
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
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
    ...mapActions(['getUserInfo']),
    async requestData () {
      this.$loading(true, '', 85)
      await this.getUserInfo({name: this.$route.params.name})
      this.collectionNum = this.userInfo.recent_replies.length
      this.$loading(false)
    }
  }
}
</script>
<style lang="stylus">
.page-user-info
  margin:40px 10px 0
  padding-top:20px
  background: #fff
</style>
