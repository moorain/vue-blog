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
export default {
  props: ["ArticleList", "logo"]
};
</script>

<style>
    @import './article.less';
</style>
