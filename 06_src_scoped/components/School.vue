<template>
  <div class="demo">
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
}
</script>

<style scoped>
  .demo{
    background-color: gray;
  }
</style>