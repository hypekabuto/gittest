<template>
  <div class="school">
    <h2>学校的名称：{{name}}</h2>
    <h2>学校的地址：{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  name: "School",
  data(){
    return {
      name:"WZBC",
      address:"茶山街道"
    }
  },
  methods:{
    demo(messageName,data){
      console.log("hello被调用了",data)
    }
  },
  mounted() {
    //console.log("School",this)
    //pubsub库配合VUE时这个this的指向是underfind
    // this. pubId = pubsub.subscribe('hello',function (messageName,data){
    //   console.log("有人发布了hello消息，且hello消息的回调执行了",messageName,data)
    // })
    this.pubId = pubsub.subscribe('hello',this.demo)
  },
  beforeDestroy() {
    pubsub.unsubscribe(this. pubId)
  }
}
</script>

<style scoped>
  .school{
    background-color: #00b1fe;
    padding: 5px;
  }
</style>