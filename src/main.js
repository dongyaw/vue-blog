// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from '@/App'
import axios from 'axios'
import Vuex from 'vuex'
import router from '@/router/index'
import 'babel-polyfill'
Vue.use(Vuex)

let userAgentInfo = navigator.userAgent
let Agents = ['Android', 'iPhone',
  'SymbianOS', 'Windows Phone',
  'iPad', 'iPod'
]
let isPc = true
for (let v = 0; v < Agents.length; v++) {
  if (userAgentInfo.indexOf(Agents[v]) > 0) {
    isPc = false
    break
  }
}
Vue.prototype.isPc = isPc

Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
