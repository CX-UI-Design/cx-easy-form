<template>
  <el-button :type="type" :size="size" :plain="plain" :loading="loading"
             :disabled="disabled" :icon="icon" :autofocus="autofocus"
             :native-type="nativeType"
             :style="{width: btnWidth ,height: btnHeight}"
             @click.native="click"
  >
    {{btnLabel}}
  </el-button>
</template>
<script>
  export default {
    data() {
      return {}
    },
    props: {
      size: {type: String}, //尺寸可选large,small,mini
      type: {type: String},//类型 primary,success,warning,danger,info,text
      width: {type: [String, Number], default: '100%'},
      height: {type: [String, Number], default: '32px'},
      btnLabel: {type: String, default: ''},//按钮显示名称
      plain: {type: Boolean, default: false},//是否朴素按钮
      loading: {type: Boolean, default: false},//是否加载中状态
      disabled: {type: Boolean, default: false},//是否禁用状态
      icon: {type: String,},//图标，已有的图标库中的图标名
      autofocus: {type: Boolean, default: false},//是否默认聚焦
      'native-type': {type: String, default: 'button'},//原生 type 属性  Button,submit,reset
    },
    computed: {
      btnWidth() {
        return this.autoForm.convertUnits(this.width, 'width')
      },
      btnHeight() {
        return this.autoForm.convertUnits(this.height, 'height');
      },
    },
    created() {

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
