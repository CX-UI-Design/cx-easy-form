<template>
  <el-table class="res-check" :data="tableData" border style="width: 100%">
    <!--circulation part-->
    <div v-for="(item,index) in tableHead" :index="index" :key="index" v-if="tableHead">
      <!-- show index / selection -column -->
      <el-table-column v-if="arrContainObj(specialCol,item.type)" :type="item.type" :label="item.label"
                       :align="item.align" ::min-width="item.width" :fixed="item.fixed"></el-table-column>
      <!-- show other-column -->
      <el-table-column v-if="item.type==='normal'" :align="item.align" :label="item.label" :min-width="item.width" :fixed="item.fixed">
        <template slot-scope="scope">
          <span :class="['detailed-text',colClass(index)]">{{scope.row[item.key]}}</span>
        </template>
      </el-table-column>
    </div>
  </el-table>
</template>

<script>
  import {arrContainObj} from '../../../../utils/index'
  import resCheckTH from '../methods/resCheckTH';

  export default {
    name: 'res-check',
    props: {
      tableData: {type: Array},
      border: {type: Boolean},
    },
    data() {
      return {
        tableHead: resCheckTH,
        //special-column
        specialCol: ['index', 'selection'],
      }
    },
    created() {

    },
    methods: {
      //judge array contain another Obj
      arrContainObj(arr, str) {
        return arrContainObj(arr, str)
      },
      //add class by col index
      colClass(index) {
        return 'res-check-col' + index;
      }
    }
  }
</script>
<style rel="stylesheet/less" lang="scss">
 @import "../style/res-check";
</style>

