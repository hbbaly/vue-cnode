<template>
  <div class="page page-topicdetail">
    <div class="container topicdetail-container">
      <Title
        :top="topicDetail.top"
        :tab="topicDetail.tab"
        :author="topicDetail.author?topicDetail.author.loginname:''"
        :create="topicDetail.create_at"
        :count="topicDetail.visit_count"
        :isShare="topicDetail.is_collect"
        :title="topicDetail.title"/>
      <Content :content="topicDetail.content" />
      <Replay :replay="topicDetail.replies"/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Title from './components/TitleView'
import Content from './components/ContentView'
import Replay from './components/ReplayView'
export default{
  name: 'TopicDetail',
  components: {
    // Nav,
    Title,
    Content,
    Replay
  },
  computed: {
    ...mapGetters(['topicDetail'])
  },
  async mounted () {
    this.$loading(true)
    await this.getTopicDetail({id: this.$route.params.id})
    this.$loading(false)
  },
  methods: {
    ...mapActions(['getTopicDetail'])
  }
}
</script>

<style lang="stylus">
.topicdetail-container
  padding: 40px 10px 0
  background:#f6f6f6
</style>
