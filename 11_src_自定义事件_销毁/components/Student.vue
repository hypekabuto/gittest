<template>
  <div class="student">
    <h2>学生的姓名：{{name}}</h2>
    <h2>学生的性别：{{sex}}</h2>
    <h2>当前求和为：{{x}}</h2>
    <button @click="add">点击x++</button>
    <button @click="sendStudentName">点击把学生姓名给App</button>
    <button @click="unBind">点击解绑atguigu事件</button>
    <button @click="death">销毁当前student组件的实例对象（VC）</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data(){
    return {
      name:"MJY",
      sex:"男",
      x:0
    }
  },
  methods:{
    sendStudentName(){
      //触发Student组件身上的方法
      this.$emit('atguigu',this.name,666,888)
      this.$emit('demo')
    },
    unBind(){
      //this.$off('atguigu')   //只适用与解绑一个自定义事件
      //this.$off(['demo','atguigu'])   //两个都被解绑了
      this.$off()    //解绑所有的自定义事件
    },
    death(){
      this.$destroy()   //销毁了当前的student组件实例,销毁后所有的student实例的自定义事件全部都不奏效了，原生的可以
    },
    add(){
      this.x++
      console.log("add被调用了")
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