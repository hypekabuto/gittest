<template>
  <div>
    <h1>当前求和为：{{sum}}</h1>
    <h3>当前求和放大十倍后为：{{bigSum}}</h3>
    <h3>学校名称：{{school}}</h3>
    <h3>专业名称：{{subject}}</h3>
    <h3>下方组件的总人数是：{{personList.length}}</h3>
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
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'
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
      this.publicIncrement(this.n)
    },
    decrement(){
      this.publicDecrement(this.n)
    },
    incrementOdd(){
      this.publicIncrementOdd(this.n)
    },
    decrementWait(){
      this.publicDecrementWait(this.n)
    },
    //简写
    ...mapMutations({publicIncrement:'ADD',publicDecrement:'JIAN'}),
    ...mapActions({publicIncrementOdd:'addOdd',publicDecrementWait:'addWait'})
  },
  computed:{
    ...mapState(['sum','school','subject','personList']),
    ...mapGetters(["bigSum"])
  }
}
</script>

<style scoped>
  button{
    margin-left: 5px;
  }
</style>