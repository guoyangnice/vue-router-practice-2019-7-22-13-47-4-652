import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import store from './store/store.js'

Vue.use(iView);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
