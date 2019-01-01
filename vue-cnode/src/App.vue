<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/navbar/IndexView'
export default {
  name: 'App',
  components: {
    Nav
  }
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
