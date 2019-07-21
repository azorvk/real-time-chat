import Vue from 'vue'
import App from './App.vue'
import { store } from '~/front/store'

import Vuetify from 'vuetify'
import 'vuetify/src/stylus/app.styl'

import '~/front/registerServiceWorker'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(require('vuebar'));

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')





