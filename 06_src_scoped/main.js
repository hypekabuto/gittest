//引入vue
import Vue from "vue";
//引入App
import App from "./App"
//关闭vue提示
Vue.config.productionTip = false
//创建vue实例
new Vue({
    el:"#app",
    render : h => h(App)
})