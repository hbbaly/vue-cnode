<template>
  <div class="page page-index">
    <div class="container">
      <TopicList />
    </div>
  </div>
</template>
<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import TopicList from './components/TopicListView.vue'
@Component({
  components: {
    TopicList
  }
})
export default class Index extends Vue {
}
</script>
