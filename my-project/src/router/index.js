import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '../page/Manage/Home'
import user from '../page/Manage/user'
import shop from '../page/Manage/shop'
import addUser from '../page/Manage/addUser'
import addGoods from '../page/Manage/addGoods'
import Manage from '../page/Manage/Manage'
import Set from '../page/Set/Set'

Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children : [
        {
          path:'/Manage',
          name:'管理中心',
          component:Manage,
          children: [{
            path: '/user',
            component: user,
            name:'用户列表',
            meta:['用户列表']
          },{
            path:'/shop',
            component:shop,
            name:'商家列表',
            meta:['商家列表']
          },
            {
              path: '/Home',
              component: Home ,
              name:'主页',
              meta:['主页']
            },
            {
              path: '/addUser',
              component: addUser,
              name:'添加用户',
              meta:['添加','添加用户']
            },
            {
              path: '/addGoods',
              component: addGoods,
              name:'添加货物',
              meta:['添加','添加货物']
            }

          ]
        },
        {
            path:'/Set',
            component:Set,
            name:'设置'
        }
      ]
    }


  ]
})

