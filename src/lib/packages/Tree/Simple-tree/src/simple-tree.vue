<!-- simple-tree 简单树状组件-->
<template>
  <el-tree class="cx-simple__tree" ref="roleBaseTree" v-model="childTreeData" v-loading="treeSw"
           :data="treeData" :props="keyRefer" :default-expanded-keys="defaultExpandedKeys" :default-checked-keys="defaultCheckedkeys"
           :node-key="keyRefer['value']" :auto-expand-parent="false" :accordion="true"
           show-checkbox :check-strictly="true" lazy :load="loadNode" @check-change="handleCheckChange"
  >
  </el-tree>
</template>
<script>
  import {getInitTreeData, getChildTreeData} from '../../../../api/tree/simple-tree'

  export default {
    name: 'default-simple-tree',
    data() {
      return {
        childTreeData: null,
        initLeval: 1,//init-leval - ( 默认获取树状结构数据层次 )
        treeData: [],//init tree data
        expandedIndex: [0, 0],//expanded number -（ 第几个索引展开,数组，索引值对应各级展开序列 ）
        defaultExpandedKeys: [],//default expanded keys - ( 按需初始展开的ID数组 )
        defaultCheckedkeys: [],
        LastCheck: '',//上一次操作点击的节点ID
        treeSw: true,//rendering switch
      };
    },
    created() {
      this.childTreeData = this.fatherTreeData;
      this.getBodyData(); //get init data 初始化数据加载
    },
    mounted() {

    },
    methods: {
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
                this.treeData = response.resultData[this.keyRefer['children']];
                // set expanded keys array （默认展开）
                this.defaultExpandedKeys = this.setExpandedKeys(this.treeData, this.initLeval, this.expandedIndex);
                //when tree model data is not existent or is empty array, return off
                if (!this.childTreeData || this.childTreeData === []) return false;

                //multiple situation
                if (this.multiple) {
                  let arr = [];
                  this.childTreeData.map(item => {
                    arr.push(item[this.keyRefer['value']]);
                  })
                  this.defaultCheckedkeys = arr;// set default checked list （设置默认选中的列表）
                  this.LastCheck = arr;//bind LastCheck
                }
                //single situation
                else {
                  const ID = this.childTreeData[this.keyRefer['value']];
                  this.defaultCheckedkeys = [ID];  // set default checked list （设置默认选中的列表）
                  this.LastCheck = ID;//bind LastCheck （绑定 LastCheck 值，即模拟选中状态）
                }
                this.treeSw = false;
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
        const ID = node.data[this.keyRefer['value']];
        if (!this.$Utils.isEmpty(this.treeData)) {
          //按需获取节点数据 - 所点击节点的数据层级需要在初始展开层级之外
          if (parseInt(node.level) >= this.initLeval) {
            let data = [];
            //get init data （按需获取子节点数据）
            getChildTreeData({organizationId: ID})
              .then(response => {
                  data = response.resultData[this.keyRefer['children']];
                  resolve(data);
                  this.$refs.roleBaseTree.setCheckedKeys(this.multiple ? this.LastCheck : [this.LastCheck]); //set checked key
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
            this.$refs.roleBaseTree.setCheckedKeys(this.multiple ? this.LastCheck : [this.LastCheck]); //set checked key
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
        const children = this.keyRefer.children;
        const ID = this.keyRefer['value'];
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
        const ID = data[this.keyRefer['value']];
        const name = data[this.keyRefer['label']];
        const model = {[this.keyRefer['value']]: ID, [this.keyRefer['label']]: name}
        //multiple situation
        if (this.multiple) {
          if (checked) {
            if (!this.$Utils.arrContainObj(this.LastCheck, ID)) {
              this.LastCheck.push(ID);
            }
            //model data 数组中不包含 新选中的 对象， 则新加入
            if (!this.$Utils.arrContainObj(this.childTreeData, model)) {
              this.childTreeData.push(model);
            }
            if (!this.$Utils.arrContainObj(this.defaultCheckedkeys, ID)) {
              this.defaultCheckedkeys.push(ID)
            }
          }
          else {
            this.LastCheck = this.LastCheck.filter(item => {
              return item !== ID;
            })
            this.childTreeData = this.childTreeData.filter(item => {
              return item[this.keyRefer['value']] !== ID;
            })
            this.defaultCheckedkeys = this.defaultCheckedkeys.filter(item => {
              return item !== ID;
            })
          }
        }
        //single situation
        else {
          if (checked) {
            this.LastCheck = ID;
            //设定相关model值
            this.childTreeData = model;
            this.defaultCheckedkeys = [ID];
          }
          else {
            //点击取消选中 上一次操作点击的节点的情况
            if (ID === this.LastCheck) {
              this.clearStatusData();//clear all status data
            }
          }
        }
      },


      /**
       * watch model data change
       * @param newValue       model-data
       */
      watchModel(newValue) {
        console.log('监听变化 teee  --- childTreeData');
        console.log(newValue);
        //when tree model data not have value
        if (!newValue || newValue === []) {
          this.clearStatusData();
        }
        else {
          const v = this.keyRefer['value'];
          //multiple situation
          if (this.multiple) {
            console.log('multiple')
            this.defaultCheckedkeys = [];
            newValue.forEach(item => {
              this.defaultCheckedkeys.push(item[v]);
            })
          }
          //single situation
          else {
            console.log('single')
            this.defaultCheckedkeys = [newValue[v]];
          }
        }
      },

      //clear all status data
      clearStatusData() {
        this.childTreeData = this.multiple ? [] : {};//清除modelData 值
        this.defaultCheckedkeys = [];//清除 默认选中值
        this.LastCheck = '';
      }
    },
    props: {
      fatherTreeData: {
        type: [Object, Array, String, Number], default: function () {
          //根据 multiple 值判断是     多选 => [] 还是 单选 => ''
          return this.multiple ? [] : '';
        }
      },
      multiple: {type: Boolean, default: false},
      keyRefer: {
        type: Object, default: function () {
          return {
            level: "level",
            label: "label",//分类 名称
            value: "value",//分类 ID
            children: "children",//子集分类分类 名称
          }
        }
      }
    },
    model: {
      prop: 'fatherTreeData',
      event: 'change'
    },
    watch: {
      defaultCheckedkeys(value) {
        console.log('监听变化 --- defaultCheckedkeys');
        this.$refs.roleBaseTree.setCheckedKeys(this.defaultCheckedkeys);
      },
      childTreeData: {
        handler(newValue, oldValue) {
          this.watchModel(newValue);
          this.$emit('change', this.childTreeData);
        },
        deep: true    //深度监听
      },
      fatherTreeData() {
        this.childTreeData = this.fatherTreeData;
      },
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss">
  //tree modules
  .el-tree.cx-simple__tree {
    width: 100%;
    border: none;
  }
</style>
