<template>
  <el-table
    class="cx-base-table"
    :class="{'error-table-head': errorHead}"
    :data="childTable"
    :showIndex="showIndex"
    :showSelect="showSelect"
    border fit
    highlight-current-row
    v-if="tableHead"
  >
    <!--circulation part-->
    <div v-for="(item,index) in createTableHead" :index="index" :key="index" v-if="tableHead">
      <!-- show index / selection -column -->
      <el-table-column v-if="arrContainObj(specialCol,item.type)" :type="item.type" :label="item.label"
                       :align="item.align" :width="item.width" :fixed="item.fixed"></el-table-column>
      <!-- other-column -->
      <el-table-column :type="item.type" :align="item.align" :label="item.label" :width="item.width" :fixed="item.fixed" v-if="item.type==='normal'">
        <template slot-scope="scope">
          <!--span-->
          <div class="cx-simple-item" v-if="item.formItemData[scope.$index].formType === 'text'">
            <component :is="$SN+'text'" :width="item.width - cellpading*2" :height="item.formItemData[scope.$index].height"
                       :content="scope.row[item.key]" :type="item.formItemData[scope.$index].type"
            ></component>
          </div>
          <!--input-->
          <div :class="['cx-simple-item',{'cx-is-error':!customCheck(scope,item)},{'validating':isValidating(scope,item)}]"
               v-if="item.formItemData[scope.$index].formType === 'input'"
          >
            <component :is="$SN+'input'"
                       v-model="scope.row[item.key]"
                       :type="item.formItemData[scope.$index].type"
                       :placeholder="item.formItemData[scope.$index].placeholder"
                       :disabled="item.formItemData[scope.$index].disabled"
                       :readonly="item.formItemData[scope.$index].readonly"
                       :row="item.formItemData[scope.$index].row"
                       :width="item.width - cellpading*2"
                       :height="item.formItemData[scope.$index].height"
                       @change="change(scope,item)"
                       @blur="blur(scope,item)"
            ></component>
            <div class="el-form-item__error base-formtable__error">{{item.formItemData[scope.$index].requiredMsg}}</div>
          </div>
          <!--select-->
          <div :class="['cx-simple-item',{'cx-is-error':!customCheck(scope,item)},{'validating':isValidating(scope,item)}]"
               v-if="item.formItemData[scope.$index].formType === 'select'"
          >
            <component :is="$SN+'select'"
                       v-model="scope.row[item.key]"
                       :type="item.formItemData[scope.$index].type"
                       :placeholder="item.formItemData[scope.$index].placeholder"
                       :disabled="item.formItemData[scope.$index].disabled"
                       :readonly="item.formItemData[scope.$index].readonly"
                       :min="item.formItemData[scope.$index].min"
                       :max="item.formItemData[scope.$index].max"
                       :row="item.formItemData[scope.$index].row"
                       :items="item.formItemData[scope.$index].items"
                       :width="item.width - cellpading*2"
                       :height="item.formItemData[scope.$index].height"
            ></component>
            <div class="el-form-item__error base-formtable__errorr">{{item.formItemData[scope.$index].requiredMsg}}</div>
          </div>
        </template>
      </el-table-column>
    </div>
  </el-table>
