<template>
<!--组件的结构-->
  <div class="first">
    <h2>学校名称：{{schoolName}}</h2>
    <h2>学校地址：{{address}}</h2>
    <button @click="showName">点击提示学校名</button>
  </div>
</template>

<script>
//组件交互相关的代码（数据、方法）
export default {
  name:"School",
  data(){
    return {
      schoolName:"WZBC",
      address:"茶山街道",
    }
  },
  methods:{
    showName(){
      alert(this.schoolName)
    }
  }
}
</script>

<style>
/*组件的样式*/
  .first{
    background-color: skyblue;
  }
</style>