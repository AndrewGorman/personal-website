import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {BootstrapVue} from 'bootstrap-vue'
import VueScrollactive from 'vue-scrollactive';
import * as TastyBurgerButton from 'vue-tasty-burgers';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faAngleLeft, faAngleRight, faEnvelope } from '@fortawesome/pro-light-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
    faAngleLeft,
    faAngleRight,
    faEnvelope,
    faGithub,
    faLinkedinIn,
    )

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(BootstrapVue);
Vue.use(TastyBurgerButton);
Vue.use(VueScrollactive);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
