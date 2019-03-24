<template>
  <div class="headtop_container">


   <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
     <el-breadcrumb-item  key="index">{{this.$route.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

</template>
<script>
  export default {

  }

</script>
<style scoped>
  .headtop_container{
    background-color: #EFF2F7;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 20px;
  }
</style>
