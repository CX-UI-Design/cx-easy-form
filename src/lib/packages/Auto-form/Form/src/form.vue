<template>
  <el-form class="cx-form" ref="form" :model="model" :rules="rules" :inline="inline" :show-message="showMessage"
           :label-position="labelPosition" :label-width="labelWidth" :label-suffix="labelSuffix">
    <slot></slot>
  </el-form>
</template>
<script>
  export default {
    name: 'default-form',
    props: {
      model: {type: Object}, //表单数据对象
      rules: {type: Object}, //表单验证规则
      inline: {type: Boolean, default: false},//行内表单模式
      'label-position': {type: String, default: 'left'}, //表单域标签的位置 right/left/top
      'label-width': {type: String}, //表单域标签的宽度，作为 Form 直接子元素的 form-item 会继承该值
      'label-suffix': {type: String},//表单域标签的后缀
      'show-message': {type: Boolean, default: true},//是否显示校验错误信息
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
