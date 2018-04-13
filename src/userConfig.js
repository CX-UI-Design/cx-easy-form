/*
 * Created by Broccoli spring( gcx ) on 2017/9/19.
 * Routing configuration for the UI interface, this project selects element-ui as the UI framework.
 */
import Cookies from 'js-cookie';
/* ---------------- css / less /sass ----------------*/
require('./assets/css/animate/animate.css');
import './assets/css/reset.css'
import './assets/css/element-ui/theme-default/index.css'
import './assets/css/public.scss'//public css
//ele cover css
import './assets/css/element-ui/theme-cover/base.scss'
import './assets/css/element-ui/theme-cover/data.scss'

import './assets/css/element-ui/theme-cover/navigation.scss'
import './assets/css/element-ui/theme-cover/notice.scss'
import './assets/css/element-ui/theme-cover/other.scss'

import './assets/css/element-ui/theme-cover/form.scss'


/* ---------------- js ( Framework or auxiliary function ) ---------------- */
import Vue from 'vue'
import ElementUI from 'element-ui'
import vue_formercool_Cx from './lib/index.js';//cx formercool
import formEvent from './utils/formEvent'
// import vue_auto_form_test from 'vue-auto-form-test';
// Vue.use(vue_auto_form_test, {stageName: 'gcx-'})

Vue.use(ElementUI);
Vue.use(vue_formercool_Cx.body, {
  stageName: 'gcx-',//stage name
  log: false,//show log information
  store: {},
  formEvent: formEvent,//binding form component interaction method （click / change / blur / fouce ... and so on）
  // keyRefer: {
  //   "auto-form": 12312
  // },
  requestHead: {
    'appId': '07d8737811434732',
    "appClientType": "pc",
    "Set-Cookie": Cookies.get('token'),
  },
})

new Vue({
  ElementUI,
});
