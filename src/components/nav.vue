<template>
    <div class="main-nav">
      <h1 style='fontSize:3rem'>Moorain</h1>
      <div>
        <ul>
          <li><router-link class="main-nav-item" to='home' >主页</router-link></li>
          <li><router-link class="main-nav-item" to='about' >分类</router-link></li>
          <li><router-link class="main-nav-item" to='share' >分享</router-link></li>
          <li><router-link class="main-nav-item" to='more' >更多</router-link></li>
        </ul>
      </div>
      <div>
      </div>
      <div class="header-line"></div>
    </div>
</template>

<script>
export default {};
</script>
<style>
.main-nav {
  box-sizing: border-box;
  padding: 0 350px;
  width: 100%;
  text-align: center;
}
.main-nav ul {
  display: inline-block;
  height: 20px;
}
.main-nav li {
  float: left;
  width: 50px;
  margin: 0 10px;
}
.main-nav li:nth-child(1) {
  list-style: none;
}
.main-nav-item {
  color: #333;
  text-decoration: none;
}
.main-nav-item:hover {
  color: #00aaee;
}
.header-line {
  background: url("../assets/header-lines.png") no-repeat;
  height: 40px;
  background-color: #fff;
}

</style>
