import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {BootstrapVue} from 'bootstrap-vue'
import VueScrollactive from 'vue-scrollactive';
import * as TastyBurgerButton from 'vue-tasty-burgers';

Vue.use(BootstrapVue);
Vue.use(TastyBurgerButton);
Vue.use(VueScrollactive);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
