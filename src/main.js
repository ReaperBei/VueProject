// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElemetUi from 'element-ui'
import state from 'cmp/store'
import './css/element-variables.scss'
import './css/public.less'

Vue.use(ElemetUi)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  state,
  components: { App },
  template: '<App/>'
})
