<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>
    <div>
      <input v-model="keyWord" type="text" placeholder="enter the name you search"/>&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";
  export default {
    name: "Search",
    data(){
      return {
        keyWord:[]
      }
    },
    methods:{
      searchUsers(){
        //请求前更新list的数据
        this.$bus.$emit('updateListData', {isFirst:false,isLoading:true,errorMessage:'',users:[]})
        axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
            response => {
              this.$bus.$emit('updateListData', {isLoading:false,errorMessage:'',users:response.data.items})
            },
            error =>{
              this.$bus.$emit('updateListData', {isLoading:false,errorMessage:error.message,users:[]})
            }
        )
      }
    }
  }
</script>

<style scoped>

</style>