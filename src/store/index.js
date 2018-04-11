import Vue from 'vue';
import Vuex from 'vuex';
import test from './modules/test';
import vue_formercool_Cx from '../lib/index';
let Form = vue_formercool_Cx.store

Vue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    Form,
    test
  }
});


export default store
