<template>
  <div class="topic-list-wrapper">
    <div
      v-for="item in list"
      :key="item.id"
      class="topic-list">
      <div class="_left">
        <img
          :src="item.author.avatar_url"
          class="__avatar ui-img" >
        <div class="__title">
          <span class="__tab">{{ item.tab|dealTab }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'TopicList',
  props: {
    list: {
      type: Array,
      default () {
        return []
      },
      required: true
    }
  }
}
</script>
<style lang="stylus" scoped>
  .topic-list-wrapper
    width:100%
    .topic-list
      display:flex
      align-items:center
      padding: 10px 10px 0 10px
      font-size: 28px
      ._left
        display:flex
        align-items:center
        .__avatar
          width:60px
          height:60px
          border-radius: 6px
        .__title
          .__tab
            padding: 4px 8px
            font-size:24px
            line-height :80px
            color: #fff
            background: #80bd01
            border-radius: 3px

</style>
