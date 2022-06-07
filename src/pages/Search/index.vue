<template>
    <div>
        我是搜索
        <h1>我是params参数——————————{{$route.params.keyword}}====={{keyword}}</h1>
        <h1>我是query参数—————————{{$route.query.k}}====={{k}}</h1>
    </div>
</template>
<script>
export default {
    name: '',
    // 
    props:['keyword','k']
}
</script>

<style lang="less" scoped>

</style>