import {arrContainObj, error} from '../../utils/index'
/*ns 封装表单 - 自动验证：
在 cx-simple-item 的 标签上凡是带有'cx-is-error'类名的为错误标识，激活错误标识有如下说明
1、必填开关开启：required = true && checkList 含有值（ 当前表单key值 + 序号值 ），不满足情况
2、必填开关开启：required = true && checkList 含有值（ 当前表单key值 + 序号值 ），满足情况，但是，表单内容不符合验证要求
3、表单整体提交触发以上2点不符合要求，表单提交更改 checkList 含有 'all-check'，可开启第一级验证开关。
4、失焦/改变 验证 时，更改 checkList = 符合当前表单key值+序号值，可开启第一级验证开关。
5、清空重置表单时，只需设置 checkList = []即可（传入值为 'no-check' ）
5、详情参见代码。
*/
const form = {
  state: {
    check: {
      checkList: [],  //自定义验证，对象列表
    },
    control: {
      formController: [],
      counter: [],
    },
    store: {
      formerVm: [],  //this vue living
      requestFormId: '', //当前自定义表单请求的ID值
      initModelData: {},//自动表单初始化 model-data 数据
    }
  },
  mutations: {
    //设置 自定义表单控件验证的开关标识
    SETCUSTOMCHECK: (state, data) => {
      if (data === 'no-check') {
        state.check.checkList = [];
      }
      else {
        if (!arrContainObj(state.check.checkList, data)) {
          state.check.checkList.push(data);
        }
      }
    },
    //设置 自动表单控制器（包括显隐值等一些字段及所属值）
    SETFORMCONTROLLER: (state, data) => {
      let isHasAutoFormInfo = false;
      const controllerList = state.control.formController;
      const type = data.type;
      const ID = data.ID;
      if (type === 'set') {
        const query = data.query;
        if (controllerList.length > 0) {
          controllerList.map((item, index) => {
            if (item.hasOwnProperty(ID)) {
              const itemObj = item[ID];
              Object.assign(itemObj, query);
              isHasAutoFormInfo = true;
            }
          })
          if (!isHasAutoFormInfo) {
            // console.log('信息数组有长度，但是没有该自动表单的信息录入，所以增加一条信息');
            controllerList.push({[ID]: query})
          }
        }
        else {
          // console.log('信息数组没有长度，且没有该自动表单的信息录入，所以增加一条信息');
          controllerList.push({[ID]: query}
          )
        }
      }
      if (type === 'delete') {
        controllerList.map((item, index) => {
          if (item.hasOwnProperty(ID)) {
            controllerList.splice(index, 1);
          }
        })
      }
      if (type === 'empty') {
        state.control.formController = [];
      }
    },
    //启用表单事件计数器
    AUTOFORMCOUNTER: (state, data) => {
      const counterList = state.control.counter
      const type = data.type;
      const ID = data.ID;
      switch (type) {
        case 'register':
          if (counterList.length === 0) {
            console.log('计数器中已经没有含有此表单控件的操作记录')
            counterList.push({[ID]: data.initNum})
            break;
          }
          else {
            console.log('计数器中已经含有此表单控件的操作记录')
            let sw = false
            for (let i = 0; i < counterList.length; i++) {
              if (counterList[i].hasOwnProperty(ID)) {
                sw = true;
              }
            }
            if (sw) {
              counterList.push({[ID]: data.initNum})
            }
            break;
          }
        case 'add':
          for (let i = 0; i < counterList.length; i++) {
            if (counterList[i].hasOwnProperty(ID)) {
              counterList[i][ID]++;
              break;
            }
          }
          break;
        case 'reduce':
          for (let i = 0; i < counterList.length; i++) {
            if (counterList[i].hasOwnProperty(ID)) {
              counterList[i][ID]--;
              break
            }
          }
          break;
        case 'empty':
          for (let i = 0; i < counterList.length; i++) {
            if (counterList[i].hasOwnProperty(ID)) {
              counterList[i][ID] = 0;
              break;
            }
          }
          break;
        default:
          error.throw("the auto-from counter methods is error, only 'register', 'add', 'reduce'，and 'empty' methods，find it.");
      }
    },
    //自动表单初始化 model-data 数据存储
    INITMODELDATASTORE: (state, data) => {
      state.control.initModelData = data;
    },
    //设置 当前自定义表单请求的ID值
    CURRENTREQUESTFORMID: (state, data) => {
      state.store.requestFormId = data;
    },
    //vm store handle
    FORMERVMHANDLE: (state, data) => {
      const vmList = state.store.formerVm;
      const type = data.type;
      const ID = data.ID;
      const query = data.query;

      function _jhas() {
        return vmList.some(item => {
          return item.hasOwnProperty(ID);
        })
      }

      if (type === 'set') {
        if (_jhas) {
          vmList.push({[ID]: query})
        }
        else {
          return;
        }
      }
      if (type === 'delete') {
        vmList.map((item, index) => {
          if (item.hasOwnProperty(ID)) {
            vmList.splice(index, 1);
          }
        })
      }
      if (type === 'empty') {
        state.store.formerVm = [];
      }
      return;
    }
  },
  actions: {
    //设置 自定义表单控件验证的开关标识
    setCustomCheck({commit}, data) {
      commit('SETCUSTOMCHECK', data);
    },
    //设置 自动表单控制器（包括显隐值等一些字段及所属值）
    setFormController({commit}, data) {
      commit('SETFORMCONTROLLER', data);
    },
    //设置 自定义表单控件验证的开关标识
    autoFormCounter({commit}, data) {
      commit('AUTOFORMCOUNTER', data);
    },
    //自动表单初始化 model-data 数据存储
    initModelDataStore({commit}, data) {
      commit('INITMODELDATASTORE', data);
    },
    //设置 当前自定义表单请求的ID值
    currentRequestFormID({commit}, data) {
      commit('CURRENTREQUESTFORMID', data);
    },
    //VM handle
    formerVmHandle({commit}, data) {
      commit('FORMERVMHANDLE', data);
    },
  }
};

export default form;
