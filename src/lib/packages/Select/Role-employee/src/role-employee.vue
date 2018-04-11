<!--role-employee （ 员工角色权限 ）-->
<template>
  <!--cx-select-multiple => 多选标识class-->
  <el-select class="cx-select cx-role-employee cx-select-multiple"
             v-model="childRoleGroup" :disabled="disabled" :clearable="clearable"
             :multiple="multiple" :multiple-limit="multipleLimit" :size="size"
             :style="{width: select_width}"
             @change="change" @visible-change="visibleChange" :placeholder="placeholder">
    <el-option-group
      v-for="(group,firstIndex) in options"
      :key="group[firstKeyRefer['label']]"
      :label="group[firstKeyRefer['label']]"
      class="role-employee-option"
      :style="{width: select_width}"
    >
      <el-option v-for="(item,secondIndex) in group[firstKeyRefer['children']]"
                 :key="item[secondKeyRefer['value']]"
                 :label="item[secondKeyRefer['label']]"
                 :value="item[secondKeyRefer['value']]"
                 :disabled="item[secondKeyRefer['disabled']]"
      >
        <el-checkbox v-model="item[secondKeyRefer['checkSw']]"></el-checkbox>
        <span class="role-employee-text oneline-ellipsis"> {{ item[secondKeyRefer.label]}} </span>
      </el-option>
    </el-option-group>
  </el-select>
</template>
<script>
  import keyRefer from './keyRefer'//指代属性字段值
  import {getInitRoleGroupList, getRoleGroupList} from '../../../../api/role-components/role-employee'

  export default {
    name: "default-role-employee",
    data() {
      return {
        childRoleGroup: '',
        firstKeyRefer: keyRefer.firstLevel,//指代属性字段值 一级
        secondKeyRefer: keyRefer.secondLevel,//指代属性字段值 二级
        options: [],//下拉数据
        isLoaded: false,//是否加载过下拉数据
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
      this.childRoleGroup = this.fatherRoleGroup;
      //get init data
      this.getInitRoleGroupList(this.childRoleGroup);
    },
    mounted() {

    },
    methods: {
      /**
       * get role-group-list  (分组获取角色列表)
       * @param query
       */
      getInitRoleGroupList(query) {
        if (!this.$Utils.isEmpty(query) && query) {
          getInitRoleGroupList(query)
            .then(response => {
                this.options = response.resultData;
              }
            ).catch(err => {
            return Promise.reject(err);
          })
        }
      },
      /**
       * get role-group-list  (分组获取角色列表)
       * @param query
       */
      getRoleGroupList(query) {
        //the role-group-list data is loaded?
        if (!this.isLoaded) {
          this.options = [];
          getRoleGroupList(query)
            .then(response => {
                this.options = response.resultData;
                this.isLoaded = true;
              }
            ).catch(err => {
            return Promise.reject(err);
          })
        }
        else {
          return;
        }
      },
      /**
       * synchronous selection  (同步选中)
       * @param options    option list
       */
      synSelection(options) {
        options.map((firstItem, i) => {
          firstItem[this.firstKeyRefer['children']].map((secondItem, j) => {
            secondItem[this.secondKeyRefer['checkSw']] = this.$Utils.arrContainObj(this.childRoleGroup, secondItem[this.secondKeyRefer['value']]) ?
              true : false;
          })
        })
      },
      //visible-Change （ 点击下拉菜单 ）
      visibleChange(sw) {
        //opening
        if (sw) {
          this.getRoleGroupList({organizationId: this.dynamicQuery});//get role-group-list
        }
        //change 事件回传
        this.$emit('visible-change');
      },
      //change
      change(val) {
        this.$emit('change', val);
      }
    },
    props: {
      fatherRoleGroup: [Array, String, Number],
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
      allowCreate: {type: Boolean, default: false},//是否允许用户创建新条目，需配合 filterable 使用
      custom: {type: Boolean, default: false},//自定义 下拉内容
      dynamicUrl: {type: String, default: null},
      dynamicQuery: {type: [String, Number], default: null},//外部传入请求参数
    },
    model: {
      prop: 'fatherRoleGroup',
      event:
        'change'
    },
    watch: {
      childRoleGroup() {
        this.$emit('change', this.childRoleGroup);
        //synchronous selection  (同步选中)
        this.synSelection(this.options);
      },
      fatherRoleGroup() {
        this.childRoleGroup = this.fatherRoleGroup;
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "./role-employee";
</style>
