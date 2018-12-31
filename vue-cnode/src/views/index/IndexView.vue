<template>
  <div class="page page-index">
    <header>
      <Nav :navList = "navList"/>
    </header>
    <div class="container">
      <TopicList />
    </div>
  </div>
</template>
<script>
import Nav from '@/components/navbar/IndexView'
import TopicList from './components/TopicListView'
export default {
  name: 'Index',
  components: {
    Nav,
    TopicList
  },
  data () {
    return {
      navList: [
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
    }
  }
}
</script>
