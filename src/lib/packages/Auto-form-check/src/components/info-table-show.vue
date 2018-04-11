<template>
  <div class="info-table-show">
    <el-table :data="childTable.fields" :border="border" style="width: 100%">
      <!--circulation part-->
      <div v-for="(item,index) in tableHeadData" :index="index" :key="index" v-if="tableHead">
        <!-- show index / selection -column -->
        <el-table-column v-if="arrContainObj(specialCol,item.type)" :type="item.type" :label="item.label"
                         :align="item.align" :width="item.width" :fixed="item.fixed"></el-table-column>
        <!-- show handle-column -->
        <el-table-column v-if="arrContainObj(handleCol,item.type)" :label="item.label" :align="item.align" :width="item.width" :fixed="item.fixed">
          <template slot-scope="scope">
            <!--edit-->
            <el-button type="primary" size="medium" v-show="!scope.row.isEdit"
                       @click.native.prevent="tableEdit(scope.$index, scope.row)">编辑
            </el-button>
            <!--complete-->
            <el-button type="success" size="medium" v-show="scope.row.isEdit"
                       @click.native.prevent="editComplete(scope.$index, scope.row)">完成
            </el-button>
            <!--handle-->
            <el-dropdown style="margin-left: 9px">
              <el-button type="primary" size="medium">操作<i class="el-icon-caret-bottom el-icon--right"></i>
              </el-button>
              <!--dropdown handle-->
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native.prevent="handlecheck(scope.$index, scope.row,item)">查看</el-dropdown-item>
                <el-dropdown-item @click.native.prevent="deleteRow(scope.$index, childTable.fields)">删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
        <!-- show other-column -->
        <el-table-column v-if="item.type==='normal'" :align="item.align" :label="item.label" :width="item.width" :fixed="item.fixed">
          <template slot-scope="scope">
            <!--列为字段为 v-model 的列 col-->
            <!--in this col, data in v-model is not same as other, they come from another key object, so you should use key(in table-head)-->
            <!--to grab the value of v-model. For details, see below. -->
            <!--列为字段为 v-model 的列 col-->
            <div class="detailed" v-if="item.model">
              <el-input v-model="childTable.modelData[scope.row[item.key]]" class="detailed-input" placeholder="请输入内容"
                        v-show="scope.row.isEdit" v-if="typeof childTable.modelData[scope.row[item.key]] === 'string'">
              </el-input>
              <!--span-->
              <span class="detailed-text" v-show="!scope.row.isEdit">
              {{childTable.modelData[scope.row[item.key]]}}
              </span>
              <!--magnification display-->
              <div class="detailed-bigger" :class="{'detailed-bigger-top': scope.$index === 0,'no-bigger': scope.row.isEdit}"
                   :style="{'width':item.width +'px'}">
                {{childTable.modelData[scope.row[item.key]] | dataConver(item) }}
              </div>
            </div>
            <!--other col-->
            <div class="detailed" v-else :class="{'detailed-no-bigger': scope.row.isEdit}">
              <!--1、isEdit switch to control data in span or input to show ，in input you can edit, but in span you only to see-->
              <!--2、some format of data are can't to edit ('string', 'number', 'undefined'....) ,-->
              <!--3、you can add disable-format in list ( isEditList )-->
              <el-input v-model="scope.row[item.key]" class="detailed-input" placeholder="请输入内容"
                        v-show="scope.row.isEdit" v-if="whichTypeShow(isEditList,scope.row[item.key])">
              </el-input>
              <!--add class rules:-->
              <!--1、'nullMark': value is not existence, prompt null to developer,some data you should take care ：-->
              <!--（1）'' , ' ' => trim space => judge it-->
              <!--（2）[] => equivalent to null values => judge it-->
              <!--2、'errMark':boolen is False,-->
              <!--3、'successMark':boolen is True-->
              <!--table-show-data rules:-->
              <!--The data in every cell is should to format which we need to show, so call function filter - dataConver,-->
              <!--there is some methods can use:-->
              <!--1、'allToString': other formats convert to string format-->
              <!--2、'nullToCN': null / undefined .... to '无'-->
              <!--.......-->
              <!--you can add other methods in format method (utils/index.js)-->
              <span class="detailed-text" v-show="!scope.row.isEdit || !whichTypeShow(isEditList,scope.row[item.key])"
                    :class="{'nullMark': !judgeShowVal(scope.row[item.key]) ||  scope.row[item.key] === '无',
                            'errMark': scope.row[item.key] === false ,'successMark': scope.row[item.key] === true}">
                {{scope.row[item.key] | dataConver(item)}}
              </span>
              <!--magnification display-->
              <div class="detailed-bigger" :class="{'detailed-bigger-top': scope.$index === 0,'no-bigger': scope.row.isEdit}"
                   :style="{'width':item.width* 1.5 +'px'}">
                {{scope.row[item.key] | dataConver(item)}}
              </div>
            </div>
          </template>
        </el-table-column>
      </div>
    </el-table>
    <!--table - data dialog-->
    <component :is="$SN+'dialog'" title="详细数据信息" width="900px" :visible.sync="dialogVisible">
      <component :is="$SN+'form'" :model="dialogData" class="clear" :inline="true" v-if="dialogData && tableHeadData">
        <component :is="$SN+'muster-item'" v-for="(item,index) in tableHeadData" :index="index" :key="index"
                   item-type="span" v-model=" dialogData[item.key]" :label="item.label+'（'+item.key+'）：'"
                   :labelWidth="350 + 'px'" :width="200" :height="32" :rows="1" :itemWidth="550"
                   v-if="!arrContainObj(specialCol,item.type)&&!arrContainObj(handleCol,item.type)"
        >
        </component>
      </component>
    </component>
  </div>
