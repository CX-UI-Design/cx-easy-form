<template>
  <div id="app">
    <gcx-auto-form autoFormID="template-auto-form"
                   :isLocal="true"
                   :localData="localData"
                   :cover-data="coverData"
                   cue-type="only-error"
                   :isCheck="false"
                   @afterRequest="afterRequest"
    ></gcx-auto-form>
  </div>
</template>

<script>
  import pickerOptionsMap from './static-data/form/picker-options'
//  import test from './static-data/form/test'
  import test from './static-data/form/xinjiaru'

  export default {
    name: 'App',
    data() {
      return {
        localData: test,
        autoFormocaldata: {},
        dataListHead: this.$CX.getTableHead('autoFormTest_DataList'),//the table-head of auto-form data list show

        /* ===================== 覆盖/补充自动表单数据：=====================
       书写格式：{
             xxx（属性名称）：{
                 formitemkey（表单元素字段名，同v-model字段名一致） ： value （值）
             }
       }
       * =================================================================
       */
        coverData: {
          pickerOptions: {
            birthday: pickerOptionsMap['date-point'].birthday,
          },
          resourcefieldColspan: {
            searchInfo: 2   //覆盖改变 - 搜索信息字段的组件 所占列数为2
          },
          fieldWidth: {
            searchInfo: 700 //覆盖改变 - 搜索信息字段的组件 宽度为700
          },
          tableHead: {mainHouseList: 'autoFormTest'},
        },
      }
    },
    created() {
      this.$CX.formController.set(this, 'template-auto-form', {
        show: true,
        headers: {
          funcId: 'funcId', //funcId
          interpreter: 'interpreter',//interpreter
          formOperateType: 'formOperateType',//formOperateType
        }
      });

    },
    methods: {
      //自动表单请求获取数据 之后 操作
      afterRequest(vm, data) {
        //..............................  逻辑代码书写
//        console.log('afterRequest');
//        console.log(data);
      },
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
  }
</style>
