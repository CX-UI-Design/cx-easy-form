<template>
  <el-date-picker
    class="cx-onlyMMDD-picker"
    v-model="childOnlyMMDD"
    :type="type"
    :readonly="readonly"
    :disabled="disabled"
    :editable="editable"
    :clearable="clearable"
    :size="size"
    :placeholder="placeholder"
    :format="format"
    :value-format="valueFormat"
    :align="align"
    :popper-class="popperClass"
    :picker-options="pickerOptions"
    :range-separator="rangeSeparator"
    @change="change"
    @onPick="onPick"
    @focus="onlyMMDDfocus"
    @blur="onlyMMDDblur"
    :style="{width: datePicker_width ,height: datePicker_height}"
  >
  </el-date-picker>
</template>
<script>
  export default {
    name: 'default-onlyMMDDPicker',
    data() {
      return {
        childOnlyMMDD: '',
        onlyMMDDClass: 'only-MMDD',
      }
    },
    created() {
      this.childOnlyMMDD = this.fatherOnlyMMDD;
    },
    model: {
      prop: 'fatherOnlyMMDD',
      event: 'datechange'
    },
    computed: {
      datePicker_width() {
        return this.$Utils.convertUnits(this.width, 'width');
      },
      datePicker_height() {
        return this.$Utils.convertUnits(this.height, 'height');
      },
    },
    watch: {
      childOnlyMMDD() {
        this.$emit('datechange', this.childOnlyMMDD);
      },
      fatherOnlyMMDD() {
        this.childOnlyMMDD = this.fatherOnlyMMDD;
      }
    },
    props: {
      fatherOnlyMMDD: [Date, Array, String],
      width: {type: [String, Number], default: '100%'},
      height: {type: [String, Number], default: '32px'},
      readonly: {type: Boolean, default: false},//完全只读
      disabled: {type: Boolean, default: false},//禁用
      editable: {type: Boolean, default: false},//文本框可输入
      clearable: {type: Boolean, default: true},//是否显示清除按钮
      size: {type: String},//尺寸
      placeholder: {type: String}, //占位内容
      type: {type: String, default: 'data'},//显示类型
      format: {type: String, default: 'MM-dd'}, //显示在输入框中的格式
      valueFormat: {type: String,default: 'MM-dd'}, //时间日期绑定值格式，不指定则绑定Data对象
      align: {type: String, default: 'left'},//对齐方式
      popperClass: {type: String},//DateTimePicker 下拉框的类名
      rangeSeparator: {type: String, default: ' - '}, //选择范围时的分隔符
      //当前时间日期选择器特有的选项参考下表
      pickerOptions: {
        type: Object,
        default: function () {
          return {}
        }
      },
    },
    methods: {
      //focus
      onlyMMDDfocus() {
        clearTimeout(tt)
        let _addClass = () => {
          let panel = document.querySelector('body .el-picker-panel')//时间选择器下拉框Dom节点
          if (!panel) {
            console.log('不存在dom元素');
            return;
          }
          else {
            if (!this.$Utils.hasClass(panel, this.onlyMMDDClass)) {
              console.log('成功添加class了');
              panel.className += ' ' + this.onlyMMDDClass;
            }
            console.log('已经存在class了，不添加');
          }
        }
        var tt = setTimeout(_addClass, 10);
      },
      //blur
      onlyMMDDblur() {
        let panel = document.querySelector('body .el-picker-panel')
        if (this.$Utils.hasClass(panel, this.onlyMMDDClass)) {
          console.log('已经存在class了，删除class');
          this.$Utils.removeClass(panel, this.onlyMMDDClass)
        }
      },
      change(value) {
        this.$emit('change', value);
      },
      //选中日期后会执行的回调，只有当 daterange 或 datetimerange 才生效
      onPick({maxDate, minDate}) {
        this.$emit('onPick', {maxDate, minDate});
      }
    },
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .el-popper.only-MMDD {
    .el-picker-panel__body {
      .el-date-picker__header {
        /*background: skyblue;*/
        button.el-picker-panel__icon-btn:nth-child(2n+1) {
          display: none;
        }
        .el-date-picker__header-label:nth-child(3) {
          display: none;
        }
      }
    }
  }
</style>
