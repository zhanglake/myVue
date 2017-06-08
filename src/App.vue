<!-- 展示模板 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
 
<script type="text/javascript" src="echarts/echarts.min.js"></script>
<script>
  export default {
    name: 'app',
    components: {}
  }
</script>
<!-- 样式代码 -->
<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
