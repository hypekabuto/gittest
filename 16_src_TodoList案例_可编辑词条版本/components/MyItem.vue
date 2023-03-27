<template>
  <li >
    <label>
      <input type="checkbox" :checked="todo.completed" @change="handleCheck(todo.id)"/>
<!--      <input type="checkbox" v-model="todo.completed"/>              这一段代码也能实现勾选功能但是他会改变props的值，最好不要用-->
      <span v-show="!todo.isEdit">{{todo.title}}</span>
      <input v-show="todo.isEdit" type="text" :value="todo.title" @blur="handleBlur(todo,$event)" ref="inputTitle">
    </label>
    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";
export default {
  name:'MyItem',
  props:['todo'],
  methods:{
    //失去焦点回调真正执行修改逻辑
    handleBlur(todo,e){
      todo.isEdit = false
      if(!e.target.value.trim()) return alert("不能为空！")
      this.$bus.$emit('updateTodo',todo.id,e.target.value)
    },
    handleEdit(todo){
      if(todo.hasOwnProperty('isEdit')){
        todo.isEdit = true
      }else {
        this.$set(todo, 'isEdit', true)
      }
      this.$nextTick(function (){
        this.$refs.inputTitle.focus()
      })
    },
    handleCheck(id){
      // console.log(id)
      //this.checkTodo(id)
      this.$bus.$emit('checkTodo',id)
    },
    handleDelete(id){
      if(confirm("确定删除吗？")){
        //this.deleteTodo(id)
        pubsub.publish('deleteTodo',id)
      }
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover{
  background-color: #cccccc;
}
li:hover button{
  display: block;
}
</style>