<template>
  <div class="page page-index">

    hbb
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
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
