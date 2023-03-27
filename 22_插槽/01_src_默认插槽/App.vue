<template>
    <div class="container">
      <Category title="美食">
        <img src="	https://csdnimg.cn/medal/qixiebiaobing4@240.png" alt="">
      </Category>
      <Category title="电影">
        <ul>
          <li v-for="(g,index) in games" :key="index">{{g}}</li>
        </ul>
      </Category>
      <Category title="游戏">
        <video src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mps"></video>
      </Category>
    </div>
</template>

<script>
  import Category from "@/components/Count";
  export default {
    name:'App',
    components: {Category},
    data(){
      return {
        foods:['火锅','烧烤','小龙虾','牛排'],
        games:['红色警戒','超级玛丽','劲舞团','穿越火线'],
        films:['教父','拆弹专家','惊天魔盗团','蜘蛛侠']
      }
    }
  }
</script>
<style>
  .container{
    display: flex;
    justify-content: space-around;

  }

</style>