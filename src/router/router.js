import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Main from '../components/Main'
import HelloWorld from '../components/HelloWorld'
import Todolist from '../components/Todolist'

Vue.use(VueRouter)

var router =  new VueRouter({
    routes: 
    [
        {
            path:'/home',
            component:Home
        },
        {
            path:'/main',
            component:Main
        },
        {
            path:'/hello',
            component:HelloWorld
        },
        {
            path:'/todolist',
            component:Todolist
        }
    ]
})

export default router;