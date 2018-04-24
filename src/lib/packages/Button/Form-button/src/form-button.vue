<!--form-button-->
<template>
  <el-button :type="type" :size="size" :plain="plain" :disabled="disabled" :icon="icon" @click="click">
    <slot></slot>
  </el-button>
</template>
<script>
  export default {
    name: 'default-form-button',
    data() {
      return {}
    },
    created() {
    },
    props: {
      size: {type: String, default: 'medium'}, //尺寸可选 medium,small,mini
      type: {type: String},//类型 primary,success,warning,danger,info,text
      plain: {type: Boolean, default: false},//是否朴素按钮
      round: {type: Boolean, default: false},//是否为原型按钮
      disabled: {type: Boolean, default: false},//是否禁用状态
      icon: {type: String,},//图标，已有的图标库中的图标名
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
