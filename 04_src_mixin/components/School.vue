<template>
  <div>
    <h2 @click="showName">学校的名称：{{name}}</h2>
    <h2>学校的地址：{{address}}</h2>
  </div>
</template>

<script>
//引入一个混合
import {hunhe,hunhe2} from "../mixin"
export default {
  name: "School",
  data(){
    return {
      name:"WZBC",
      address:"茶山街道"
    }
  },
  // mixins:[hunhe,hunhe2]
}
</script>

<style scoped>

</style>