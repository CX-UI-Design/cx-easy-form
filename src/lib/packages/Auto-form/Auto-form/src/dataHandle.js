import {isEmpty, deepClone} from '../../../../utils/index'

import {autoForm} from '../../../../api/component/auto-form';//require auto form data API
import autoFormResCheck from '../../../Auto-form-check/src/methods/res-check';//data check methods
import loginfo from './log';//require auto form data API


let vm, requireData = null;

/**
 * log - descriptor
 * @param type
 * @returns {Function}
 */
let log = (type) => {
  return function (target, name, descriptor) {
    let fomrLog = descriptor.value;
    descriptor.value = (...arg) => {
      fomrLog.apply(target, arg);
      /* check whether there is a Vue sample object */
      if (!vm) return;
      /* if the information switch is turned on, the broadcast information display function is also turned on,
      * you can see the console information about auto form */
      if (!vm.$former.log) return;
      /* broadcast information based on type */
      switch (type) {
        case 'remote':
          loginfo.remote(type, vm, requireData);
          break;
        case 'local':
          loginfo.local(type, vm);
          break;
        case 'dataCheck':
          loginfo.dataCheck(vm);
        default:
          break;
      }
    }
  }
}

class dataProject {
  @log('remote')
  /**
   * request data for auto-form  (funcId / interpreter to head, query in params)
   * @param requireData
   * @param cb
   */
  remote(requireData, cb) {
    autoForm(requireData.url, requireData.head, requireData.query)
      .then(response => {
        cb(response.resultData);
      }).catch(response => {
      console.log('表单数据请求失败！！');
      return Promise.reject(response);
    });
  }

  @log('local')
  /**
   * request loacl-data
   * @param localdata
   * @param cb
   */
  local(localdata, cb) {
    cb(localdata);
  }

  @log('dataCheck')
  /**
   * check auto-form data
   * @param vm
   * @param data
   * @param isCheck   check data switch
   */
  dataCheck(vm, data, isCheck) {
    if (data && isCheck) {
      //表单各条目数据展示模块
      vm.formDataShow = JSON.parse(JSON.stringify(data));//assign 'formData' to 'formDataShow' by deep copy.
      //错误数据条目列表
      vm.dataCheckResult = autoFormResCheck(data, vm.autoFormID);//output detection results List
      //open table - dialog
      vm.$set(vm.dialogVisible, 'visible', true);
    }
  }
}

let dp = new dataProject()

/**
 * Loading auto-form data
 * @param _t              this vm
 * @constructor
 */
const LoadingData = (Vue) => {
  vm = Vue;                  //Use the incoming Vue assignment to vm
  Vue.loading = true;
  //set autp-form request Id ( 设置 当前自定义表单请求的ID值 )
  Vue.$CX.currentRequestFormID.set(Vue, Vue.autoFormID);
  //存储当前表单组件的vue实例
  Vue.$CX.formerVm.set(Vue, Vue.autoFormID, Vue);
  //本地数据和本地数据格式内容符合要求（不为空，''，{}，[]....）
  if (Vue.isLocal) {
    if (!isEmpty(Vue.localData)) {
      dp.local(Vue.localData, (localdata) => {
        Vue.formData = localdata;
      });
      _decorate(Vue);//other handle for auto-form
    }
  }
  else {
    //require data
    requireData = {
      url: Vue.requestUrl,
      query: Vue.query,
      head: Vue.$CX.formController.get(Vue, Vue.autoFormID, 'headers'),//interpreter
      // head: {
      //   funcId: Vue.$CX.funcId.get(), //funcId
      //   interpreter: Vue.$CX.formController.get(Vue.autoFormID, 'interpreter'),//interpreter
      //   formOperateType: Vue.$CX.formController.get(Vue.autoFormID, 'formOperateType'),//formOperateType
      // }
    }
    dp.remote(requireData, (res) => {
      Vue.formData = res;
      _decorate(Vue);//other handle for auto-form
    });
  }

  /**
   * other handle for auto-form
   * @param vm
   * @private
   */
  function _decorate(vm) {

    /* if the information switch is turned on, the broadcast information display function is also turned on,
     * you can see the console information about auto form */
    if (vm.$former.log) {
      loginfo.datagetted(vm.formData); //log information after data getted
    }
    ;

    // console.log('处理前的modelData');
    // console.log(vm.formData.modelData);
    //请求数据成功后的外置操作处理数据
    vm.$emit('afterRequest', vm, vm.formData);
    // console.log('处理后的modelData');
    // console.log(vm.formData.modelData);


    //自动表单初始化 model-data 数据存储
    // const initModelData = deepClone(vm.formData.modelData);
    // vm.$store.dispatch('initModelDataStore', initModelData);
    // console.log('存入的modelData值')
    // console.log(initModelData)

    /* if the information switch is turned on, the broadcast information display function is also turned on,
    * you can see the console information about auto form */
    if (vm.$former.log) {
      loginfo.afterRequest(vm.formData);//log information after second handle
    }
    ;

    //check data
    dp.dataCheck(vm, vm.formData, vm.isCheck);
    //other auto-form element control switch operation
    vm.itemsRender = true;
    vm.loading = false;
  }
}

export default LoadingData;
