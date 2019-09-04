import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //使用vuex插件

const store = new Vuex.Store({
    state: {
        username : "",
    },
    getters:{
        getUsername(state){
            return state.username;
        }
    },
    mutations:{
        updateUsername(state,username){
            state.username = username;
            window.console.log(state.username);
        }
    }
})

//导出store
export default store;