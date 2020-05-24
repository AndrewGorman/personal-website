import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {BootstrapVue} from 'bootstrap-vue'
const VueScrollTo = require('vue-scrollto')

Vue.use(BootstrapVue)
Vue.use(VueScrollTo)

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
