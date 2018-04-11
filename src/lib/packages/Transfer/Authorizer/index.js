import GcxAuthorizer from './src/authorizer.vue';

/* istanbul ignore next */
GcxAuthorizer.install = function (Vue) {
  Vue.component(GcxAuthorizer.name, GcxAuthorizer);
};

export default GcxAuthorizer;


