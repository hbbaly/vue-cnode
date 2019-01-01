<template>
  <div class="page page-user-info">
    <Info
      :src="userInfo.avatar_url"
      :name="userInfo.loginname"
      :score="userInfo.score"
      :time="userInfo.create_at"
      :github-name="userInfo.githubUsername"
      :collection="userInfo.recent_replies.length"/>
  </div>
</template>
<script>
import Info from './components/UserInfoView'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'UserInfo',
  components: {
    Info
  },
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  async mounted () {
    this.$loading(true, '', 100)
    await this.getUserInfo({name: this.$route.params.name})
    this.$loading(false)
  },
  methods: {
    ...mapActions(['getUserInfo'])
  }
}
</script>
<style lang="stylus">
.page-user-info
  margin:0 10px
  background: #fff
</style>
