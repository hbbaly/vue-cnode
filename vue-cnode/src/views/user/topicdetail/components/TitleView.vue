<template>
  <div class="topic-title">
    <div class="__hd">
      <span class="__title">
        <span
          v-if="tab!=='dev'"
          :class="{'__tab_bg':top}"
          class="__tag">{{ tab|dealTab(top) }}
        </span>
        {{ title }}
      </span>
    </div>
    <div class="__bd">
      <div class="__author-info">
        <span class="ui-span __time">发布于{{ create|replayDay }}</span>
        <span class="ui-span __name">作者 {{ author }}</span>
        <span class="ui-span __visit_count">{{ count }} 次浏览</span>
        <span class="ui-span __isShare">来自 {{ isShare?'原创':'分享' }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Title',
  props: {
    title: {
      type: String,
      default: '',
      required: true
    },
    top: {
      type: Boolean,
      default: false,
      required: true
    },
    tab: {
      type: String,
      default: 'all',
      required: true
    },
    create: {
      type: String,
      default: '',
      required: true
    },
    author: {
      type: String,
      default: '',
      required: true
    },
    count: {
      type: Number,
      default: 0,
      required: true
    },
    isShare: {
      type: Boolean,
      default: false,
      required: true
    }
  }
}
</script>
<style lang="stylus" scoped>
.topic-title
  padding:20px
  background:#fff
  border-radius: 6px 6px 0 0
  .__hd
    display :flex
    background:#fff
    .__tag
      display: inline-block
      height 40px
      padding:0 10px
      line-height 40px
      color: #fff
      font-size: 24px
      background: #80bd01
      border-radius: 6px
    .__title
      display: inline-block
      width: 75%
      vertical-align: bottom
      font-size: 40px
      text-align :left
      font-weight: 700
      line-height: 130%
  .__bd
    margin-top:20px
    padding-bottom:20px
    .__author-info
      font-size: 24px
      color: #838383
      text-align :left
      line-height :1.3
      .ui-span
        position relative
        display :inline-block
        margin-right: 20px
        word-break: break-word
      .ui-span:before
        content: "•"
        position: absolute
        left: -10px
</style>
