import Vue from 'vue'
import App from './App.vue'
// 三级联动组件 ----注册全局组件
import TypeNav from '@/components/TypeNav'
import Carsousel from '@/components/Carousel'
// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carsousel.name,Carsousel)
// 引入MockServer.js-----mock数据
import '@/mock/mockServe'
// 引入swiper样式
import "swiper/css/swiper.css"
Vue.config.productionTip = false
// 引入路由
import router from '@/router';
// 引入仓库
import store from '@/store'
// // 测试
// import {reqCategoryList} from '@/api'
// reqCategoryList();
new Vue({
  render: h => h(App),
  // 配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  // 注册路由：底下的写法KV一致省略V【router小写的】
  // 注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  router,
  // 注册仓库:组件实例身上会多个一个属性$store属性
  store
}).$mount('#app')
