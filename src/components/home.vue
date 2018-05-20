
<template>
    <div calss='pd350'>
        <Nav ></Nav>
        <div class="content">
          <Article :ArticleList='ArticleList' logo="logo" ></Article>
        </div>
    </div>
</template>
<script>
// 引入组件
import Nav from "./nav";
import Article from "./home/article";
import { userInfo } from "../User.js";
// 引入文章
import { data } from "../mock/list.js";
export default {
  // 注册组件
  components: {
    Nav,
    Article
  },
  data () {
    return {
      msg: userInfo.title,
      ArticleList: data
    };
  }
};

</script>
<style>
.pd350 {
  padding: 0 350px;
}
</style>
