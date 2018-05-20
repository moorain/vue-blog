<template>
    <div class="main-nav">
      <div class="nav-header">
        <h1 style='fontSize:3rem'>Moorain</h1>
        <p style='color:#666'>O ever weeping，O ever youthful.</p>
      </div>

      <div>
        <ul>
         <template v-for="(item , index) in navList">
          <li v-bind:key="index"><router-link class="main-nav-item" :to='item' >{{index}}</router-link></li>
        </template>
        </ul>
      </div>
      <div>
      </div>
      <div class="header-line"></div>
    </div>
</template>

<script>
import { nav } from "../User";
export default {
  data () {
    return {
      navList: nav
    };
  }
};
</script>

<style lang="less">
  @import './nav.less';
</style>
