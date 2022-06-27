<template>

  <div id="app">
    <Header></Header>
    <!-- 我是根组件 -->
    <!-- 路由组件出口的地方 -->
    <router-view></router-view>
    <!-- <Footer v-show="$route.path =='/home' || $route.path == '/search'"></Footer> -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/header/index.vue'
import Footer from './components/footer/index.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  mounted() {
    // 派发一个action || 获取商品分类的三级列表的数据
    this.$store.dispatch("categoryList")
  }
}
</script>

<style>

</style>
