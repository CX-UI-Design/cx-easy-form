<!--role-organization 所属组织-->
<template>
  <div class="cx-role-organization" v-model="childRoleOrganization" :style="{width: roleOrganization_width ,height: roleOrganization_height}">
    <!--select-modules-->
    <el-select class="select-modules" v-model="selectShow" :placeholder="placeholder" :size="size"
               :disabled="disabled" :clearable="clearable" @visible-change="visibleChange" @clear="clearMethod"
    >
      <!--handle-modules-->
      <el-option class="role-organization-option" value="role-organization-option">
        <el-tree class="handle-modules" ref="roleOrganization"
                 :data="treeData" :props="props" :default-expanded-keys="defaultExpandedKeys" :default-checked-keys="defaultCheckedkeys"
                 :node-key="keyRefer['value']" :auto-expand-parent="false" :accordion="true"
                 show-checkbox :check-strictly="true" lazy :load="loadNode" @check-change="handleCheckChange"
        >
        </el-tree>
      </el-option>
    </el-select>
  </div>
</template>
<script>
  import keyRefer from './keyRefer'//指代属性字段值
  import {getSingleOrganizationData, getInitTreeData, getChildTreeData} from '../../../../api/role-components/role-organization'

  export default {
    name: 'default-role-organization',
    data() {
      return {
        keyRefer: keyRefer,//指代属性字段值
        childRoleOrganization: [],
        selectShow: '',
        initLeval: 1,//init-leval - ( 默认获取树状结构数据层次 )
        treeData: [],//init tree data
        expandedIndex: [0, 0],//expanded number -（ 第几个索引展开,数组，索引值对应各级展开序列 ）
        defaultExpandedKeys: [],//default expanded keys - ( 按需初始展开的ID数组 )
        defaultCheckedkeys: [],
        LastCheck: '',//上一次操作点击的节点ID
        //props
        props: {
          label: keyRefer['label'],
          children: keyRefer['children'],
        },
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
      //获取select 初始显示modelData值
      this.getInitShowData({organizationId: this.childRoleOrganization});
    },
    mounted() {

    },
    methods: {
      /**
       * get select show model （获取select 初始显示modelData值）
       */
      getInitShowData(query) {
        if (query) {
          getSingleOrganizationData(query)
            .then(response => {
                this.selectShow = response.resultData[keyRefer['label']];
              }
            ).catch(err => {
            return Promise.reject(err);
          })
        }
      },
      /**
       * get init data （初始化数据加载）
       */
      getBodyData() {
        if (this.$Utils.isEmpty(this.treeData)) {
          getInitTreeData()
            .then(response => {
                //init-leval - 设置默认获取树状结构数据层次
                this.initLeval = parseInt(response.resultData.level);
                //set tree data
                this.treeData = response.resultData[keyRefer['children']];
                // set expanded keys array （默认展开）
                this.defaultExpandedKeys = this.setExpandedKeys(this.treeData, this.initLeval, this.expandedIndex);
                // set default checked list （设置默认选中的列表）
                this.defaultCheckedkeys = [this.childRoleOrganization];
                //bind LastCheck （绑定 LastCheck 值，即模拟选中状态）
                this.LastCheck = this.childRoleOrganization;
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
       * load-node ( 按需点击加载数据 )
       * @param node
       * @param resolve
       */
      loadNode(node, resolve) {
        const ID = node.data[keyRefer['value']];
        if (!this.$Utils.isEmpty(this.treeData)) {
          //按需获取节点数据 - 所点击节点的数据层级需要在初始展开层级之外
          if (parseInt(node.level) >= this.initLeval) {
            let data = [];
            //get init data （按需获取子节点数据）
            getChildTreeData({organizationId: ID})
              .then(response => {
                  data = response.resultData[keyRefer['children']];
                  resolve(data);
                  this.$refs.roleOrganization.setCheckedKeys([this.LastCheck]); //set checked key
                  node.parent.indeterminate = false;//clear parent indeterminate
                  return;
                }
              ).catch(err => {
              resolve(data);
              return Promise.reject(err);
            });
          }
          //所点击节点的数据层级需要在初始展开层级之内，无需按需加载数据
          else {
            resolve(node.data.childOrganizations);
            this.$refs.roleOrganization.setCheckedKeys([this.LastCheck]); //set checked key
            node.parent.indeterminate = false;//clear parent indeterminate
          }
        }
        else {
          return;
        }
      },
      /**
       * set expanded keys   （ 初始 按需展开的ID数组 ）
       * @param data                        init tree data
       * @param initLeval                   init Leval (expanded) （ 初始展开的层级 ）
       * @param expandedIndex               expanded number       （ 第几个索引展开 ）
       * @returns {Array}
       */
      setExpandedKeys(data, initLeval, expandedIndex) {
        const arr = [];
        let item = JSON.parse(JSON.stringify(data));
        const children = this.props.children;
        const ID = keyRefer['value'];
        let i = 0;
        if (item) {
          do {
            const ei = expandedIndex[i];
            if (!this.$Utils.arrContainObj(arr, item[ei][ID])) {
              arr.push(item[ei][ID]);
            }
            if (item[ei].hasOwnProperty(children)) {
              item = item[ei][children];
            }
            i++;
          } while (i < initLeval);
        }
        return arr;
      },

      /**
       * check-change handle ( 点击选择操作 )
       * @param data
       * @param checked
       * @param indeterminate
       */
      handleCheckChange(data, checked, indeterminate) {
        const ID = data[keyRefer['value']];
        const name = data[keyRefer['label']];
        if (checked) {
          this.LastCheck = ID;
          //设定相关model值
          this.childRoleOrganization = ID;
          this.selectShow = name;
          this.defaultCheckedkeys = [ID];
        }
        else {
          //点击取消选中 上一次操作点击的节点的情况
          if (ID === this.LastCheck) {
            this.clearStatusData();//clear all status data
          }
        }
      },

      /**
       * visible-change
       * @param sw        open status
       */
      visibleChange(sw) {
        //opening
        if (sw) {
          this.getBodyData(); //get init data 初始化数据加载
        }
      },
      //select clear value method
      clearMethod(value) {
        this.clearStatusData();//clear all status data
      },
      //clear all status data
      clearStatusData() {
        this.childRoleOrganization = '';//清除modelData 值
        this.selectShow = '';//清除 下拉框 实际显示值
        this.defaultCheckedkeys = [];//清除 默认选中值
        this.LastCheck = '';
      }
    },
    props: {
      fatherRoleOrganization: {
        type: [String, Number, Object], default: function () {
          return {label: '', value: ''}
        }
      },
      size: {type: String, default: 'small'},//尺寸
      width: {type: [String, Number], default: '100%'},
      height: {type: [String, Number], default: '32px'},
      placeholder: {type: String, default: null},
      disabled: {type: Boolean, default: false},//是否禁用
      clearable: {type: Boolean, default: true},//单选时是否可以清空选项
    },
    model: {
      prop: 'fatherRoleOrganization',
      event: 'change'
    },
    watch: {
      selectShow(value) {
        if (!value) {
          this.clearStatusData();//clear all status data
        }
      },
      defaultCheckedkeys(value) {
        this.$refs.roleOrganization.setCheckedKeys(this.defaultCheckedkeys);
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
  @import "./organization";
</style>
