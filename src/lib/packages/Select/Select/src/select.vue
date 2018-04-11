<template>
  <el-select class="cx-select"
             v-model="childSelect" :disabled="disabled" :clearable="clearable"
             :multiple="multiple" :multiple-limit="multipleLimit" :size="size"
             :filterable="filterable" :filter-method="filterMethod"
             :allow-create="allowCreate" :loading="loading"
             :style="{width: select_width ,height: select_height }"
             @change="change" @visible-change="visibleChange" :placeholder="placeholder">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
      :disabled="item.disabled"
    >
      <span class="fl" v-if="custom"> {{ item.label }}</span>
      <span class="fr customtemplate" v-if="custom">{{ item.value }}</span>
    </el-option>
  </el-select>
</template>
<script>
  import {getsSelectOption} from '../../../../api/select/select'

  export default {
    name: 'default-select',
    data() {
      return {
        childSelect: '',
        options: [],
        loading: false,
      }
    },
    computed: {
      select_width() {
        return this.$Utils.convertUnits(this.width, 'width')
      },
      select_height() {
        return this.$Utils.convertUnits(this.height, 'height');
      },
    },
    created() {
      this.childSelect = this.fatherSelect;
      this.getSelectOption();//judge select type and handle
    },
    methods: {
      //get option
      getSelectOption() {
        //根据是否有动态获取数据的请求地址来判断是否是静态获取下拉数据
        this.dynamicUrl ? this.options = this.isInitItems ? this.items : [] : this.options = this.items;
      },
      //visible-Change （ 点击下拉菜单 ）
      visibleChange() {
        //有请求路径 并且 不为 远程搜索方法
        if (this.dynamicUrl) {
          getsSelectOption(this.dynamicUrl, this.dynamicQuery)
            .then(response => {
                this.options = response.resultData;
              }
            ).catch(err => {
            return Promise.reject(err);
            this.options = this.items;
          })
        }
        //change 事件回传
        this.$emit('visible-change');
      },
      //change
      change(value) {
        this.$emit('change', value);
      }
    },
    props: {
      fatherSelect: [Array, String],
      /*  =======================  获取下拉菜单内容  =======================  */
      //1、动态获取select-option下拉菜单内容
      dynamicUrl: {type: String, default: null},
      dynamicQuery: {type: [Object, String, Array], default: null},
      //2、静态获取select-option下拉菜单内容
      items: {
        type: Array, default: function () {
          return []
        }
      },
      isInitItems: {type: Boolean, default: false},//是否有下拉初始数据items（后续会有下拉触发事件，以改变items-data）
      /*  ==================================================================  */
      width: {type: [String, Number], default: '100%'},
      height: {type: [String, Number], default: '32px'},
      placeholder: {type: String, default: null},
      name: {type: String},//原生 name 属性
      size: {type: String, default: 'small'},//尺寸
      disabled: {type: Boolean, default: false},//是否禁用
      clearable: {type: Boolean, default: true},//单选时是否可以清空选项
      multiple: {type: Boolean, default: false},//是否多选
      multipleLimit: {type: Number, default: 0},//多选时用户最多可以选择的项目数，为 0 则不限制
      filterable: {type: Boolean, default: false},//是否可搜索
      filterMethod: {type: Function, default: null},//自定义过滤方法
      allowCreate: {type: Boolean, default: false},//是否允许用户创建新条目，需配合 filterable 使用
      custom: {type: Boolean, default: false},//自定义 下拉内容
    },
    model: {
      prop: 'fatherSelect',
      event: 'change'
    },
    watch: {
      childSelect() {
        this.$emit('change', this.childSelect)
      },
      fatherSelect() {
        this.childSelect = this.fatherSelect;
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .cx-select {
    .customtemplate {
      color: #8492a6;
      font-size: 13px
    }
  }
</style>
