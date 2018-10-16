// import $store from '@/store/index'
import {getsRemoteSelectOption} from '../../../../api/select/remote-select'

/**
 * base remote request
 * @param vm          this
 * @param url         equest url
 * @param params      equest params
 * @param cb          callback
 */
export function request(vm, url, params, cb) {
  // console.log('slect - 远程搜索请求参数如下：');
  // console.log(url)
  // console.log(params);
  vm.loading = true;
  setTimeout(() => {
    getsRemoteSelectOption(url, params)
      .then(res => {
          console.log('slect - 远程搜索获取参数如下：');
          console.log(res.resultData);
          vm.remoteList = res.resultData;//store remote request data list
          cb(res.resultData);
          vm.loading = false;
        }
      ).catch(err => {
      return Promise.reject(err);
      vm.options = vm.items;

    })
  }, 200);
}

/**
 * choice one remote-method to request data (base on business)
 * @param vm                this
 * @param type              business type
 * @param url               request url
 * @param query             one of request query (remote value)
 */
export function choiceRemoteMethod(vm, type, url, query) {
  if (type === 'customerSearch') {
    request(vm, url, query, res => {
      vm.options = setRemoteOption(res);//set remote option
    });
  }
  else if (type === 'template') {
    request(vm, url, query, res => {
      vm.options = res;//set remote option
    });
  }
  else {
    return;
  }
}

/**
 * set remote option
 * @param resList
 * @returns {Array}
 */
export function setRemoteOption(resList) {
  let remoteOption = [];
  resList.map((item) => {
    remoteOption.push({"label": item.ownerName, "value": item.ownerId, "disabled": false})
  });
  return remoteOption;
}


//customer-info business
export const customerInfo = {
  /**
   * store customer-info to vuex
   * @param type             business type
   * @param remoteList       request remote List
   * @param value            change calue
   */
  store: (type, remoteList, value) => {
    if (type === 'customerSearch') {
      // $store.dispatch('customerSearchInfo', {type: 'empty'});
      remoteList.map((item, index) => {
        if (item.ownerId === value) {
          console.log('存入了!!!!!!!!!!')
          // $store.dispatch('customerSearchInfo', {type: 'set', query: item});
        }
      })
    }
  }
};
