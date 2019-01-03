<template>
  <div class="topic-list-wrapper">
    <div
      v-for="(item,index) in list"
      :key="index"
      :class="{'_border':index===0}"
      class="topic-list">
      <div class="__content">
        <img
          :src="item.author.avatar_url"
          class="__avatar ui-img"
          @click="jumpUser(item.author.loginname)">
        <div
          class="__title"
          @click="jumpDetail(item.id)">
          <span
            v-if="item.tab&&item.tab!=='dev'"
            :class="{'__tab_bg':item.top}"
            class="__tab">{{ item.tab|dealTab(item.top) }}</span>
          <p class="__cont">{{ item.title }}</p>
        </div>
        <span class="__replay">{{ item.last_reply_at|replayDay }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      default () {
        return []
      },
      required: true
    }
  },
  methods: {
    jumpDetail (id) {
      this.$emit('jumpDetail', id)
    },
    jumpUser (name) {
      this.$emit('jumpUser', name)
    }
  }
}
</script>
<style lang="stylus" scoped>
.topic-list
  display:flex
  align-items:center
  padding: 20px
  font-size: 28px
  border-top: 2px solid #f0f0f0
  .__content
    position relative;
    display:flex
    align-items:center
    width:100%
    .__avatar
      width:60px
      height:60px
      margin-right:10px
      border-radius: 6px
    .__title
      display :flex
      align-items :center
      text-align:left
      .__tab
        padding: 10px
        font-size:20px
        color: #999
        background-color: #e5e5e5
        border-radius: 3px
      .__tab_bg
        color: #fff
        background: #80bd01
      .__cont
        width:450px
        margin-left:10px
        overflow: hidden
        white-space: nowrap
        text-overflow: ellipsis
        color: #333
        font-size:26px
    .__replay
      position absolute
      top:0;
      right:0
      color: #778087
      font-size:22px
      line-height 60px
      white-space: nowrap
._border
  border:0
</style>
