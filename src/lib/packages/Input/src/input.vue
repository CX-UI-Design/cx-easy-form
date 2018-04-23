<template>
  <div class="cx-input" :style="{width: input_width ,height: input_height,'line-height': input_height}">
    <el-input
      v-model="childIpt"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      :disabled="disabled"
      :size="size"
      :rows="rows"
      :minlength="minlength"
      :maxlength="maxlen"
      :autofocus="autofocus"
      :readonly="readonly"
      @change="change"
      @blur="blur"
      @focus="focus"
    >
    </el-input>
    <div class="cx-input__icon success">
      <component :is="$SN+'icon-svg'" icon-class="check-circle" @click="iconClick(childIpt)"></component>
    </div>
    <div class="cx-input__icon error">
      <component :is="$SN+'icon-svg'" icon-class="CombinedShapeCopy" @click="iconClick(childIpt)"></component>
    </div>
    <div class="cx-input__icon normal" v-if="customIcon">
      <component :is="$SN+'icon-svg'" :icon-class="customIcon" @click="iconClick(childIpt)"></component>
    </div>
  </div>
</template>
<script>
  //  import $store from './store/index'
  export default {
    name: 'default-input',
    data() {
      return {
        childIpt: '',
        LimitLen: 300,
      }
    },
    created() {
      this.childIpt = this.fatherIpt;
    },
    model: {
      prop: 'fatherIpt',
      event: 'input'
    },
    watch: {
      childIpt() {
        this.$emit('input', this.childIpt);
      },
      fatherIpt() {
        this.childIpt = this.fatherIpt;
      }
    },
    computed: {
      input_width() {
        return this.$Utils.convertUnits(this.width, 'width');
      },
      input_height() {
        let h = null;
        if (this.height || this.height === 0) {
          h = this.height
        }
        else {
          h = this.type === 'text' ? '32px' : 'auto';
        }
        return this.$Utils.convertUnits(h, 'height');
      },
      maxlen() {
        return this.maxlength ? parseInt(this.maxlength) : this.LimitLen;
      }
    },
    props: {
      fatherIpt: [String, Number],
      width: {type: [String, Number], default: '100%'},
      height: {type: [String, Number]},
      name: {type: String, default: ''},
      type: {type: String, default: 'text'},
      placeholder: {type: String, default: null},
      size: {type: String},
      'prefix-icon': {type: String},//输入框头部图标
      'suffix-icon': {type: String},//输入框尾部图标
      customIcon: {type: String},
      rows: {type: Number, default: 3},
      minlength: {type: [Number, String]},//最小输入长度
      maxlength: {type: [Number, String], default: 300},//最大输入长度
      disabled: {type: Boolean, default: false},
      autofocus: {type: Boolean, default: false},
      readonly: {type: Boolean, default: false},
    },
    methods: {
      /* -------------
        change event is not triggered by trying to monitor changes,
        needs to wait until the focus is lost.
      -------------*/
      change(value) {
        this.$emit('change', value);
      },
      iconClick(value) {
        this.$emit('iconClick', value);
      },
      blur(value) {
        this.$emit('blur', value);
      },
      focus(value) {
        this.$emit('focus', value);
      },
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "input";
</style>
