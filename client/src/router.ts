
import VueRouter from 'vue-router'
import Vue from 'vue'
// 登陆页面
import adLogin from '@/views/admin/login.vue'
// 后台
import adMain from '@/views/admin/main.vue'
// 后台 - 主页
import adHome from '@/views/admin/home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录页面'
      },
      component: adLogin
    },
    {
      path: '/',
      name: 'Admin',
      meta: {
        title: '后台'
      },
      redirect: '/home',
      component: adMain,
      children: [
        {
          path: 'home',
          name: 'home',
          component: adHome
        }
      ]
    }
  ]
})
