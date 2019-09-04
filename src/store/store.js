import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex) //使用vuex插件

const store = new Vuex.Store({
    state: {
        username : "",
        messages:[]
    },
    getters:{
        getUsername(state){
            return state.username;
        },
        getMessages(state){
            window.console.log(state.messages.length);
            return state.messages;
        }

    },
    mutations:{
        updateUsername(state,username){
            state.username = username;
            window.console.log(state.username);
        },
        updateMessage(state,message){
            state.messages.push(message);
            // window.console.log("拿到了："+message);
            for(let i = 0 ;i < state.messages.length;i++){
                // window.console.log("米格："+state.messages[i]);
            }
        }
    }
})

//导出store
export default store;