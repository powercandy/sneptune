
import VueRouter from 'vue-router'
import Vue from 'vue'
// 登陆页面
import adLogin from './views/admin/login.vue'
// 后台
import adMain from './views/admin/main.vue'
// 后台 - 控制台
import adController from './views/admin/controller.vue'
// 后台 - 评论管理-列表
import commentList from './views/admin/commentList.vue'
// 后台 - 评论管理-编辑
import commentEditor from './views/admin/commentEditor.vue'
// 后台 - 内容管理-列表
import contentList from './views/admin/contentList.vue'
// 后台 - 内容管理-编辑
import contentEditor from './views/admin/contentEditor.vue'
// 后台 - 页面管理-列表
import pageList from './views/admin/pageList.vue'
// 后台 - 页面管理-编辑
import pageEditor from './views/admin/pageEditor.vue'
// 后台 - 分类管理-列表
import classifyList from './views/admin/classifyList.vue'
// 后台 - 分类管理-编辑
import classifyEditor from './views/admin/classifyEditor.vue'
// 后台 - 标签管理-列表
import tagList from './views/admin/tagList.vue'
// 后台 - 标签管理
import tagEditor from './views/admin/tagEditor.vue'
// 后台 - 设置管理
import adSetting from './views/admin/setting.vue'
// 后台 - 个人资料
import adMessage from './views/admin/message.vue'
// 后台 - 修改密码
import adModifyPsd from './views/admin/modifyPsd.vue'

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
      redirect: '/controller',
      component: adMain,
      children: [
        {
          path: 'controller',
          name: 'controller',
          component: adController
        },
        {
          path: 'comment/list',
          name: 'commentList',
          component: commentList
        },
        {
          path: 'comment/editor',
          name: 'commentEditor',
          component: commentEditor
        },
        {
          path: 'content/list',
          name: 'contentList',
          component: contentList
        },
        {
          path: 'content/editor',
          name: 'contentEditor',
          component: contentEditor
        },
        {
          path: 'page/list',
          name: 'pageList',
          component: pageList
        },
        {
          path: 'page/editor',
          name: 'pageEditor',
          component: pageEditor
        },
        {
          path: 'classify/list',
          name: 'classifyList',
          component: classifyList
        },
        {
          path: 'classify/editor',
          name: 'classifyEditor',
          component: classifyEditor
        },
        {
          path: 'tag/list',
          name: 'tagList',
          component: tagList
        },
        {
          path: 'tag/editor',
          name: 'tagEditor',
          component: tagEditor
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
