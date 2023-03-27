<template>
<!--组件的结构-->
  <div class="first">
    <h2>学生姓名：{{name}}</h2>
    <h2>学生年龄：{{age}}</h2>
    <button @click="showName">点击提示学生姓名</button>
  </div>
</template>

<script>
//组件交互相关的代码（数据、方法）
export default {
  name:"Student",
  data(){
    return {
      name:"MJY",
      age:22,
    }
  },
  methods:{
    showName(){
      alert(this.name)
    }
  }
}
</script>

<style>
/*组件的样式*/
  .first{
    background-color: yellow;
  }
</style>