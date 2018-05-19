import Vue from 'vue'
import Router from 'vue-router'

import home from '../components/home.vue'
import about from '../components/about.vue'
import share from '../components/share.vue'
import more from '../components/more.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/about',
      component: about
    },
    {
      path: '/share',
      component: share
    },
    {
      path: '/more',
      component: more
    }
  ]
})
