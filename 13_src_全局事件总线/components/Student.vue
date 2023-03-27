<template>
  <div class="student">
    <h2>学生的姓名：{{name}}</h2>
    <h2>学生的性别：{{sex}}</h2>
    <button @click="sendStudentName">点击把学生名给School</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data(){
    return {
      name:"MJY",
      sex:"男"
    }
  },
  methods:{
    sendStudentName(){
      this.$bus.$emit('hello',this.name)
    }
  },
  mounted() {
    // console.log("Student",this.x)
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