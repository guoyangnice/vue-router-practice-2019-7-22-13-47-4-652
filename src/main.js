import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import dialog from './dialog/dialog.js'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  dialog
}).$mount('#app')
