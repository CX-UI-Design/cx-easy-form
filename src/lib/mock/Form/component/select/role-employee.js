import {arrRemoveDistinct, getQuery} from "../../../../utils/index"
import {errorMap} from "../../../error/error"

/**
 * create new init array data
 * @param dataList        return data ( employee )
 * @param queryList       query list
 * @returns {Array}
 * @private
 */
function _createInitData(dataList, queryList) {
  const arr = [];
  dataList.map((Ditem, i) => {
    queryList.map((Qitem, i) => {
      Ditem.roleVos.map(vos => {
        if (vos.roleid === Qitem) {
          // vos['checkSw'] = true;//change checked
          arr.push(Ditem);
        }
      })
    })
  });
  return arr
}

const roleMap = {
  employee: {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": [
      {
        "rolecategoryName": '技术开发',
        "roleVos": [
          {"roleid": 'frontend', "rolename": '前端开发', "disabled": false, "checkSw": false},
          {"roleid": 'backend', "rolename": '后端开发', "disabled": false, "checkSw": false}
        ]
      },
      {
        "rolecategoryName": '行政人事',
        "roleVos": [
          {"roleid": 'xingzheng', "rolename": '行政', "disabled": false, "checkSw": false},
          {"roleid": 'renshi', "rolename": '人事', "disabled": false, "checkSw": false}
        ]
      },
      {
        "rolecategoryName": '设计原型',
        "roleVos": [
          {"roleid": 'UIsheji', "rolename": 'UI设计', "disabled": false, "checkSw": false},
          {"roleid": 'chanpinjingli', "rolename": '产品经理', "disabled": false, "checkSw": false}
        ]
      },
    ]
  }
}

export default {
  //init data
  init: config => {
    //get init data array
    let initData = _createInitData(roleMap.employee.resultData, JSON.parse(config.body));
    // remove arr distinct object
    initData = arrRemoveDistinct(initData);
    return {
      "resultCode": "200",
      "resultMsg": "操作成功。",
      "resultData": initData
    }
  },
  //get roleEmployee data by visible-Change（ 点击下拉菜单 ）
  roleEmployee: config => {
    const organizationId = getQuery(config.url, "organizationId"); //query - areaLevel
    if (organizationId === 'Temp-DynamicQuery') {
      return roleMap.employee;
    }
    else {
      return errorMap.errorReturnArray;
    }
  }
}
