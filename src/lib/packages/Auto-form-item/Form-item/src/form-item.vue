<template>
  <el-form-item
    class="cx-form-item"
    :prop="prop"
    :label="label"
    :label-width="labelWidth"
    :required="required"
    :error="error"
    :show-message="showMessage"
    :rules="rule"
  >
    <slot></slot>
  </el-form-item>
</template>
<script>
  import {distributor} from '../../../../utils/validate/index'

  export default {
    name: 'default-form-item',
    data() {
      return {
        rule: null,
      }
    },
    props: {
      prop: {type: String}, //表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的
      label: {type: [Number, String]},//标签文本
      'label-width': {type: String},//表单域标签的的宽度，例如 '50px'
      required: {type: Boolean, default: false},//是否必填，如不设置，则会根据校验规则自动生成
      rules: {type: [String, Object, Array], default: null}, //表单验证种类
      type: {type: String, default: 'string'},
      requireMsg: {type: String, default: null}, //只有在rules 为 required 的时候，可以定义出错信息，默认为null
      trigger: {type: String, default: 'blur'},//触发验证
      error: {type: String},//表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息
      'show-message': {type: Boolean, default: true},//是否显示校验错误信息
    },
    created() {
      const ruleMode = this.rules;
      const d = distributor(ruleMode, this.type, this.trigger, this.requireMsg)
      if (typeof d === 'object' || typeof d === 'array') {
        this.rule = ruleMode ? d : null;
      }
    },
    methods: {}
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
