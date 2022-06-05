//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
export default new VueRouter ({
    routes:[
        {
            path:'/home',
            component:Home,
            meta:{show:true}
        },
        {
            path:'/search/:keyword',
            component:Search,
            meta:{show:true},
            name:'search'
        },
        {
            path:'/login',
            component:Login,
            meta:{show:false}
        },
        {
            path:'/register',
            component:Register,
            meta:{show:false}
        },
        // 重定向，项目跑起来，访问/，立马定向到首页

        {
            path:'*',
            redirect:'/home'
        }
    ]
})