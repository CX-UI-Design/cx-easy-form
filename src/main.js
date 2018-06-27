// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import userConfig from './userConfig'
import './mock'

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  userConfig,
  components: {App},
  template: '<App/>'
});
