<template>
  <div>
    <h1 v-text="msg"></h1>
    <button @click="boom">点击炸学校</button>
    <button @click="showDom" ref="title">点击获取dom结构</button>
    <School ref="title2"></School>
  </div>
</template>

<script>
  import School from "./components/School";
  export default {
    name:'App',
    data(){
      return {
        msg:'开学了！'
      }
    },
    methods:{
      boom(){
        alert("Boom!!!")
      },
      showDom(){
        console.log(this.$refs.title)    //真实的dom元素
        console.log(this.$refs.title2)   //School组件的实例对象（vc）
      }
    },
    components:{School}
  }
</script>

<style>

</style>