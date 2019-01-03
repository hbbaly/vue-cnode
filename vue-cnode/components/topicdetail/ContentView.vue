<template>
  <div class="topic-content">
    <div
      class="topic-wrapper"
      v-html="content"/>
  </div>
</template>
<script>
export default {
  name: 'TopicContent',
  props: {
    content: {
      type: String,
      default: '',
      required: true
    }
  },
  mounted(){
    console.log(this.content)
  }
}
</script>
<style lang="stylus" scoped>
.topic-content
  padding: 0 20px
  text-align: left
  background:#fff
</style>