//该文件用于创建vuex中的核心store
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//准备actions对象，用于响应组件里面的动作
const actions = {
    // add(context,value){
    //     context.commit('ADD',value)
    // },
    // jian(context,value){
    //     context.commit('JIAN',value)
    // },
    addOdd(context,value){
        if(context.state.sum % 2){
            context.commit('ADD',value)
        }
    },
    addWait(context,value){
        setTimeout(()=>{
            context.commit('ADD',value)
        },500)
    }
}
//准备mutations，用于操作数据
const mutations = {
    ADD(state,value){
        state.sum += value
    },
    JIAN(state,value){
        state.sum -= value
    }
}
//state，用于存储数据
const state = {
    //当前的和
    sum:0,
    school:'WZBC',
    subject:'计算机科学与技术'
}
//getters用于将state中的数据进行加工
const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}
//创建store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})
//暴露store
//export default store