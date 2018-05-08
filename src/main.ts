import Vue from 'vue';
import Vuetify from 'vuetify';
import VueClipboards from 'vue-clipboards';
import App from '@/App.vue';
import './registerServiceWorker';

Vue.config.productionTip = false;
Vue.use(VueClipboards);
Vue.use(Vuetify);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
