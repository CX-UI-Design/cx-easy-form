/*
 * Created by Broccoli spring( gcx ) on 2017/9/19.
 * Routing configuration for the UI interface, this project selects element-ui as the UI framework.
 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import Cookies from 'js-cookie';
import formEvent from './utils/formEvent'
import 'cx-theme/dist/cx-theme.min.css'
import './assets/css/theme-cover.scss'
import './assets/css/public.scss'//public css


import cxEasyForm from './lib/index';//cx formercool
import '../dist/cx-easy-form.min.css';

Vue.use(ElementUI);
Vue.use(cxEasyForm.body, {
  stageName: 'cx',//stage name
  log: false,//show log information
  formEvent: formEvent,//binding form component interaction method （click / change / blur / fouce ... and so on）
  keyRefer: {
    // "auto-form": 12312,
    // "roleCheckBtn": 12312
  },
  requestHead: {
    'appId': '07d8737811434732',
    "appClientType": "pc",
    "Set-Cookie": Cookies.get('token'),
  },
});

new Vue({
  ElementUI,
});
