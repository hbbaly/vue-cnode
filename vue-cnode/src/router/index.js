import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index/IndexView'
import Detail from '@/views/user/topicdetail/IndexView'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/user/topicdetail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})
