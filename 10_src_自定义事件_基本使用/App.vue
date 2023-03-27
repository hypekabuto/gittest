<template>
  <div class="app">
    <h2>{{msg}}</h2>
    <!--    通过父组件给予子组件函数类型的props实现：子给父传递数据-->
    <School :getSchoolName="getSchoolName"></School>
    <hr>
    <!--    通过父组件给予子组件绑定一个自定义事件实现：子给父传递数据-->
    <Student @atguigu="getStudentName"></Student>
    <!--    这个写法也可以，配合钩子使用,这样子可以更灵活如使用计时器将其包裹-->
<!--    <Student ref="student"></Student>-->
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
    },
    methods:{
      getSchoolName(name){
        console.log("App收到了学校名：",name)
      },
      getStudentName(name,...params){
        console.log("App收到了学生名：",name,params)
      }
    },
    // mounted() {
    //   setTimeout(()=>{
    //     // this.$refs.student.$on('atguigu',this.getStudentName)
    //     //下面只触发一次，如果不要的话就把once改成on
    //     this.$refs.student.$once('atguigu',this.getStudentName)
    //   },3000)
    // }
  }
</script>
<!--App组件中不要使用scoped-->
<style>
.app{
  background-color: gray;
  padding: 5px;
}
</style>