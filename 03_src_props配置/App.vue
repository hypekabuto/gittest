<template>
  <div>
    <Student name="张三" sex="男" :age="19"></Student>
    <Student name="李四" sex="男" :age="18"></Student>       <!--这里传过去的是字符串，加上引号表示这里用""里面表达式的值-->
  </div>
</template>

<script>
  import Student from "./components/Student";
  export default {
    name:'App',
    components:{Student}
  }
</script>

<style>

</style>