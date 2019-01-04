<template>
  <div class="page page-topicdetail">
    <header>
      <Header />
    </header>
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
// import { mapActions, mapGetters } from 'vuex'
import Header from '~/components/navbar/IndexView.vue'
import Title from '~/components/topicdetail/TitleView'
import Content from '~/components/topicdetail/ContentView'
import Replay from '~/components/topicdetail/ReplayView'
import axios from 'axios'
export default{
  name: 'TopicDetail',
  head () {
    return {
      title: this.topicDetail.title,
      meta: [
        { hid: 'description', name: 'description', content: this.topicDetail.title }
      ],
    }
  },
  asyncData({ params }) {
    return axios.get(`https://cnodejs.org/api/v1/topic/${params.id}`).then(res => {
      return { topicDetail: res.data.data }
    })
  },
  components: {
    Header,
    Title,
    Content,
    Replay
  },
  // 是否在渲染前滚动到页面你顶部
  scrollToTop: false,
  // trransition： 用来控制页面过度
  // transition: {
  //   name: 'page',
  //   mode: 'out-in'
  // },
  computed: {
    // ...mapGetters(['topicDetail'])
  },
  async mounted () {
    console.log(this)
    // this.$loading(true)
    // await this.getTopicDetail({id: this.$route.params.id})
    // this.$loading(false)
  },
  methods: {
    // ...mapActions(['getTopicDetail'])
  }
}
</script>

<style lang="stylus">
.topicdetail-container
  padding: 40px 10px 0
  background:#f6f6f6
</style>