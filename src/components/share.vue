
<template>
    <div>
        <Nav ref="nav"></Nav>
        <h1>{{msg}}</h1>
        <p>{{msg}}</p>
    </div>
</template>
<script>
// 引入组件
import Nav from "./nav";

export default {
  // 注册组件
  components: {
    Nav
  },
  data () {
    return {
      msg: "我是分享 组件"
    };
  }
};
</script>
