<template>
  <a id="cx-router-go" @click="routerlink(url, query)">
    <slot></slot>
  </a>
</template>
<script>
  export default {
    name: 'default-router-go',
    data() {
      return {}
    },
    props: {
      url: {type: String, default: ''},//路由地址
      name: {type: String, default: ''}, //路由地址
      query: {type: Object, default: null},//query
      beforeTo: {
        type: Function, default: function () {
        } //额外击事件
      },
    },
    methods: {
      routerlink(url, query) {
        if (this.beforeTo) {
          this.beforeTo
        }
        this.$router.push({path: url, query: query});
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  a#cx-router-go {
    display: block;
    width: 100%;
    height: 100%;
    color: #48576a;
  }
</style>
