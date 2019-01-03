<template>
  <div class="module-nav">
    <img
      class="__logo"
      src="//static2.cnodejs.org/public/images/cnodejs_light.svg" >
    <input
      :class="{'__search_bg':isFocus}"
      type="text"
      class="__search"
      @focus = "focus"
      @blur = "blur" >
    <div class="nav-item">
      <a
        v-for="item in navList"
        :href="item.path"
        :key = "item.title"
        class="__list">{{ item.title }}
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    navList: {
      type: Array,
      default () {
        return [
          {
            path: '/',
            title: '首页'
          },
          {
            path: 'https://cnodejs.org/getstart',
            title: '新手入门'
          },
          {
            path: 'https://cnodejs.org/api',
            title: 'API'
          },
          {
            path: 'https://cnodejs.org/about',
            title: '关于'
          }
        ]
      },
      required: false
    }
  },
  data () {
    return {
      isFocus: false
    }
  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      this.isFocus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .module-nav
    position: relative
    z-index: 10
    width:100%
    background: #444
    font-size: 26px
    .__logo
      width: 240px
      height: 68px
      margin:0 auto
    .__search
      display :block
      width: 412px
      height:60px
      padding: 6px 10px 6px 44px
      margin:4px auto 0
      line-height :60px
      color: #666
      font-size: 26px
      font-weight: 400
      border: 0
      border-radius: 30px
      box-shadow: none;
      background: url('https://static2.cnodejs.org/public/images/search.e53b380a.hashed.png') 12px 12px no-repeat #888
      transition: all .5s
    .__search_bg
      background: url('https://static2.cnodejs.org/public/images/search.e53b380a.hashed.png') 12px 12px no-repeat #fff
    .nav-item
      display :flex
      width:80%
      margin: 0 auto
      justify-content : space-around
      .__list
        color: #ccc
        padding: 20px 30px
        line-height: 40px

</style>
