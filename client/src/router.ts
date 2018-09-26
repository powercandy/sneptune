
import VueRouter from 'vue-router'
import Vue from 'vue'
// 登陆页面
import adLogin from '@/views/admin/login.vue'
// 后台
import adMain from '@/views/admin/main.vue'
// 后台 - 主页
import adHome from '@/views/admin/home.vue'
// 后台 - 控制台
import adController from '@/views/admin/controller.vue'
// 后台 - 评论管理
import adComment from '@/views/admin/comment.vue'
// 后台 - 内容管理
import adContent from '@/views/admin/content.vue'
// 后台 - 页面管理
import adPage from '@/views/admin/page.vue'
// 后台 - 分类管理
import adClassify from '@/views/admin/classify.vue'
// 后台 - 标签管理
import adTag from '@/views/admin/tag.vue'
// 后台 - 设置管理
import adSetting from '@/views/admin/setting.vue'
// 后台 - 个人资料
import adMessage from '@/views/admin/message.vue'
// 后台 - 修改密码
import adModifyPsd from '@/views/admin/modifyPsd.vue'

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
        },
        {
          path: 'controller',
          name: 'controller',
          component: adController
        },
        {
          path: 'comment',
          name: 'comment',
          component: adComment
        },
        {
          path: 'content',
          name: 'content',
          component: adContent
        },
        {
          path: 'page',
          name: 'page',
          component: adPage
        },
        {
          path: 'classify',
          name: 'classify',
          component: adClassify
        },
        {
          path: 'tag',
          name: 'tag',
          component: adTag
        },
        {
          path: 'setting',
          name: 'setting',
          component: adSetting
        },
        {
          path: 'message',
          name: 'message',
          component: adMessage
        },
        {
          path: 'modifyPsd',
          name: 'modifyPsd',
          component: adModifyPsd
        }
      ]
    }
  ]
})
