<template>
  <div class="school">
    <h2>学校的名称：{{name}}</h2>
    <h2>学校的地址：{{address}}</h2>
    <button @click="sendSchoolName">点击把学校名字给App</button>
  </div>
</template>

<script>
export default {
  name: "School",
  props:['getSchoolName'],
  data(){
    return {
      name:"WZBC",
      address:"茶山街道"
    }
  },
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.name)
    }
  }
}
</script>

<style scoped>
  .school{
    background-color: #00b1fe;
    padding: 5px;
  }
</style>