<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import Nav from './components/navbar/IndexView.vue'
@Component({
  components: {
    Nav
  }
})
export default class App extends Vue {
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:#f6f6f6
}
.page{
  padding-bottom:40px
}
</style>
