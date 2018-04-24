<template>
  <el-button :type="type" :size="size" :plain="plain" :loading="loading" :disabled="disabled" :icon="icon" :autofocus="autofocus"
             :native-type="nativeType" @click="click">
    <slot></slot>
  </el-button>
</template>
<script>
  export default {
    name: 'default-button',
    data() {
      return {
      }
    },
    computed: {},
    created() {
    },
    props: {
      size: {type: String, default: 'medium'}, //尺寸可选 medium,small,mini
      type: {type: String},//类型 primary,success,warning,danger,info,text
      plain: {type: Boolean, default: false},//是否朴素按钮
      round: {type: Boolean, default: false},//是否为原型按钮
      loading: {type: Boolean, default: false},//是否加载中状态
      disabled: {type: Boolean, default: false},//是否禁用状态
      icon: {type: String,},//图标，已有的图标库中的图标名
      autofocus: {type: Boolean, default: false},//是否默认聚焦
      'native-type': {type: String, default: 'button'},//原生 type 属性  Button,submit,reset
    },
    methods: {
      click() {
        this.$emit('click');
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
