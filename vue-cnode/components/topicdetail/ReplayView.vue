<template>
  <div class="module-replay">
    <p>{{ replay.length }}回复</p>
    <div
      v-for="(item, index) in replay"
      :key="index"
      class="replay-item">
      <div class="__top">
        <img
          :src="item.author.avatar_url"
          class="__avatar"
          @click="jumpUser(item.author.loginname)" >
        <p class="__name">{{ item.author.loginname }}</p>
        <p class="__floor">{{ index }}楼</p>
        <p class="__time">{{ item.create_at|replayDay }}</p>
        <p
          v-if="item.ups.length"
          class="replay_up">
          <img
            class="ui-img"
            src="~/assets/images/up.png"
            alt="">
          <span class="up_number">{{ item.ups.length }}</span>
        </p>
      </div>
      <div
        class="__content"
        v-html="item.content"/>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Replay',
  props: {
    replay: {
      type: Array,
      default () {
        return []
      },
      required: true
    }
  },
  methods: {
    jumpUser (name) {
      this.$router.push(`/user/${name}`)
    }
  }
}
</script>
<style lang="stylus" scoped>
.module-replay
  padding:0 10px
  background:#fff
  .replay-item
    border-bottom: 2px solid #ccc
    .__top
      position :relative
      display :flex
      margin-top:20px
      .__avatar
        width: 60px
        height: 60px
        border-radius: 6px
      .__name,.__floor,.__time
        margin-left: 10px
        line-height :60px
        color: #666
        font-size 24px
      .__floor,.__time
        color: #08c;
      .replay_up
        position :absolute
        top:10px
        right:10px
        display :flex
        align-items :center
        .ui-img
          width:50px
          height:50px
          margin-right:10px
    .__content
      padding:20px 0 50px
      text-align :left
</style>