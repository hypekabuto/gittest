<template>
    <div class="container">
      <Category title="游戏">
        <template slot-scope="game">
          <ul>
            <li v-for="(g,index) in game.games" :key="index">{{g}}</li>
          </ul>
        </template>
      </Category>
      <Category title="游戏">
        <template slot-scope="game">
          <ol>
            <li v-for="(g,index) in game.games" :key="index">{{g}}</li>
          </ol>
        </template>
      </Category>
      <Category title="游戏">
        <template slot-scope="game">
            <h4 v-for="(g,index) in game.games" :key="index">{{g}}</h4>
        </template>
      </Category>
    </div>
</template>

<script>
  import Category from "@/components/Count";
  export default {
    name:'App',
    components: {Category}
  }
</script>
<style>
  .container{
    display: flex;
    justify-content: space-around;

  }

</style>