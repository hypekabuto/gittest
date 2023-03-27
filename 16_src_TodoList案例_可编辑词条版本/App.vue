<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader @addtodo="addtodo"></MyHeader>
        <MyList :todos="todos"></MyList>
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
  import pubsub from "pubsub-js";
  import MyHeader from "@/components/MyHeader";
  import MyFooter from "@/components/MyFooter";
  import MyList from "@/components/MyList";
  export default {
    components: {MyHeader,MyFooter,MyList},
    data(){
      return {
        todos:JSON.parse(localStorage.getItem('todos')) || []
      }
    },
    methods:{
      addtodo(todoObj){
        this.todos.unshift(todoObj)
      },
      checkTodo(id) {
        this.todos.forEach((todo)=>{
          if(todo.id === id) todo.completed = !todo.completed
        })
      },
      deleteTodo(_,id){
        this.todos = this.todos.filter((todo)=>{
          return todo.id !== id
        })
      },
      checkAllTodo(completed){
        this.todos.forEach((todo)=>{
          todo.completed = completed
        })
      },
      clearAllTodo(){
        this.todos = this.todos.filter((todo)=>{
          return !todo.completed
        })
      },
      updateTodo(id,title) {
        this.todos.forEach((todo)=>{
          if(todo.id === id) todo.title = title
        })
      },
    },
    watch:{
      todos:{
        deep:true,
        handler(newValue){
          localStorage.setItem('todos',JSON.stringify(newValue))
        }
      }
    },
    mounted() {
      this.$bus.$on('updateTodo',this.updateTodo)
      this.$bus.$on('checkTodo',this.checkTodo)
      this.pubId = pubsub.subscribe('deleteTodo',this.deleteTodo)
    },
    beforeDestroy() {
      this.$bus.$off('updateTodo')
      this.$bus.$off('checkTodo')
      pubsub.unsubscribe(this.pubId)
    }
  }
</script>

<style>
  /*base*/
  body {
    background: #fff;
  }
  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }
  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }
  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }
  .btn-edit {
    color: #fff;
    background-color: skyblue;
    border: 1px solid rgb(103,159,180);
    margin-right: 5px;
  }
  .btn:focus {
    outline: none;
  }
  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>