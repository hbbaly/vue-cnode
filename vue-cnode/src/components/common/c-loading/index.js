
// 这里就是我们刚刚创建的那个静态组件
import loadingComponent from './loading.vue'
import Vue from 'vue'
// 返回一个 扩展实例构造器
const LoadingConstructor = Vue.extend(loadingComponent)

// 定义弹出组件的函数 接收2个参数, 要显示的文本 和 显示时间
function showLoading (bool = false, content = '', postop = 30) {
  let hasLoading = document.getElementsByClassName('loading')
  if (hasLoading.length > 0) {
    hasLoading[0].parentNode.removeChild(hasLoading[0])
  }
  // 实例化一个 loading.vue
  const loadingDom = new LoadingConstructor({
    el: document.createElement('div'),
    data () {
      return {
        content: content,
        loadingSwitch: bool,
        loadingCondition: bool,
        postop: postop
      }
    }
  })

  // 把 实例化的 loading.vue 添加到 body 里
  document.body.appendChild(loadingDom.$el)
  if (!bool) {
    loadingDom.loadingSwitch = false
    loadingDom.loadingCondition = false
  }
}

// 注册为全局组件的函数
function install (vue) {
  // 将组件注册到 vue 的 原型链里去,
  // 这样就可以在所有 vue 的实例里面使用 this.$loading()
  vue.prototype.$loading = showLoading
}

export default {
  install
}
