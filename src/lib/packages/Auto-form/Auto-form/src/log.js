import {log} from '../../../../utils/index'
// import * as store from '@/utils/nsQuery/nsStore';
// import $store from '../../../../store/index'

class Loginfo {
  /**
   * remote data request log
   * @param type
   * @param vm
   * @param requireData
   */
  remote(type, vm, requireData) {
    this.local(type, vm);
    console.log('%c5、自动表单请求头部信息如下：', log.logStyle('info'))
    const headers = vm.$CX.formController.get(vm, vm.autoFormID, 'headers');
    console.info(headers);
    console.log('%c============', log.logStyle('line'));
  }

  /**
   * local data request log
   * @param type
   * @param vm
   */
  local(type, vm) {
    console.log("%c\n## 自动表单信息 ##\n", log.logStyle('3DTest'));
    console.log('%c========================', log.logStyle('tit'));
    const logSw = vm.$former.log;
    console.log('%c1、自动表单总信息显示开关状态: ' + `${logSw ? '开启' : '关闭'}`, log.logStyle('info'));
    console.log('%c2、自动表单主体数据来源（服务端/本地):', log.logStyle('info'));
    console.info(`主体数据来源: %c${type}`, log.logStyle('info'));

    console.log('%c3、自动表单ID值：', log.logStyle('info'));
    console.log('%c' + vm.autoFormID, log.logStyle('text'));


    console.log('%c4、已经存储当前表单的实例对象：', log.logStyle('info'));
    // console.log(store.vm.get(vm.autoFormID));
    console.log('%c============', log.logStyle('line'));
  }

  /**
   * data check log
   * @param vm
   */
  dataCheck(vm) {
    if (vm.isCheck) {
      console.log('%c==== 数据检测完毕完毕: ====', log.logStyle('tit'))
      console.log('%c错误信息列表数据：', log.logStyle('info'));
      console.log(vm.dataCheckResult);
      const len = vm.dataCheckResult.length
      len > 0 ? console.log('%c6、有' + len + '个错误信息，请查看修改', log.logStyle('warning')) : console.log('%c没有错误信息，数据正常', log.logStyle('success'));
    }
    else {
      console.log('%c9、数据检测关闭，如需开启检测，请在表单标签中添加 is-Check 标签', log.logStyle('info'));
    }
    console.log('%c========================', log.logStyle('tit'));
  }

  /**
   * data getted log
   * @param data
   */
  datagetted(data) {
    console.log('%c====== 自动表单数据获取成功 ======', log.logStyle('success'));
    console.log('%c6、自动表单数据如下：', log.logStyle('info'));
    console.info(data);
    // console.log(JSON.stringify(data, null, 4));
    console.log('%c============', log.logStyle('line'));
  }

  /**
   * data after request handle
   * @param data
   */
  afterRequest(data) {
    console.log('%c7、数据获取进行二次操作后的数据如下:', log.logStyle('info'));
    console.info(data);
    // console.log(JSON.stringify(data, null, 4));
    console.log('%c8、表单初始 modelData 数据如下:', log.logStyle('info'));
    // console.info($store.state.Form.control.initModelData);
    console.log('%c============', log.logStyle('line'));
  }
}

export default new Loginfo();


