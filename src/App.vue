<template>
  <div id="app">
    <div class="show-modules">
      <el-button :type="!dialogVisible.visible?'success':'danger'" @click.native.prevent="toggleDialog">
        {{!dialogVisible.visible ? '打开' + title : '关闭' + title}}
      </el-button>
    </div>
    <cx-dialog :title="'自动表单-'+title" width="900px" :visible.sync="dialogVisible" :close-on-click-modal="true">
      <cx-auto-form autoFormID="template-auto-form"
                    submit-url="cx/form/submit"
                    :isLocal="true"
                    :localData="localData"
                    :cover-data="coverData"
                    cue-type="only-error"
                    :isCheck="false"
                    @afterRequest="afterRequest"
      >
        <div slot="operation" >
          <cx-auto-form-operation type="form" :buttonInfo="buttonInfo1" autoFormID="template-auto-form"></cx-auto-form-operation>
        </div>
      </cx-auto-form>

      <div slot="footer">
      </div>
    </cx-dialog>
  </div>
</template>

<script>
  import pickerOptionsMap from './static-data/form/picker-options'
  import test from './static-data/form/temple'

  export default {
    name: 'App',
    data() {
      return {
        checkboxModel1: true,
        title: '测试演示自动表单',
        dialogVisible: {visible: true}, //dialog-visible
        localData: test,//表单渲染本地数据
        submitUrl: 'cx/form/submit',//表单提交地址
        //表单按钮信息
        buttonInfo1: [
          {funcType: 'submit', style: 'primary', code: 'formConfirmBtn', name: '确定', areaType: 'FORM', btnType: 'single', coerciveShow: true, event: this.autoFormSubmit},
          {funcType: 'custom', style: '', code: 'formCancelBtn', name: '取消', areaType: 'FORM', btnType: 'single', coerciveShow: true, event: this.autoFormCancel},
        ],
        buttonInfo2: [
          {name: '确定', style: 'primary', event: this.autoFormSubmit},
          {name: '取消', style: '', event: this.autoFormCancel},
        ],
        dataListHead: this.$CX.autoForm.getTableHead('autoFormTest_DataList'),//the table-head of auto-form data list show

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
          //覆盖属性-绑定事件
          resourcefieldBindingfnList: {
            sex: (params) => {
//              const webVm = store.vm.get('customerManagement');
              alert(params.type);
              if (params.type === 'change' && params.type !== 'visibleChange') {
                const val = params.formData.modelData[params.modelKey]
                alert(val);
                if (val === '0') {

                }
                if (val === '1') {

                }
              }
            }
          },
        },
      }
    },
    created() {
      this.createForm();
    },
    methods: {
      //创建表单
      createForm() {
        this.$CX.autoForm.formController.set(this, 'template-auto-form', {
          show: true,
          headers: {
            funcId: 'funcId', //funcId
            interpreter: 'interpreter',//interpreter
            formOperateType: 'formOperateType',//formOperateType
          }
        });
      },
      //自动表单请求获取数据 之后 操作
      afterRequest(vm, data) {
        //..............................  逻辑代码书写
//        console.log('afterRequest');
//        console.log(data);
      },
      /**
       * auto-form submit  ( 提交按钮事件操作 )
       * @param vm
       * @param formName       button-info
       */
      autoFormSubmit(vm, formName) {
        this.$CX.autoForm.validate(vm, formName).then(
          params => {
            //..............................  逻辑代码书写
            const query = params.formData.modelData;
            //submit request
            this.$CX.autoForm.submit(this.submitUrl, query, () => {
              //..............................  逻辑代码书写
              this.$message({message: '保存成功', type: 'success', duration: 2000});
              this.$set(this.dialogVisible, 'visible', false);
              this.$CX.autoForm.formController.delete(this, 'template-auto-form');
            })
          }
        ).catch(err => {
            console.log(err)
          }
        )
      },
      /**
       * auto-form Cancel  ( 取消按钮事件操作 )
       * @param vm
       * @param formName       button-info
       */
      autoFormCancel(vm, formName) {
        this.$CX.autoForm.resetForm(vm, formName).then(
          params => {
            this.$set(this.dialogVisible, 'visible', false);
            this.$CX.autoForm.formController.delete(this, 'template-auto-form');
          }
        )
      },


      toggleDialog() {
        this.dialogVisible.visible = !this.dialogVisible.visible;
        if (this.dialogVisible.visible) {
          this.createForm();
        }
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin-top: 60px;
    .show-modules {
      text-align: center;
      margin-top: 50px;
    }
  }
</style>
