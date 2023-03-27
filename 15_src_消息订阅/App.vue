<template>
  <div class="app">
    <h2>{{msg}}</h2>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
  import Student from "./components/Student";
  import School from "./components/School";
  export default {
    name:'App',
    components:{Student,School},
    data(){
      return {
        msg:"hello world!"
      }
    }
  }
</script>
<!--App组件中不要使用scoped-->
<style>
.app{
  background-color: gray;
  padding: 5px;
}
</style>