import Vue from 'vue'
import App from './App'
import store from './store'
import api from './utils/api'
import navigate from './utils/navigate'

Vue.config.productionTip = false
App.mpType = 'app'
Vue.prototype.$store = store
Vue.prototype.$api = api
Vue.prototype.$navigate = navigate
const app = new Vue(App)
app.$mount()
