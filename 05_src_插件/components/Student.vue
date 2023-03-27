<template>
  <div>
    <h2>学生的姓名：{{name}}</h2>
    <h2>学生的性别：{{sex}}</h2>
    <input type="text" v-bind:value="name">
  </div>
</template>

<script>
export default {
  name: "Student",
  data(){
    return {
      name:"MJY",
      sex:"男",
    }
  },
}
</script>

<style scoped>

</style>