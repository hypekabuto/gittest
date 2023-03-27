<template>
  <div>
    <h2 @click="showName">学生的姓名：{{name}}</h2>
    <h2>学生的性别：{{sex}}</h2>
  </div>
</template>

<script>
import {hunhe,hunhe2} from "../mixin"             //局部混合
export default {
  name: "Student",
  data(){
    return {
      name:"MJY",
      sex:"男",
      x:666         //这里的定义优先级高于mixin定义的x
    }
  },
  // mixins:[hunhe,hunhe2],
  mounted() {
    console.log("hello!!!!!")         //生命周期冲突时，不会以任何人优先而是两个地方都生效，其中mixin中的先生效，这里定义的后生效
  }
}
</script>

<style scoped>

</style>