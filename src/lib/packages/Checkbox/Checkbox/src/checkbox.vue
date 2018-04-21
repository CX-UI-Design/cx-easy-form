<template>
  <div class="cx-checkbox">
    <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll"
                 @change="handleCheckAllChange" v-if="indeterminate">全选
    </el-checkbox>
    <div class="indeterminate-gap" v-if="indeterminate"></div>
    <el-checkbox-group
      class="cx-checkbox-group"
      v-model="childCheckbox"
      :min="min"
      :max="max"
      :size="size"
      :fill="fill"
      :text-color="textColor"
      :disabled="disabled"
      @change="change"
      :style="{width: checkbox_width,'line-height': checkbox_height}"
    >
      <el-checkbox v-for="(item,index) in group" :key="index" :index="index" :label="item[keyRefer.value]"
                   :name="name" :disabled="item[keyRefer.disabled]" v-if="type === 'normal'">{{item[keyRefer.label]}}
      </el-checkbox>
      <el-checkbox-button v-for="(item,index) in group" :key="index" :index="index" :label="item[keyRefer.value]"
                          :disabled="item[keyRefer.disabled]" v-if="type === 'button'">{{item[keyRefer.label]}}
      </el-checkbox-button>
    </el-checkbox-group>
  </div>

</template>
<script>
  import {getsCheckboxGroup} from '../../../../api/component/form-component'

  export default {
    name: 'default-checkbox',
    data() {
      return {
        childCheckbox: [],
        group: [],
        checkAll: true,
        checkAllOpt: [],
        isIndeterminate: false   //控制 indeterminate 模块的显示
      }
    },
    created() {
      this.childCheckbox = this.fatherCheckbox;
      this.isIndeterminate = this.indeterminate;
      const dynamic = this.dynamic
      if (this.dynamic) {
        const param = typeof dynamic === 'null' || typeof dynamic === 'undefind' ? {} : dynamic;
        getsCheckboxGroup(param)
          .then(response => {
              this.group = response.resultData;
              this.getCheckAllOpt()
            }
          ).catch(err => {
          console.log(err);
          this.group = this.items;
        })
      }
      else {
        this.group = this.items;
        this.getCheckAllOpt();
      }
    },
    methods: {
      getCheckAllOpt() {
        this.group.forEach(item => {
          this.checkAllOpt.push(item[this.keyRefer.value]);
        })
      },
      //全选操作事件
      handleCheckAllChange(val) {
        this.childCheckbox = val ? this.checkAllOpt : [];
        this.isIndeterminate = false;
      },
      change(value) {
        this.$emit('change', value);
        if (this.indeterminate) {
          let checkedCount = value.length;
          this.checkAll = checkedCount === this.items.length;
          this.isIndeterminate = checkedCount > 0 && checkedCount < this.items.length;
        }
      }
    },
    props: {
      fatherCheckbox: Array,
      /*  =======================  获取下拉菜单内容  =======================  */
      //1、动态获取 Checkbox - lable/value
      dynamic: {type: Object, default: null},
      //2、静态获取 Checkbox - lable/value
      items: {
        type: Array,
        default: function () {
          return [];
        }
      },
      /*  ==================================================================  */
      width: {type: [String, Number], default: '100%'},
      height: {type: [String, Number]},
      type: {type: String, default: 'normal'},//checkbox 类型
      name: {type: String}, //原生 name 属性
      indeterminate: {type: Boolean, default: false},
      size: {type: String},//尺寸
      min: {type: Number, default: 0}, //可被勾选的 checkbox 的最小数量
      max: {type: Number}, //可被勾选的 checkbox 的最大数量
      fill: {type: String, default: 'transparent'},//背景颜色
      textColor: {type: String, default: '#666'},//字体颜色
      disabled: {type: Boolean},
      //指代属性字段值
      keyRefer: {
        type: Object, default: function () {
          return {
            label: 'label',
            value: 'value',
            disabled: 'disabled'
          };
        }
      },
    },
    computed: {
      checkbox_width() {
        return this.$Utils.convertUnits(this.width, 'width');
      },
      checkbox_height() {
        return this.$Utils.convertUnits(this.height, 'height', 'auto');
      },
    },
    model: {
      prop: 'fatherCheckbox',
      event: 'checkboxChange'
    },
    watch: {
      childCheckbox() {
        this.$emit('checkboxChange', this.childCheckbox)
      },
      fatherCheckbox() {
        this.childCheckbox = this.fatherCheckbox;
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .cx-checkbox {
    box-sizing: border-box;
    .el-checkbox-button__inner {
      padding: 8px 15px;
    }
    .indeterminate-gap {
      margin: 15px 0;
    }
  }
</style>
