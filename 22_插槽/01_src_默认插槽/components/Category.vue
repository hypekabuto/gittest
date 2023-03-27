<template>
  <div class="category">
    <h3>{{title}}分类</h3>
<!--    定义一个插槽，等待填充,还可以使用默认值-->
    <slot>不传的时候使用默认值</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:['title']
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