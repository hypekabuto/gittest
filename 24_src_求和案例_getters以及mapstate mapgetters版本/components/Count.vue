<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大十倍后为：{{bigSum}}</h3>
    <h3>学校名称：{{school}}</h3>
    <h3>专业名称：{{subject}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="decrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name: "Count",
  data(){
    return {
      //用户选择的数字
      n:1
    }
  },
  methods:{
    increment(){
      this.$store.commit('ADD',this.n)
    },
    decrement(){
      this.$store.commit('JIAN',this.n)
    },
    incrementOdd(){
      this.$store.dispatch('addOdd',this.n)
    },
    decrementWait(){
      this.$store.dispatch('addWait',this.n)
    }
  },
  computed:{
    //这样是靠程序员亲自写计算属性
    // sum(){
    //   return this.$store.state.sum
    // },
    // school(){
    //   return this.$store.state.school
    // },
    // subject(){
    //   return this.$store.state.subject
    // },

    //借助mapState生成的计算属性，从state中读取数据(对象写法)
    //...mapState({sum:'sum',school:'school',subject:'subject'}),
    //简写形式
    ...mapState(['sum','school','subject']),

    //...mapGetters({bigSum:'bigSum'})
    //简写
    ...mapGetters(["bigSum"])
    // bigSum(){
    //   return this.$store.getters.bigSum
    // }
  }
}
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>