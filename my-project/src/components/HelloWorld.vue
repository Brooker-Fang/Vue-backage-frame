<template>
  <div class="main_page">
    <el-row style="height: 100%;">

          <el-col :span="24" class="top_nav">
            <el-col :span="4" class="logo">
                  管理系统
            </el-col>

            <el-col :span="20" >
              <el-menu
                :default-active="defaultActive"
                class="el-menu-demo"
                mode="horizontal"
                style="border:0"
                background-color="#324057"
                text-color="#fff"
                active-text-color="#ffd04b"
                router>
                <el-menu-item index="/Manage">处理中心</el-menu-item>

                <el-menu-item index="/Set">订单管理</el-menu-item>
              </el-menu>

            </el-col>
          </el-col>
      <el-col :span="24"  style="height: 89%">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }

  },
   created(){
     this.defaultManRouter()

   },
  computed: {
    defaultActive: function() {
      return this.$router.path = '/Manage'

    },

  },
  methods :{
    defaultManRouter: function (){

      this.$router.push({path:'/Home'})
    },

  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  html,body {
    padding: 0;
    margin: 0;
    border: 0;
    width: 100%;
    height:100%;
  }
  .el-menu--horizontal .el-menu-item, .el-menu--horizontal .el-submenu .el-submenu__title{
    height: 70px;
    line-height: 70px;
  }
  .el-submenu .el-submenu__title{
    height: 70px;
    line-height: 70px;
  }
  .content-container {
    float: left;
    height: 400px;
    width: 100%;
    background-color: aliceblue;
  }
  .main_page {
    height: 100%;
    width: 100%;
  }
  .logo {
    height:100%;
    line-height: 70px;
    text-align: center;
    color: white;
    font-size: 22px
  }
  .top_nav {
    height:11%;
    background-color: #324057;
  }

</style>
