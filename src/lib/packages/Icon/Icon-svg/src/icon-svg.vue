<template>
  <svg class="cx-svg-icon" aria-hidden="true" @click="click" ref="svg-icon">
    <use :xlink:href="iconName"></use>
  </svg>
</template>
<script>
  export default {
    name: 'default-icon-svg',
    props: {
      iconClass: {
        type: [String],
        required: true,
        default: '',
      },
      color: {}
    },
    computed: {
      iconName() {
        return `#icon-${this.iconClass ? this.iconClass : ''}`
      }
    },
    created() {
    },
    mounted() {

    },
    beforeUpdate() {

    },
    methods: {
      //click时触发的事件
      click() {
        this.$emit('click');
      },
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  /*iconfont 图标*/
  .cx-svg-icon {
    width: 1em;
    height: 1em;
    vertical-align: -0.15em;
    color: #bfcbd9;
    fill: currentColor;
    overflow: hidden;
    padding: 0 5px;
  }
</style>
