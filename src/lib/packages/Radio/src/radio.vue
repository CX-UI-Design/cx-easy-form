<template>
  <el-radio-group v-model="childRadio" :disabled="disabled"  @change="change"
                  :style="{width: radio_width,'line-height': radio_baseHeight}" class="cx-radio-group"
  >
    <el-radio-button v-for="(item,index) in group" :key="index" :index="index"
                     :label="item.value" :disabled="disabled||item.disabled" v-if="type === 'button'"
                     :class="['cx-radio-Button',parseInt(radio_baseHeight)>baseHeight?'cx-radio-big-Button':'cx-radio-normal-Button']">
      {{item.label}}
    </el-radio-button>
    <el-radio v-for="(item,index) in group" :key="index" :index="index"
              :label="item.value" :disabled="disabled||item.disabled" v-if="type === 'normal'" :style="{height: radio_baseHeight}">
      {{item.label}}
    </el-radio>
  </el-radio-group>
</template>
<script>
  import {getsRadioGroup} from '../../../api/component/form-component'

  export default {
    name: 'default-radio',
    data() {
      return {
        childRadio: '',
        group: [],
        baseHeight: 32
      }
    },
    created() {
      this.childRadio = this.fatherRadio;
      const dynamic = this.dynamic
      if (this.dynamic) {
        const param = typeof dynamic === 'null' || typeof dynamic === 'undefind' ? {} : dynamic;
        console.log(param)
        getsRadioGroup(param)
          .then(response => {
              console.log('获取到数据！！select');
              console.log(response);
              this.group = response.resultData;
            }
          ).catch(err => {
          console.log('错误如下：：：：');
          console.log(err);
          this.group = this.items;
        })
      }
      else {
        this.group = this.items;
      }
    },
    model: {
      prop: 'fatherRadio',
      event: 'change'
    },
    watch: {
      childRadio() {
        this.$emit('change', this.childRadio)
      },
      fatherRadio() {
        this.childRadio = this.fatherRadio;
      }
    },
    computed: {
      radio_width() {
        return this.$Utils.convertUnits(this.width, 'width');
      },
      radio_baseHeight() {
        return this.$Utils.convertUnits(this.height, 'height');
      },
    },
    props: {
      fatherRadio: [String, Number],
      /*  =======================  获取下拉菜单内容  =======================  */
      //1、动态获取 Radio - 内容数据 lable/value
      dynamic: {type: Object, default: null},
      //2、静态获取 Radio - 内容数据 lable/value
      items: {
        type: Array,
        default: function () {
          return []
        }
      },
      /*  ==================================================================  */
      width: {type: [String, Number], default: '100%'},
      height: {type: [String, Number], default: '32px'},
      type: {type: String, default: 'normal'}, //Radio 类型     normal /  Button
      disabled: {type: Boolean, default: false},
    },
    methods: {
      change(value) {
        this.$emit('change', value);
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  /*cx-radio 的高度为单个选项本身的高度，而非整个radio控件全部高度（如果单选个体多，且宽度确定的情况下会上下分为好几行），基础默认高度为32px*/
  $base_pd: 8px; //基础padding值 （作用于 radio 中 按钮样式）
  .el-radio-group.cx-radio-group {
    label.el-radio {
      line-height: inherit;
      box-sizing: border-box;
      span.el-radio__input {
        line-height: inherit;
      }
    }
    label.cx-radio-button {
      &.cx-radio-normal-button span.el-radio-button__inner {
        padding: $base_pd - 1 $base_pd*12/8;
        box-sizing: border-box;
      }
      &.cx-radio-big-button span.el-radio-button__inner {
        padding: $base_pd*10/8 - 1 $base_pd*15/8;
      }
    }
  }
</style>
