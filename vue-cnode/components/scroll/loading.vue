<template>
  <div class="mf-loading-container">
    <!-- <img src="./loading.gif"> -->
    <img
      src="./loading.gif"
      alt="">
    <span>正在刷新</span>
  </div>
</template>
<script type="text/ecmascript-6">
const COMPONENT_NAME = 'loading'
export default {
  'name': COMPONENT_NAME
}
</script>
<style lang="stylus" scoped >
.mf-loading-container {
  img {
    width: 40px;
    height: 40px;
    display: inline-block;
    vertical-align: middle;
    animation: mymove 1s infinite;
    -webkit-animation: mymove 1s infinite;
  }
  span {
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
    line-height: 40px;
  }
}

@keyframes mymove {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
