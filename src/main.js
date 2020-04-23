import Vue from 'vue'
import router from './router/lazy'
import axios from 'axios'
import './plugins/element.js'
import App from './App.vue'
import './assets/reset.css'
import './global.less'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
