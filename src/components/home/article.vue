<template>
    <div class="article">
         <template v-for="(item , index) in ArticleList">
             <div class="item" v-bind:key="index">
                 <h1>{{item.title}}</h1>
                 <p>{{item.content}}</p>
             </div>
        </template>
    </div>
</template>

<script>
import "./article.less";

export default {
//   data () {},
  props: ["ArticleList", "logo"]
};
// console.log({{ArticleList}})
</script>
