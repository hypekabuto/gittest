<template>
  <div>
    <button @click="getCar">获取汽车信息</button>
    <button @click="getStudent">获取学生信息</button>
  </div>
</template>

<script>
import axios from 'axios'
  export default {
    name:'App',
    methods:{
      getCar(){
        //这种配置方式不能配置多个代理，而且不能控制是否走代理
        axios.get('http://localhost:8080/car/cars').then(
            response =>{
              console.log("success",response.data)
            },
            error =>{
              console.log('error',error.message)
            }
        )
      },
      getStudent(){
        axios.get('http://localhost:8080/student/students').then(
            response =>{
              console.log("success",response.data)
            },
            error =>{
              console.log('error',error.message)
            }
        )
      }
    }
  }
</script>