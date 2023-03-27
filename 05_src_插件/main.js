//引入vue
import Vue from "vue";
//引入App
import App from "./App"
//关闭vue提示
//引入插件
import plugins from "@/plugins";
//应用插件
Vue.use(plugins)
Vue.config.productionTip = false
//创建vue实例
new Vue({
    el:"#app",
    render : h => h(App)
})