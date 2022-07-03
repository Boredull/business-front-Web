import { reqCategoryList, reqGetBannerList,reqFloorList } from "@/api";
// home模块的小仓库
const state = {
    // state中数据默认初始值别瞎写，服务器返回对象，服务器返回数组。【根据接口返回值初始化的】
    categoryList:[],
    // 轮播图的数据
    bannerList:[],
    floorList:[]
};
// mutions是唯一修改state的地方
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state,bannerList) {
        state.bannerList = bannerList;
        // console.log("修改数据")
    },
    GETFLOORLIST(state,floorList) {
        state.floorList = floorList;
    }
};
const actions = {
    // 通过API里面的接口函数调用，向服务器发请求，获取服务器数据
   async categoryList({commit}){
        let result = await reqCategoryList();
        // console.log(result);
        if(result.code==200){
            commit("CATEGORYLIST",result.data);
        }
    },
    // 获取首页轮播图的数据
    async getBannerList({commit}) {
        // console.log('向服务器发起ajax请求，获取轮播图的数据')
        let result = await reqGetBannerList();
        if(result.code==200){
            commit('GETBANNERLIST',result.data);
        }
    },
    // 获取floor数据
    async getFloorList({commit}) {
        let result = await reqFloorList();
        if(result.code == 200) {
            commit('GETFLOORLIST',result.data)
        }
    }
};
// 计算属性
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}