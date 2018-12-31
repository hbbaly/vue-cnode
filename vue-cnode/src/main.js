// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import 'lib-flexible'
import './stylus/reset.styl'
import filters from './filters/allFilters'
import C_UI from './components/common/index'
Vue.config.productionTip = false
Vue.use(C_UI)
Object.keys(filters).forEach((key) => Vue.filter(key, filters[key]))
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
