<template>

  <div id="app">
    <Header></Header>
    我是根组件
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header/Header.vue'
import Footer from './components/footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  }
}
</script>

<style>

</style>
