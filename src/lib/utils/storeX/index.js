/*
 * auxiliary for Vue
 * With the wrapper function below, you can use the Vue extension function more quickly
 * created: 2017/7/3.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
import {judgeType, isXType} from '../index'
import tableHeadMap from '../../staticData/table-head';

const CX = {
  // form counter
  formerVm: {
    set: function (Vue, ID, query) {
      Vue.$store.dispatch('formerVmHandle', {type: 'set', ID: ID, query: query});
    },
    //counter add
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

  requestHead: {
    head: {},
    set: function (data) {
      this.head = data;
    },
    get: function () {
      return this.head;
    }
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
}
export default CX;

