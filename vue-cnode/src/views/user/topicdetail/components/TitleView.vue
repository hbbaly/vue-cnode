<template>
  <div class="topic-title">
    <div class="__hd">
      <span/>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  mounted () {
    this.getTopicDetail({id: this.$route.params.id})
  },
  methods: {
    ...mapActions(['getTopicDetail'])
  }
}
</script>
<style lang="stylus" scoped>
</style>
