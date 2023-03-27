//引入vue
import Vue from "vue";
//引入App
import App from "./App"
//引入vueResource插件
import vueResource from 'vue-resource'
//引入store
import store from './store/index'
//关闭vue提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)

//创建vue实例
new Vue({
    el:"#app",
    render : h => h(App),
    store,
    beforeCreate() {
        Vue.prototype.$bus = this
    }
})