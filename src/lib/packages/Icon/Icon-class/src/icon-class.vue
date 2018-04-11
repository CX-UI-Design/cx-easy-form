<template>
  <i :class="iconName" @click="click"></i>
</template>
<script>
  export default {
    name:'default-icon-class',
    data() {
      return {}
    },
    props: {
      //Icon class 名称
      iconClass: {
        type: String,
        default: ''
      }
    },
    computed: {
      iconName() {
        return this.iconClass.indexOf('el-icon-') === 0 ?
          this.iconClass : `iconfont icon-${this.iconClass}`;
      }
    },
    methods: {
      //click时触发的事件
      click() {
        this.$emit('click');
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
