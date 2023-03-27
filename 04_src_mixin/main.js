//引入vue
import Vue from "vue";
//引入App
import App from "./App"
import {hunhe,hunhe2} from "./mixin"
//关闭vue提示
Vue.config.productionTip = false
Vue.mixin(hunhe)
Vue.mixin(hunhe2)
//创建vue实例
new Vue({
    el:"#app",
    render : h => h(App)
})