// import Home from '@/views/Home.vue'
import Demo from '@/views/Demo.vue'
import VueRouter from 'vue-router'
import Vue from 'vue';

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      // name: 'demo',
      component: Demo
    },
    /* 登录页面 */
    {
      path: '/login/:type',
      name: 'login',
      component: () => import('@/views/Login.vue')
    },
    /* blog页面 */
    {
      path: '/blog',
      name: 'blog',
      component: () => import('@/views/Blog.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('@/views/Demo.vue')
    }
  ]
})
