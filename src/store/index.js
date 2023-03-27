//该文件用于创建vuex中的核心store
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
//求和相关功能
const countOptions = {
    actions:{
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
    },
    mutations:{
        ADD(state,value){
            state.sum += value
        },
        JIAN(state,value){
            state.sum -= value
        },
    },
    state:{
        sum:0,
        school:'WZBC',
        subject:'计算机科学与技术',
    },
    getters:{
        bigSum(state) {
            return state.sum * 10
        }
    }
}
//人员管理相关功能
const personOptions = {
    actions:{},
    mutations:{
        ADD_PERSON(state,value){
            console.log("被调用了")
            state.personList.unshift(value)
        }
    },
    state:{
        personList:[
            {id:'001',name:'张三'}
        ]
    },
    getters:{}
}
//创建store
export default new Vuex.Store({
    modules:{
        a:countOptions,
        b:personOptions
    }
})
//暴露store
//export default store