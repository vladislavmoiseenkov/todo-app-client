import Vue from 'vue';
import ElementUI from 'element-ui';

import App from './App';

import router from './router';
import store from './store';

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  components: { App },
  template: '<App></App>',
}).$mount('#app');
