<template>
<div>
  <button @click="isShow = ! isShow">显示/隐藏</button>
  <transition name="hello" :appear="true">
    <h1 v-show="isShow">1你好啊！</h1>
  </transition>
</div>
</template>

<script>
export default {
  name: "Test.vue",
  data(){
    return {
      isShow:true
    }
  }
}
</script>

<style scoped>
  h1{
    background-color: orange;
  }
  .hello-enter-active{
    animation: guoDu 1s linear;
  }
  .hello-leave-active{
    animation: guoDu 1s reverse linear;
  }
  @keyframes guoDu {
    from{
      transform: translateX(-100%);
    }
    tp{
      transform: translateX(0px);
    }
  }
</style>