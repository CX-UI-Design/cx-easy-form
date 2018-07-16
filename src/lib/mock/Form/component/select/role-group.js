import {getQuery,arrRemoveDistinct} from "../../../../utils/index";

import {errorMap} from "../../../error/error";

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
          arr.push(Ditem);
        }
      })
    })
  });
  return arr;
}

const roleMap = {
  //get roleg-roup list（获取角色组列表）
  roleGroupList: {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": [
      //操作员组
      {
        "rolecategoryId": 1,//角色组id
        "enterpriseId": 1,
        "organizationId": 3,
        "rolecategoryName": "操作员组",
        "isDeleted": 0,
        "remark": "",
        "disabled": false,
        "handerId": null,
        "roleVos": null
      },
      //管理员组
      {
        "rolecategoryId": 2,
        "enterpriseId": 1,
        "organizationId": 3,
        "rolecategoryName": "管理员组",
        "isDeleted": 0,
        "remark": "",
        "disabled": false,
        "handerId": null,
        "roleVos": null
      },
      //收费员组
      {
        "rolecategoryId": 97,
        "enterpriseId": 1,
        "organizationId": 3,
        "rolecategoryName": "收费员组",
        "isDeleted": 0,
        "remark": "",
        "disabled": false,
        "handerId": null,
        "roleVos": null
      },
      //财务组
      {
        "rolecategoryId": 98,
        "enterpriseId": 1,
        "organizationId": 3,
        "rolecategoryName": "财务组",
        "isDeleted": 0,
        "remark": "",
        "disabled": false,
        "handerId": null,
        "roleVos": null
      },
      //测试组
      {
        "rolecategoryId": 99,
        "enterpriseId": 1,
        "organizationId": 3,
        "rolecategoryName": "测试组",
        "isDeleted": 0,
        "remark": "",
        "disabled": false,
        "handerId": null,
        "roleVos": null
      }
    ]
  },
  //edit/add/delete roleg-roup ( 角色组操作（新增/编辑/删除）)
  handleRoleGroup: {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": true
  },
};

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
  //get roleg-roup list（获取角色组列表）
  roleGroupList: config => {
    const organizationId = getQuery(config.url, "organizationId"); //query - areaLevel
    if (organizationId === 'Temp-DynamicQuery') {
      return roleMap.roleGroupList;
    }
    else {
      return errorMap.errorReturnArray;
    }
  },
  //edit/add/delete role-roup ( 角色组操作（新增/编辑/删除）)
  handleRoleGroup: config => {
    return roleMap.handleRoleGroup;
  }
}



