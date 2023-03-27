<template>
  <div class="school">
    <h2>学校的名称：{{name}}</h2>
    <h2>学校的地址：{{address}}</h2>
  </div>
</template>

<script>
export default {
  name: "School",
  data(){
    return {
      name:"WZBC",
      address:"茶山街道"
    }
  },
  mounted() {
    console.log("School",this)
    this.$bus.$on("hello",(data)=>{
      console.log("我是SCHOOL组件，收到了数据：",data)
    })
  },
  beforeDestroy() {
    this.$bus.$off('hello')
  }
}
</script>

<style scoped>
  .school{
    background-color: #00b1fe;
    padding: 5px;
  }
</style>