<template>
  <div>
    <el-cascader v-if="type === 'normal'"
                 class="cx-cascader"
                 v-model="childCascader"
                 :options="items"
                 :clearable="clearable"
                 :placeholder="placeholder"
                 :expand-trigger="expandTrigger"
                 :disabled="disabled"
                 :filterable="filterable"
                 :show-all-levels="showAllLevels"
                 :change-on-select="changeOnSelect"
                 :style="{width: cascader_width ,height: cascader_height }"
                 @change="change"
    >
    </el-cascader>
  </div>
</template>
<script>

  export default {
    name: 'default-cascader',
    data() {
      return {
        props: {
          value: 'label',
          label: 'label',
          children: 'area'
        },
        childCascader: [],
      }
    },
    created() {
      this.childCascader = this.fatherCascader;
    },
    model: {
      prop: 'fatherCascader',
      event: 'change'
    },
    watch: {
      childCascader() {
        this.$emit('change', this.childCascader)
      },
      //父组件model数据变化，实时变化子组件model
      fatherCascader() {
        this.childCascader = this.fatherCascader;
      }
    },
    computed: {
      cascader_width() {
        return this.$Utils.convertUnits(this.width, 'width');
      },
      cascader_height() {
        return this.$Utils.convertUnits(this.height, 'height');
      },
    },
    props: {
      fatherCascader: Array,
      type: {type: String, default: 'normal'},//级联选择器 内容
      items: {type: Array, default: []},//级联选择器 内容
      placeholder: {type: String, default: '请选择'},
      width: {type: [String, Number], default: '100%'},
      height: {type: [String, Number], default: '32px'},
      expandTrigger: {type: String, default: 'click'},//触发方式
      disabled: {type: Boolean, default: false}, //是否禁用
      clearable: {type: Boolean, default: false},//是否支持清空选项
      showAllLevels: {type: Boolean, default: true},//输入框中是否显示选中值的完整路径
      changeOnSelect: {type: Boolean, default: false},//选择即改变，可选择任意一级菜单的选项。
      filterable: {type: Boolean, default: false}, //可搜索
      //动态获取级联各级内容
      dynamicUrl: {type: String, default: "/owner/Cascader/area/test"},//请求地址
      dynamicQuery: {type: [Object, String, Array], default: null},//请求参数
    },
    methods: {
      change() {
        this.$emit('change');
      },
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
