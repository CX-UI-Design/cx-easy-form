<!--role-organization 所属组织-->
<template>
  <div class="cx-simple-tree__select" v-model="childRoleOrganization" :style="{width: roleOrganization_width ,height: roleOrganization_height}">
    <!--select-container-->
    <el-select class="select-container" v-model="childRoleOrganization" :placeholder="placeholder" :size="size" :multiple="multiple"
               :disabled="disabled" :clearable="clearable" @visible-change="visibleChange" @remove-tag="removeTag" @clear="initTreeModel"
    >
      <el-option class="not-render" v-for="item in multiple?treeModel:[treeModel]" :key="item[keyRefer['value']]" :label="item[keyRefer['label']]"
                 :value="item[keyRefer['value']]" v-show="false"></el-option>
      <!--handle-modules-->
      <el-option class="tree-select__option" value="role-organization-option" v-if="optionSw">
        <component :is="$SN+'simple-tree'" v-model="treeModel" :multiple="multiple" :keyRefer="keyRefer"></component>
      </el-option>
    </el-select>
  </div>
</template>
<script>
  import keyRefer from './keyRefer';
  import {getInitShowData} from '../../../../api/select/simple-tree-select'

  export default {
    name: 'default-simple-tree-select',
    data() {
      return {
        childRoleOrganization: [],//model data
//        treeModel: [{"organizationId": 11, "organizationName": "技术部"}, {"organizationId": 12, "organizationName": "财务部"}],
        treeModel: null,//tree model data
        optionSw: false,
        keyRefer: keyRefer,
      };
    },
    computed: {
      roleOrganization_width() {
        return this.$Utils.convertUnits(this.width, 'width', '100%');
      },
      roleOrganization_height() {
        return this.$Utils.convertUnits(this.height, 'height');
      },
    },
    created() {
      this.childRoleOrganization = this.fatherRoleOrganization;
      //set init tree model
      this.initTreeModel()
      //get select value and tree model data
      this.getInitShowData({organizationId: this.childRoleOrganization});
    },
    mounted() {

    },
    methods: {
      /**
       * set init tree model-data
       */
      initTreeModel() {
        this.treeModel = this.multiple ? [] : {};
      },
      requireConfig(type) {
        const confMap = {
          normal: {url: '', query: {}},
          "role-organization": {url: '/system/organization/get-orgDetail-form', method: 'get', query: {organizationId: this.childRoleOrganization}},
          "role-organizationList": {url: '/system/organization/get-moreOrgDetail-form', method: 'post', query: this.childRoleOrganization},
        }
        return confMap[type];
      },
      /**
       * get select value and tree model data
       */
      getInitShowData() {
        const q = this.requireConfig(this.bizType);
        //if require query is not existent，don't to initiate a request
        if (!this.multiple && !q.query.organizationId) return; //single situation
        if (this.multiple && q.query.length === 0) return //multiple situation
        getInitShowData(q.url, q.method, q.query)
          .then(response => {
              console.log('获取select 初始显示modelData值');
              const res = response.resultData;
              console.log(res);
              this.treeModel = res;//set tree model data
            }
          ).catch(err => {
          return Promise.reject(err);
        })
      },

      /**
       * create select value to show
       * @param dataFrom        data whitch handle data form
       */
      createSelectShow(dataFrom) {
        //multiple situation
        if (this.multiple) {
          if (this.$Utils.judgeType(dataFrom) !== 'array') {
            throw('in multiple situation, the data whitch use to create selectShow value should be array format ---- tree in select component');
          }
          this.childRoleOrganization = [];
          //create select value list to show when select data list has content
          if (dataFrom.length > 0) {
            dataFrom.forEach(item => {
              this.childRoleOrganization.push(item[keyRefer['value']]);
            });
          }
        }
        //single situation
        else {
          if (this.$Utils.judgeType(dataFrom) !== 'object') {
            throw('in single situation, the data whitch use to create selectShow value should be object format ---- tree in select component');
          }
          if (dataFrom) {
            this.childRoleOrganization = dataFrom[keyRefer['value']];
            console.log('显示值：');
            console.log(this.childRoleOrganization);
            console.log(this.treeModel);
          }
          else {
            this.childRoleOrganization = {};
          }
        }
      },

      /**
       * visible-change
       * @param sw        open status
       */
      visibleChange(sw) {
        if (sw) this.optionSw = true; //when select opening, rendering tree component
      },
      //remove tag
      removeTag() {
        //multiple situation
        if (this.multiple) {
          let newArr = [];
          const v = keyRefer['value'];
          for (let i of this.treeModel) {
            for (let j of this.childRoleOrganization) {
              if (i[v] === j) {
                newArr.push(i)
              }
            }
          }
          this.treeModel = newArr;
        }
      },
    },
    props: {
      fatherRoleOrganization: {
        type: [String, Number, Object, Array]
      },
      size: {type: String, default: 'small'},//尺寸
      width: {type: [String, Number], default: '100%'},
      height: {type: [String, Number], default: '32px'},
      placeholder: {type: String, default: null},
      disabled: {type: Boolean, default: false},//是否禁用
      multiple: {type: Boolean, default: false},
      clearable: {type: Boolean, default: true},//单选时是否可以清空选项
      bizType: {type: String, default: 'normal'},//业务类型，决定初始值显示的请求路径和请求参数
    },
    model: {
      prop: 'fatherRoleOrganization',
      event: 'change'
    },
    watch: {
      treeModel: {
        handler(newValue, oldValue) {
          console.log('监听变化 --- childTreeData');
          console.log(newValue);
          this.createSelectShow(newValue);//create select value to show
        },
        deep: true
      },
      childRoleOrganization(value) {
        this.$emit('change', this.childRoleOrganization);
      },
      fatherRoleOrganization() {
        this.childRoleOrganization = this.fatherRoleOrganization;
      },
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "../../../../assets/mixin/mixin";

  .cx-simple-tree__select {
    .el-input__icon.el-icon-circle-check {
      display: none;
    }
    .select-container {
      width: 100%;
      height: 100%;
    }
  }

  //option - part
  li.tree-select__option {
    height: auto;
    box-sizing: border-box;
    background-color: transparent;
    &.hover, &:hover {
      background-color: transparent;
    }
  }
</style>