</template>
<script>
  import {judgeType, isXType, trim, arrContainObj, format} from '../../../../utils/index'

  export default {
    name: '',
    model: {
      prop: 'fatherTable',
      event: 'change'
    },
    data() {
      return {
        //dialog-visible
        dialogVisible: {visible: false},
        dialogData: {},
        //v-model-data
        childTable: {},
        isEdit: false,   //是否编辑
        //handle - drop-data
        dropData: [{label: '查看', command: 'look'}, {label: '删除', command: 'delete'}],
        //whitch type of data can be edit
        isEditList: ['string', 'number', 'undefined'],
        //special-column
        specialCol: ['index', 'selection'],
        //handle-column
        handleCol: ['handle']
      }
    },
    filters: {
//    cell-data in table Conver to format we need
      dataConver(status, item) {
        const converList = item.converFormat;
        let str = status;
        if (converList) {
          if (converList.length > 0) {
            converList.map((item, index) => {
              str = format[item](str);
            })
            return str;
          }
          else {
            return str;
          }
        }
        else {
          return str;
        }
      },
    },
    computed: {
      //judge table-head-data is array or not , otherwise return []
      tableHeadData() {
        return isXType('array', this.tableHead) ? this.tableHead : [];
      },
    },
    props: {
      fatherTable: {type: [Object, Array, String], default: null},
      tableHead: {type: [Object, Array, String]},
      border: {type: Boolean},
    },
    watch: {
      childTable() {
        this.$emit('change', this.childTable)
      },
      fatherTable() {
        this.childTable = this.fatherTable;
      }
    },
    created() {
      this.childTable = this.fatherTable;
    },
    mounted() {

    },
    methods: {
      //trim - string （ 去除空格 ）
      trim(val) {
        return judgeType(val) === 'string' ? trim(val) : val;
      },
      //when the type of data is array, make [] is equivalent to null values,return false
      judgeArrNoLen(arr) {
        return judgeType(arr) === 'array' ? arr.length > 0 ? true : false : arr;
      },
      //judge value is none or not , Number format is not included
      judgeShowVal(val) {
        const getType = Object.prototype.toString.call(val);
        switch (getType) {
          case '[object Object]':
            return val ? true : false;
            break;
          case '[object Boolean]':
            return val ? true : false;
            break;
          case '[object Number]':
            return true;
            break;
          case '[object String]':
            return trim(val) ? true : false;
            break;
          case '[object Array]':
            return val.length > 0 ? true : false;
            break;
          default:
            return val ? true : false;
            break;
        }
      },
      //judge array contain another Obj
      arrContainObj(arr, str) {
        return arrContainObj(arr, str)
      },
      //table - edit function
      tableEdit(index, row) {
        this.$set(row, 'isEdit', true);  //change isEdit status
      },
      //table - edit complete
      editComplete(index, row) {
        this.$set(row, 'isEdit', false);
      },
      //judge which type val should display in table
      whichTypeShow(isEditList, val) {
        const t = typeof(val);
        return this.arrContainObj(isEditList, t)
      },
      //handlecheck
      handlecheck(index, rows) {
        this.dialogData = rows;
        //open table - dialog
        this.$set(this.dialogVisible, 'visible', true);
      },
      //handle Delete
      deleteRow(index, rows) {
        this.$confirm('确认要删除吗？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '返回',
          type: 'warning'
        }).then(() => {
          rows.splice(index, 1);
        }).catch(() => {
          return false;
        });
      }
    },
  }
</script>
<style rel="stylesheet/less" lang="scss">
  @import "../style/info-table-show";
</style>
