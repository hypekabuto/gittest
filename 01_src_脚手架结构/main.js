import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el:"#app",
  //render函数中有一个createElement函数，该函数可以渲染template属性
  render:h => h(App)
  //这样子写要在上面的import中引入完整版的vue
  // template:`
  //   <div>
  //       <App></App>
  //   </div>
  //   `,
  // components:{App}
})
