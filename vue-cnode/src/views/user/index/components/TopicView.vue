<template>
  <div class="module-topic">
    <p class="__title">最近创建的话题</p>
    <Topic
      v-if="createTopic.length"
      :list="createTopic"
      @jumpUser="jumpUser"
      @jumpDetail="jumpDetail"/>
    <p class="__title">最近参与的话题</p>
    <Topic
      v-if="joinTopic.length"
      :list="joinTopic"
      @jumpUser="jumpUser"
      @jumpDetail="jumpDetail"/>
  </div>
</template>
<script>
import Topic from '@/components/list/IndexView'
export default {
  name: 'TopicModule',
  components: {
    Topic
  },
  props: {
    createTopic: {
      type: Array,
      default () {
        return []
      },
      required: true
    },
    joinTopic: {
      type: Array,
      default () {
        return []
      },
      required: true
    }

  },
  data () {
    return {
      pullDown: false,
      pullUp: false
    }
  },
  methods: {
    jumpDetail (id) {
      this.$router.push(`/user/topicdetail/${id}`)
    },
    jumpUser (name) {
      this.$router.push(`/user/${name}`)
    }
  }
}
</script>
<style lang="stylus" scoped>
.__title
  padding: 20px
  background: #f6f6f6
  border-radius: 3px 3px 0 0
  text-align :left
</style>
