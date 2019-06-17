<template>
  <div class="user-info">
    <div class="__hd">
      <img
        :src="src"
        class="__avatar"
        alt="">
      <p class="__name">{{ name }}</p>
    </div>
    <div class="__bd">
      <p class="__score">{{ score }}积分</p>
      <p class="__collection">{{ collection }}个话题收藏</p>
      <p class="user-github">github:<a
        :href="`https://github.com/${githubName}`"
        class="ui-link">{{ githubName }}</a></p>
      <p class="__time">
        注册时间{{ time|replayDay }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Info',
  props: {
    name: {
      type: String,
      default: '',
      required: true
    },
    src: {
      type: String,
      default: '',
      required: true
    },
    score: {
      type: Number,
      default: 0,
      required: true
    },
    collection: {
      type: Number,
      default: 0,
      required: true
    },
    time: {
      type: String,
      default: '',
      required: true
    },
    githubName: {
      type: String,
      default: '',
      required: true
    }
  }
}
</script>
<style lang="stylus" scoped>
.user-info
  text-align :left
  padding-left:20px
  .__hd
    display : flex
    align-items :center
    .__avatar
      width: 80px
      height: 80px
      margin-right:20px
      border-radius: 6px
    .__name
      width:400px
      color: #778087
      text-align :left
  .__bd
    p
      font-size: 28px
      line-height :50px
    .__collection,.user-github,.__time
      color:#778087
    .user-github
      .ui-link
        color:#778087

</style>
