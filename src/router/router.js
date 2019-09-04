import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'
import Main from '../components/Main'

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
        }
    ]
})

export default router;