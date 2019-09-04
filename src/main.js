import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import dialog from './dialog/dialog.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  dialog
}).$mount('#app')
