<template>
  <transition name="slide-fade">
    <div
      v-if="loadingSwitch"
      ref= "loading"
      class="loading"
      @touchmove.prevent>
      <img
        src="./images/loading.gif"
        class="ui-img"
        alt="">
      <div
        v-if="content"
        class="ui-text">{{ content }}</div>
      <slot/>
    </div>
  </transition>
</template>

<script>
/**
 * loading组件
 *
 * @desc 组件描述
 * @author  hbb
 * @date 2018.11.10
 *
 * @param {String}  [content]  - 提示信息
 *
 * @example 调用示例
 *
 *   this.$loading(toastMsg)
 *
 * @desc
 *   - 重构
 */
export default{
  data () {
    return {
      num: 0
    }
  },
  computed: {

  },
  mounted () {
    this.num++
    if (this.loadingSwitch) {
      this.$nextTick(() => {
        // setTimeout(() => {
        console.log(this.$refs.loading, this.num)
        this.$refs.loading.style.top = `${this.postop}px`
        // }, 200)
      })
    }
  }
}
</script>

<style lang="css" scoped>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .2s linear;
}
.slide-fade-leave-active {
  transition: all .2s linear;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  opacity: 0;
}
.loading {
  display: flex;
  position: fixed;
  justify-content: center;
  flex-direction: column;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10000;
  align-items: center;
  background: rgba(200,200,200,1);
}
.ui-img{
    width: 100px;
    height: 100px;
  }
  .ui-text {
    max-width: 400px;
    margin-top: 40px;
    padding: 15px 32px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    font-size: 24px;
    line-height: 40px;
    text-align: center;
  }
</style>
