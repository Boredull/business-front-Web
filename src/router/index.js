//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes';

// 引入store
import store from '@/store'

Vue.use(VueRouter)
// 需要重写VueRouter.prototype原型对象身上的push|replace方法
// 先把VueRouter.prototype身上的push|replace方法进行保存一份
let originPush = VueRouter.prototype.push
let originReplace = VueRouter.prototype.push
// 重写push|replace
// 第一个参数：告诉原来push方法，你往哪里跳转（传递哪些参数）、
// 第二个参数：成功的回调
// 第三个参数：失败的回调
// call||apply 的区别
// 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
// 不同点:call与apply传递参数：call传递参数用逗号隔开，apply方法执行，传递数组
// 重写VueRouter.prototype身上的push方法了
VueRouter.prototype.push = function(location,resolve,reject){
    if(resolve && reject ) {
        originPush.call(this, location, resolve, reject)
    }else{
        originPush.call(this,location, ()=>{},()=>{})
    }
}
// 重写VueRouter.prototype身上的replace方法了
VueRouter.prototype.replace = function(location, resolve, reject) {
    if(resolve && reject ) {
        originReplace.call(this, location, resolve, reject)
    }else{
        originReplace.call(this, location, ()=>{},()=>{})
    }
}
// 对外暴露VueRouter类的实例
let router = new VueRouter ({
    // 配置路由
    // 第一：路径的前面需要有/(不是二级路由)
    // 路径中单词都是小写的
    // component右侧V别给我加单引号【字符串：组件是对象（VueComponent类的实例)】
    routes,
    // 滚动行为
    scrollBehavior (to, from, savedPosition) {
        // 返回的这个y=0, 代表的滚动条在最上方
        return { y:0 }
    }
})
// 全局守卫：前置守卫（在路由跳转之间进行判断）
router.beforeEach((to,from,next)=>{
    // to:可以获取到你要跳转到那个路由信息
    // from:可以获取到你从哪个路由而来的信息
    // next:放行函数  next() 放行  next(path)放行到指令路由 next(false);
    next();
    console.log(store);
})

export default router;
