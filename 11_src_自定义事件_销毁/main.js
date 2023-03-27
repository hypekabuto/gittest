//引入vue
import Vue from "vue";
//引入App
import App from "./App"
//关闭vue提示
Vue.config.productionTip = false
//创建vue实例
new Vue({
    el:"#app",
    render : h => h(App),
    mounted() {                             //在这里把最大父类的实例销毁的话，所有的子组件的自定义事件也会全部失效
        setTimeout(()=>{
            this.$destroy()
        },3000)
    }
})