</template>
<script>
  import validateRule from '../../../../utils/validate/validate-rule';

  export default {
    name: 'default-base-table',
    data() {
      return {
        childTable: {}, //v-modle
        specialCol: ['index', 'selection'], //special-column
        handleCol: ['handle'], //handle-column
        cellpading: 18, //表单单元格 .cell 左右paddig 间隙
        errorHead: false,  //error table-head data sign
      }
    },
    computed: {
      /*表头数据来源：
      1、若传入参数tableHead的数据格式为'string'时，则启用方法getTableHead，获取本地表头数据
      2、若传入参数tableHead的数据格式为'array'时，则说明传入的数据对象格式符合本封装组件的要求（内部具体所需字段不明），直接启用此数据即可
      */
      //table-head-data handle
      getTableHead() {
        const tb = this.tableHead;
        //表头是字符串格式
        if (typeof tb === 'string') {
          const head = this[this.$CXFnName].autoForm.getTableHead(tb);
          if (this.$Utils.judgeType(head) === 'array') {
            return head;
          }
          else {
            this.errorHead = true;
            throw("We can't find head-data for table, or the format of table-data must be Array ，you better find it");
          }
        }
        //表头是数组格式
        else if (this.$Utils.judgeType(tb) === 'array') {
          return tb;
        }
        //表头是其他格式
        else {
          this.errorHead = true;
          return [];
        }
      },
      //create new table-Head ( handle do some thing  / cover data )
      createTableHead() {
        const tableHead = this.getTableHead;  //table-head data
        const TI = this.tableItems;           //cover table-head-item (resultData => tableItems) form backend
        if (!TI || TI === [] || TI === {} || TI === '') { //have no table-head-item or it is not right format/value we need
          return tableHead;
        }
        else {
          if (TI && this.$Utils.isXType('array', TI)) {
            //check format => throw error
            function _formatErr(obj, key) {
              if (!obj.hasOwnProperty(key)) {
                this.$Utils.error.throw('the format of table-head-item data (resultData => tableItems) form backend is error, miss key ' + key + '， find it')
              }
            }

            //循环 tableItems in resault-data
            for (let i = 0; i < TI.length; i++) {
              _formatErr(TI[i], "key");//check
              const modelKey = TI[i].key;  //model-key in table-head
              //循环 table-head
              for (let j = 0; j < tableHead.length; j++) {
                //对应锁定列（通过每列的 model-key ）
                if (modelKey === tableHead[j].key) {
                  _formatErr(TI[i], "formItemData");//check
                  const formItemData = TI[i].formItemData;//动态数据对应 "formItemData"
                  //循环插入的table-items 中每项的formItemData
                  for (let k = 0; k < formItemData.length; k++) {
                    _formatErr(formItemData[k], "index");//check
                    //为本地静态资源数据 tableHead 中所对应字段（ 定位到列，通过key ）的指定表单控件（ 定位到行，通过index ），增加显示内容items
                    tableHead[j].formItemData[parseInt(formItemData[k].index)].items = formItemData[k].items;
                  }
                }
              }
            }
            return tableHead;
          }
          else {
            this.$Utils.error.throw('the format of table-head-item (resultData => tableItems) form backend should be arrary, find it')
          }
        }
      }
    },
    model: {
      prop: 'fatherTable',
      event: 'change'
    },
    created() {
      //destroy customCheck list first all
      this.$store.dispatch('setCustomCheck', 'no-check');
      this.childTable = this.fatherTable;
    },
    watch: {
      childTable() {
        this.$emit('change', this.childTable)
      },
      fatherTable() {
        this.childTable = this.fatherTable;
      }
    },
    props: {
      fatherTable: Array,//father v-model value
      showIndex: {type: Boolean, default: false},//is show index col
      showSelect: {type: Boolean, default: false},//is show select col
      tableHead: {type: [Object, Array, String]},//table-head
      tableItems: {type: [Object, Array], defalut: []},  //table-packages-items ( the packages whitch need load items )
    },
    methods: {
      //judge array contain another Obj
      arrContainObj(arr, str) {
        return this.$Utils.arrContainObj(arr, str)
      },
      //get param (required,ruleType from formData / checkList form vuex / checkKey = item.key + '-' + scope.$index)
      getParam(scope, item) {
        const Param = {
          required: item.formItemData[scope.$index].required, //is required
          ruleType: item.formItemData[scope.$index].ruleType,//rule-type
          checkList: this.$store.state.Form.check.checkList, //check list
          checkKey: item.key + '-' + scope.$index,           //check-key for form part in check list
        }
        return Param
      },
      /**
       * custom check by call validate-rule fnction
       * @param scope
       * @param item
       * @param isRuleType          is have rule-type to validate
       * @returns {boolean}
       */
      customCheck(scope, item) {
        const checkList = this.getParam(scope, item).checkList;
        const checkKey = this.getParam(scope, item).checkKey
        const val = scope.row[item.key];
        const ruleType = this.getParam(scope, item).ruleType;
        this.getParam(scope, item);
        return this.$Utils.arrContainObj(checkList, checkKey) ||
        this.$Utils.arrContainObj(checkList, 'all-check') ?
          this.getParam(scope, item).required ?
            val ? ruleType ? validateRule(val, ruleType) ? true : false : true : false :
            ruleType ? validateRule(val, ruleType) ? true : false :
              true :
          true;
      },
      /**
       * judge isValidating 判断是否处在验证激活状态
       * @param scope
       * @param item
       * @returns {boolean}
       */
      isValidating(scope, item) {
        const checkList = this.getParam(scope, item).checkList;
        if (this.getParam(scope, item).required || this.getParam(scope, item).ruleType) {
          return this.$Utils.arrContainObj(checkList, this.getParam(scope, item).checkKey) ||
          this.$Utils.arrContainObj(checkList, 'all-check') ?
            true : false;
        }
        else {
          return false;
        }
      },

      //change function
      change(scope, item) {
        if (this.getParam(scope, item).required || this.getParam(scope, item).ruleType) {
          this.$store.dispatch('setCustomCheck', item.key + '-' + scope.$index);
        }
      },
      //blur function
      blur(scope, item) {
        if (this.getParam(scope, item).required || this.getParam(scope, item).ruleType) {
          this.$store.dispatch('setCustomCheck', item.key + '-' + scope.$index);
        }
      }
    },
    beforeDestroy: function () {
      this.$store.dispatch('setCustomCheck', 'no-check');  //destroy customCheck list
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
