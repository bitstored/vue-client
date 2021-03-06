// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vue2Filters from 'vue2-filters'

import App from './App'
import { router } from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import { store } from './store'
import VeeValidate from 'vee-validate'
import {library} from '@fortawesome/fontawesome-svg-core'
import {faUserSecret} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import CKEditor from '@ckeditor/ckeditor5-vue'
import { BFormSelect } from 'bootstrap-vue'
Vue.component('b-form-select', BFormSelect)
Vue.use( CKEditor )
Vue.use(Vue2Filters)

Vue.use(VeeValidate)
Vue.config.productionTip = false
library.add(faUserSecret)

Vue.component('font-awesome-icon', FontAwesomeIcon)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
