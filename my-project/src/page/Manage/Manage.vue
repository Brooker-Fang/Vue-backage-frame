<template>
  <div class="Manage_page">
    <el-row style="height: 100%;">
      <el-col :span="4" style="background-color: #324057;height: 100%">
        <el-menu :default-active="$route.path" style="min-height: 100%; " background-color="#324057" router active-text-color="#20a0ff" text-color="#bfcbd9">
          <el-menu-item index="Home"><i class="el-icon-menu"></i>首页</el-menu-item>
          <el-submenu index="2" >
            <template slot="title"><i class="el-icon-document"></i>数据管理</template>
            <el-menu-item
              v-for="menu in menus"
              :index="menu.route"
              :key="menu.route"
            >
              <i :class="menu.class"></i>{{menu.name}}

            </el-menu-item>
          </el-submenu>

        </el-menu>
      </el-col>
      <el-col :span="20" style="background-color: aliceblue;height: 100%">
        <el-tabs
          v-model="activeIndex"
          type="border-card"
          closable
          @tab-click="tabClick"
          v-if="options.length"
          @tab-remove="tabRemove">
          <el-tab-pane
            :key="item.name"
            v-for="(item, index) in options"
            :label="item.name"
            :name="item.route">

            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-tab-pane>
        </el-tabs>
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
  import store from '../../store/store'
  export default {
    data() {
      return {
        menus: [

          { route: '/user', name: '用户管理',class:'el-icon-location-outline'},
          { route: '/shop', name: '商家管理',class:'el-icon-star-off'},
          { route: '/addUser', name: '添加员工',class:'el-icon-edit'},
          { route: '/addGoods', name: '添加货物',class:'el-icon-phone-outline'},

        ]
      }
    },
    store,
    mounted() {
      if(this.$route.path =='/Manage'){
        this.$store.commit('add_tabs',{route:'/Manage',name:'用户管理'})
        this.$store.commit('set_activeTab','/Manage')
      }else{
        this.$store.commit('add_tabs',{route:this.$route.path,name:this.$route.name})
        this.$store.commit('set_activeTab',this.$route.path)
      }
    },
    computed: {
      options() {
        return this.$store.state.options
      },
      activeIndex: {
        get () {
          return this.$store.state.activeIndex;
        },
        set (val) {
          this.$store.commit('set_activeTab', val);
        }
       },

    },
    methods:{
      //点击tab切换路由
      tabClick(tab) {
        let path = this.activeIndex;
        this.$router.push({path:path})
      },
      //删除路由
      tabRemove(targetName) {
        console.log(targetName)
        if(targetName == '/Home'){
          return ;
        }
        this.$store.commit('delete_tab',targetName)
        //如果删除的tab 与激活的tab 相同，设置当前激活路由
        if(this.activeIndex == targetName){
          if (this.options && this.options.length >= 1) {
            this.$store.commit('set_activeTab', this.options[this.options.length-1].route);
            this.$router.push({path: this.activeIndex});
          } else {
            this.$router.push({path: '/'});
          }
        }
      }
    },
    watch:{
      $route(to){
        let flag = false;
        for (let option of this.options ) {
          if (option.name === to.name) {
            flag = true;
            this.$store.commit('set_activeTab', '/' + to.path.split('/')[1]);
            break
          }
        }
        if (!flag) {
          this.$store.commit('add_tabs', {route: '/' + to.path.split('/')[1], name: to.name});
          this.$store.commit('set_activeTab', '/' + to.path.split('/')[1]);
        }
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
