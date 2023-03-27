<template>
  <div class="todo-footer" v-if="total">
    <label>
<!--      <input type="checkbox" :checked="isAll" @change="checkAll"/>-->
      <input type="checkbox" v-model="isAll"/>
    </label>
    <span>
          <span>已完成{{completedTotal}}</span> / 全部{{total}}
        </span>
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  name:'MyFooter',
  props:['todos','checkAllTodo','clearAllTodo'],
  methods:{
    // checkAll(e){
    //   this.checkAllTodo(e.target.checked)
    // }
    clearAll(){
      this.clearAllTodo()
    }
  },
  computed:{
    total(){
      return this.todos.length
    },
    completedTotal(){
      const x = this.todos.reduce((pre,todo)=>{
        return pre + (todo.completed ? 1 : 0)
      },0)
      return x
    },
    isAll:{
      get(){
        return this.total === this.completedTotal && this.total > 0
      },
      set(checked){
        this.checkAllTodo(checked)
      }
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>