import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
      activeIndex:'',
      options:[]
    },
    mutations:{
      //添加标签tab
      add_tabs(state,route){
          this.state.options.push(route)
      },
      //删除tab
      delete_tab(state,route){
        let index = 0;
        for(let option of state.options){
          if(option.route == route){
              break;
          }
          index++;
        }
        this.state.options.splice(index,1)
      },
      //设置当前激活的tab
      set_activeTab(state,index){
        this.state.activeIndex = index;
      }
    }

})

