import Vue from 'vue'
import App from './App.vue'
// 三级联动组件 ----注册全局组件
import TypeNav from '@/components/TypeNav'
import Carsousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
// 第一个参数：全局组件的名字 第二个参数：哪一个组件
Vue.component(TypeNav.name,TypeNav);
Vue.component(Carsousel.name,Carsousel);
Vue.component(Pagination.name,Pagination);
// 引入MockServer.js-----mock数据
import '@/mock/mockServe'
// 引入swiper样式
import "swiper/css/swiper.css"

// 统一接口api文件夹里面全部请求函数
import * as API from '@/api';
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
    // 全局事件总线$bus配置
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
  // 注册路由：底下的写法KV一致省略V【router小写的】
  // 注册路由信息：当这里书写router的时候，组件身上都拥有$route,$router属性
  router,
  // 注册仓库:组件实例身上会多个一个属性$store属性
  store
}).$mount('#app')
