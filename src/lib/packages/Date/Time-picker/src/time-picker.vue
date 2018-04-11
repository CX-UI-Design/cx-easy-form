<template>
  <el-time-picker
    class="cx-time-picker"
    v-model="childTimePicker"
    :placeholder="placeholder"
    :readonly="readonly"
    :disabled="disabled"
    :clearable="clearable"
    :size="size"
    :align="align"
    :popperClass="popperClass"
    :pickerOptions="pickerOptions"
    :is-range="isRange"
    :format="format"
    :value-format="valueFormat"
    @change="change"
    :style="{width: timePicker_width ,height: timePicker_height}"
  >
  </el-time-picker>
</template>
<script>
  export default {
    name: 'default-time-picker',
    data() {
      return {
        childTimePicker: '',
      }
    },
    model: {
      prop: 'fatherTimePicker',
      event: 'datechange'
    },
    watch: {
      childTimePicker() {
        this.$emit('datechange', this.childTimePicker);
      },
      fatherTimePicker() {
        this.childTimePicker = this.fatherTimePicker;
      }
    },
    computed: {
      timePicker_width() {
        return this.$Utils.convertUnits(this.width,'width');
      },
      timePicker_height() {
        return this.$Utils.convertUnits(this.height,'height');
      },
    },
    created() {
      this.childTimePicker = this.fatherTimePicker;
    },
    props: {
      fatherTimePicker: [Date, Array, String],
      width: {type: [String, Number], default: '100%'},
      height: {type: [String, Number], default: '32px'},
      placeholder: {type: String,}, //内容
      readonly: {type: Boolean, default: false}, //只读
      disabled: {type: Boolean, default: false},//禁用
      clearable: {type: Boolean, default: true},//是否显示清除按钮
      size: {type: String,}, //尺寸
      align: {type: String, default: 'left'},//对齐方式
      popperClass: {type: String}, //DateTimePicker 下拉框的类名
      format: {type: String, default: 'yyyy-MM-dd'}, //显示在输入框中的格式
      valueFormat: {type: String}, //时间日期绑定值格式，不指定则绑定Data对象
      isRange: {type: Boolean, default: false}, //是否是时间范围
      //当前时间日期选择器特有的选项参考下表
      pickerOptions: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    methods: {
      change(value) {
        this.$emit('change', value);
      }
    },
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .el-date-editor.cx-time-picker {
    input.el-input__inner {
      height: 100%;
    }
  }
</style>
