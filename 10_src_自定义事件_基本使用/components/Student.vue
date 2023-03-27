<template>
  <div class="student">
    <h2>学生的姓名：{{name}}</h2>
    <h2>学生的性别：{{sex}}</h2>
    <button @click="sendStudentName">点击把学生姓名给App</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data(){
    return {
      name:"MJY",
      sex:"男",
      x:666
    }
  },
  methods:{
    sendStudentName(){
      //触发Student组件圣上的方法
      this.$emit('atguigu',this.name,666,888)
    }
  }
}
</script>

<style scoped>
  .student{
    background-color: orange;
    padding: 5px;
    margin-top: 30px;
  }
</style>