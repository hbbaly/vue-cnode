<template>
  <div class="page page-index">
    <TopicList :list="topicList" />
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import TopicList from './components/TopicListView'
export default {
  name: 'Index',
  components: {
    TopicList
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['topicList'])
  },
  mounted () {
    this.getTopics()
  },
  methods: {
    ...mapActions(['getTopics'])
  }
}
</script>
