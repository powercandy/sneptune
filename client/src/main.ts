import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

require('./assets/css/reset.css')
require('./assets/css/common.css')
Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
