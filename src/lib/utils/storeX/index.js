/*
 * auxiliary for Vue
 * With the wrapper function below, you can use the Vue extension function more quickly
 * created: 2017/7/3.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
import {judgeType, isXType} from '../index'
import tableHeadMap from '../../staticData/table-head';
import {autoFormSubmit} from '../../api/auto-form/auto-form';

/**
 * create params for validate/reset
 * @param vm                  this vm is sample object whitch use it (in this ,it's )
 * @param formName
 * @returns {{vm, formData, formName: *}}
 */
function _createParams(vm, formName) {
  const VM = CX.autoForm.formerVm.get(vm, formName);
  return {
    vm: VM,                               //vue
    formData: VM.formData,                //formData
    formName: formName                    //form name
  }
}

const CX = {
  //request
  requestHead: {
    head: {},
    set: function (data) {
      this.head = data;
    },
    get: function () {
      return this.head;
    }
  },
  //form methods
  autoForm: {
    // form vue
    formerVm: {
      set: function (Vue, ID, query) {
        Vue.$store.dispatch('formerVmHandle', {type: 'set', ID: ID, query: query});
      },
      get: function (Vue, ID) {
        let getVal = null;
        const vmList = Vue.$store.state.Form.store.formerVm;
        if (vmList.length > 0) {
          vmList.map((item, index) => {
            if (item.hasOwnProperty(ID)) {
              getVal = item[ID]
            }
          })
        }
        return getVal;
      },
      //counter reduce
      delete: function (Vue, ID) {
        Vue.$store.dispatch('formerVmHandle', {type: 'delete', ID: ID});
      },
      //return to zero
      empty: function (Vue) {
        Vue.$store.dispatch('formerVmHandle', {type: 'empty'});
      },
    },
    //set form ID whitch is request
    currentRequestFormID: {
      set: function (Vue, ID) {
        Vue.$store.dispatch('currentRequestFormID', ID);
      },
      get: function (Vue) {
        return Vue.$store.state.Form.store.requestFormId;
      },
    },
    /**
     * get table-head data from local static data
     * @param name          //table-head-name(key) && the value of this table'area-linkage v-model
     */
    getTableHead: (name) => {
      if (judgeType(name) !== 'string') return;
      const data = tableHeadMap;
      return data[name];
    },
    // form - controller
    formController: {
      //set the value of the field under a specific object
      set: function (Vue, ID, query) {
        if (judgeType(query) !== 'object') {
          throw('The function of formController - set have two params (ID and query), ID is String format, ' +
            'query should be Object format (not arrary), you better find it');
        }
        Vue.$store.dispatch('setFormController', {
          type: 'set',
          ID: ID,
          query: query
        });
      },
      //get the value of the field under a specific object
      get: function (Vue, ID, Key) {
        if (!isXType('string', ID) || !isXType('string', ID)) {
          throw('The function of formController - get have two params (ID and Key), ID and Key is String format, you better find it');
        }
        let getVal = null;
        const ControllerList = Vue.$store.state.Form.control.formController;
        if (ControllerList.length > 0) {
          ControllerList.map((item, index) => {
            if (item.hasOwnProperty(ID)) {
              if (item[ID].hasOwnProperty(Key)) {
                getVal = item[ID][Key]
              }
            }
          })
        }
        return getVal;
      },
      //delete one info
      delete: function (Vue, ID) {
        if (judgeType(ID) !== 'string') {
          throw('The function of formController - delete only one params (ID), ID is String format, you better find it');
        }
        Vue.$store.dispatch('setFormController', {
          type: 'delete',
          ID: ID,
        });
      },
      //empty all
      empty: function (Vue) {
        Vue.$store.dispatch('setFormController', {
          type: 'empty'
        });
      }
    },
    /**
     * auto-form submit
     * @param url
     * @param query
     * @param cb       success callback function
     */
    submit: (url, query, cb) => {
      autoFormSubmit(url, query, cb)
        .then(response => {
          console.log('表单提交成功！！');
          console.log(response);
          cb(response.resultData);
        }).catch(response => {
        return Promise.reject(response);
      })
    },

    /**
     * 校验特定范围内是否所有表单元素都通过验证  vaildate
     * @param range
     * @param target
     * @returns {boolean}
     */
    checkRange: (range, target) => {
      const t = range + ' ' + target;
      const allError = document.querySelectorAll(t);
      return !allError.length > 0;
    },

    /**
     * validate
     * @param vm
     * @param formName
     */
    validate: (vm, formName) => {
      return new Promise((resolve, reject) => {
        try {
          let cp = _createParams(vm, formName);
          console.log('提交数据如下：');
          console.log(cp.formData.modelData);
          console.log(JSON.stringify(cp.formData.modelData, null, 4));
          /* start validate */
          cp.vm.$refs[formName].validate((valid) => {
            //表单提交添加'all-check' 标识到checkList中，开启第一级验证开关（即对所有自定义验证的表单进行验证）。
            cp.vm.$store.dispatch('setCustomCheck', 'all-check');   //多张表单 存在bug
            //start validate
            if (valid && vm[vm.$CXFnName].autoForm.checkRange('.cx-auto-form-container', '.cx-is-error')) {
              console.log('表单验证成功');
              resolve(cp);
            }
            else {
              console.log('表单验证失败');
              reject();
            }
          })
        }
        catch (e) {
          // statements to handle any exceptions
          throw 'Please check the automatic form validation method. There are some errors in the internal code.'
        }
      })
    },

    /**
     * auto form reset
     * @param vm
     * @param formName
     */
    resetForm: (vm, formName) => {
      return new Promise((resolve, reject) => {
        const cp = _createParams(vm, formName);
        //element base reset function
        cp.vm.$refs[formName].resetFields();
        cp.vm.$store.dispatch('setCustomCheck', 'no-check');
        console.log('表单重置成功（el-reset + custom-reset）');
        resolve(cp);
      })
    },
    /**
     * element base reset function
     * @param vm
     * @param formName
     */
    elResetForm(vm, formName) {
      return new Promise((resolve) => {
        const cp = _createParams(vm, formName);
        cp.vm.$refs[formName].resetFields();
        console.log('表单重置成功（el-reset + custom-reset）');
        resolve(cp);
      })
    },

  },

}
export default CX;

