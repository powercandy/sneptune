import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import routes from './router'
import store from './store'

require('./assets/css/reset.css')
require('./assets/css/common.css')
Vue.config.productionTip = false

Vue.use(Router)

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: routes
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
