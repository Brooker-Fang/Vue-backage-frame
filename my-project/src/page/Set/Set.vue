<template>
  <div class="Manage_page">
    <el-row style="height: 100%;">
      <el-col :span="4" style="background-color: #324057;height: 100%">
        <el-menu :default-active="$route.path" style="min-height: 100%; " background-color="#324057" router active-text-color="#20a0ff" text-color="#bfcbd9">
          <el-menu-item
            v-for="menu in menus"
            :index="menu.route"
            :key="menu.route"
          >
            <i class="el-icon-menu"></i>{{menu.name}}

          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" style="background-color: aliceblue;height: 100%">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
  .Manage_page {
    height: 100%;
    width: 100%;
  }
</style>
<script>
  export default {
    data() {
      return {
        menus: [
          { route: '/Set', name: '设置'},


        ]
      }
    }
    /*created(){
      this.defaultHomeRouter()
    },
    methods:{
      defaultHomeRouter:function (){
        this.$router.push({path:'/Home'})
      }
    }*/
  }

</script>
