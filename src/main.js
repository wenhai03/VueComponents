import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import moment from 'moment'

import nofify from "./components/notify/notify.js"


Vue.use(ElementUI)
Vue.use(nofify, {delay: 5000})
// 定义全局的过滤器
Vue.filter('dateFormat', function (dateStr, pattern='YYYY-MM-DD HH:mm:ss') {
  return moment(dateStr).format(pattern)
})

new Vue({
  render: h => h(App),
  // store
}).$mount('#app')
