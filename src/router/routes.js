import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Detail from '@/pages/Detail'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'
import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'
// 引入二级路由组件
import MyOrder from '@/pages/Center/myOrder'
import GroupOrder from '@/pages/Center/groupOrder'
// 路由配置信息
export default [
    {
        path:'/center',
        component:Center,
        meta:{show:true},
        // 二级路由组件
        children:[
            {
                path:'myorder',
                component:MyOrder,
            },
            {
                path:'grouporder',
                component:GroupOrder
            },
            {
                path:'/center',
                redirect:'/center/myorder'
            }
        ]
    },
    {
        path:'/paySuccess',
        component:PaySuccess,
        meta:{show:true}
    },
    {
        path:'/pay',
        component:Pay,
        meta:{show:true}
    },
    {
        path:'/trade',
        component:Trade,
        meta:{show:true}
    },
    {
        path:'/shopcart',
        component:ShopCart,
        meta:{show:true}
    },
    {
        path:'/addcartsuccess',
        name:'addcartsuccess',
        component:AddCartSuccess,
        meta:{show:true}
    },
    {
        path:'/detail/:skuid',
        component:Detail,
        meta:{show:true}
    },
    {
        path:'/home',
        component:Home,
        meta:{show:true}
    },
    {
        // :keyword占位符，？代表参数可传可不传
        path:'/search/:keyword?',
        component:Search,
        meta:{show:true},
        name:'search',
        // 路由组件能不能传递props数据？
        // 布尔值写法:params
        // props:true,
        // 对象写法：额外的给路由组件传递一些props
        // props:{a:1,b:2}
        // 函数写法：可以params参数、query参数，通过props传递给路由组件
        props:($route)=>{({keyword:$route.params.keyword,k:$route.query.k})}
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