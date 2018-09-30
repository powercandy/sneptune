import Vue from 'vue'
import Router, { RouteConfig, Route, NavigationGuard, RawLocation } from 'vue-router'
import App from './App.vue'
import routes from './router'
import store from './store'
import axios from 'axios'
import api from '@/assets/js/api'
/* 引入element.js */
import '@/plugins'

/* 将请求方法挂载在vue上 */
Vue.prototype.$api = api

/* 重置样式 */
require('./assets/css/reset.css')
require('./assets/css/common.css')

/* 是否开启生产提示 */
Vue.config.productionTip = false

Vue.use(Router)
const router: Router = new Router({
  mode: 'hash',
  base: __dirname,
  routes
})

const vm: Vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/* 拦截请求前 */
axios.interceptors.request.use((config: any): any => {
  return config
}, (error: any) => {
  Promise.reject(error)
})
/* 拦截请求后 */
axios.interceptors.response.use((response): any => {
  console.log(response)
  if (response.data.errno === 1000) {
    vm.$message.error(response.data.errmsg)
  }
  return response
}, (error: any) => {
  vm.$message.error('网络错误')
  Promise.reject(error)
})
export default vm
