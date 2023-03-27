<template>
  <div>
    <h1>{{msg}}</h1>
    <h2>学生的姓名：{{name}}</h2>
    <h2>学生的性别：{{sex}}</h2>
    <h2>学生的年龄：{{agee}}</h2>
    <button @click="updateAge">常识修改收到的年龄</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data(){
    return {
      msg:"帅比",
      agee:this.age
    }
  },
  //props:['name','sex','age']         // 这个传法也可以，但是如果在App中没有写:会导致变成字符串
  // props:{                           // 接收的同时对数据进行类型限制
  //   name:String,
  //   age:Number,
  //   sex:String
  // }
  props:{                               //接收的同时对数据进行类型限制+默认值的指定+必要性的限制
    name:{
      type:String,    //name的类型是字符串
      required:true,  //name是必要的
    },
    age:{
      type:Number,
      default:99      //默认值99
    },
    sex:{
      type:String,
      required:true
    }
  },
  methods:{
    updateAge(){
      this.agee++
    }
  }
}
</script>

<style scoped>

</style>