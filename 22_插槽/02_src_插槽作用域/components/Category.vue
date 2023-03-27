<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:['title'],
  data(){
    return {
      games:['红色警戒','超级玛丽','劲舞团','穿越火线'],
    }
  }
}
</script>

<style scoped>
  .category{
    background-color: skyblue;
    height:300px;
    width:200px;
  }
  h3{
    text-align: center;
    color: black;
    background-color: orange;
  }
</style>