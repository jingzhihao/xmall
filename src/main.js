import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './global/'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import dayjs from 'dayjs'

import api from './http/api'
Vue.prototype.$api = api
Vue.config.productionTip = false
Vue.prototype.$dayjs = dayjs
Vue.use(ViewUI);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')