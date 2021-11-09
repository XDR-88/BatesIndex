import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as echarts from 'echarts';
import './plugins/element.js'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import axios from "axios";


// 配置请求超时时间
Vue.use(VueQuillEditor)
Vue.prototype.$echarts = echarts
Vue.prototype.axios = axios
axios.defaults.baseURL = 'http://127.0.0.1:3000/'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
