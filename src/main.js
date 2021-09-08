/*jshint esversion: 6 */
import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import ElementUI from 'element-ui'; 
import ElementCss from 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(ElementCss);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
