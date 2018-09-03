import Home from '@/views/Home.vue'

const routes: any = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  /* 关于页面 */
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue')
  },
  /* 登录页面 */
  {
    path: '/login/:type',
    name: 'login',
    component: () => import('@/views/Login.vue')
  }
]

export default routes
