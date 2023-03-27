<template>
  <div class="demo">
    <h2>学生的姓名：{{name}}</h2>
    <h2>学生的性别：{{sex}}</h2>
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
}
</script>

<style scoped>
  .demo{
    background-color: orange;
  }
</style>