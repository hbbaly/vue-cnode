import Vue from 'vue'
// 只在客户端使用 lib-flexible
if (process.browser) {
  const flexible = require('lib-flexible')
  Vue.use(flexible)
}
