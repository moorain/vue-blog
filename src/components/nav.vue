<template>
    <div class="main-nav">
      <ul>
        <li><router-link class="main-nav-item" to='home' >主页</router-link></li>
        <li><router-link class="main-nav-item" to='about' >分类</router-link></li>
        <li><router-link class="main-nav-item" to='share' >分享</router-link></li>
        <li><router-link class="main-nav-item" to='more' >更多</router-link></li>
      </ul>
    </div>
</template>

<script>
export default {

};

</script>
<style>
.main-nav{
  width: 100%;
  padding: 2rem 0;
}
.main-nav li{
  float: left;
  width: 50px;
  margin: 0 10px;
}
.main-nav-item{
  color:#333;
  text-decoration: none;
}
.main-nav-item:hover{
  color:#00aaee;
}
</style>
