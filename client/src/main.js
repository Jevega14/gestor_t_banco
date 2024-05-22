import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

Vue.config.productionTip = false;

axios.defaults.baseURL = 'http://localhost:5000'; // Asegúrate de que esto apunte a tu backend

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
