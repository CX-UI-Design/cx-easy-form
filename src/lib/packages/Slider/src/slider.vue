<template>
  <el-slider
    class="cx-slider"
    v-model="childSlider"
    :show-tooltip="showTooltip"
    :format-tooltip="formatTooltip"
    :disabled="disabled"
    :show-stops="showStops"
    :show-input="showInput"
    :step="step"
    :range="range"
    :min="min"
    :max="max"
    :vertical="vertical"
    :height="height"
    :style="{width: width + 'px!important'}"
    @change="change"
  >
  </el-slider>
</template>
<script>
  export default {
    name:'default-slider',
    data() {
      return {
        childSlider: false
      }
    },
    created() {
      this.childSlider = this.fatherSlider;
    },
    model: {
      prop: 'fatherSlider',
      event: 'change'
    },
    watch: {
      childSlider() {
        this.$emit('change', this.childSlider)
      },
      fatherSlider() {
        this.childSlider = this.fatherSlider;
      }
    },
    props: {
      fatherSlider: [Number, Array],
      showTooltip: {type: Boolean, default: true},//是否显示 tooltip
      disabled: {type: Boolean, default: false}, //是否禁用
      step: {type: Number, default: 1}, //步长
      showStops: {type: Boolean, default: false},//是否显示间断点
      showInput: {type: Boolean, default: false},//是否显示输入框，仅在非范围选择时有效
      range: {type: Boolean, default: false}, //是否为范围选择
      min: {type: Number, default: 0}, //最大可选择值
      max: {type: Number, default: 100},//最小可选择值
      vertical: {type: Boolean, default: false},  //是否竖向模式
      width: {type: Number}, //Slider 宽度
      height: {type: Number, default: null}, //Slider 高度，竖向模式时必填
      formatTooltip: {
        type: Function, default: function (val) {
          return val / 1
        }
      },//自定义 tooltip message
    },
    methods: {
      change(value) {
        this.$emit('change', value);
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
