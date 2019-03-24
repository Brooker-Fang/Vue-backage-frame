<template>
  <div id="app" class="fillcontainer">

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less" scoped>
  @import "./style/public";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  html,body {
    padding: 0;
    margin: 0;
    border: 0;
    height: 100%;
    width: 100%;
  }
</style>
