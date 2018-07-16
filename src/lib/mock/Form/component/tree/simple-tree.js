import Mock from 'mockjs'
import {getQuery} from "../../../../utils/index"

const initFirstID = 1;
const initSecondID = 2;
const initThirdID = 3;

function _getResultData(type, Vos, id) {
  let _createModel = (item) => {
    return {
      "organizationId": item.organizationId,
      "organizationName": item.organizationName,
    }
  }

  let data = type === 'multiple' ? [] : {};
  //只循环判断2层，id值对应上，就获取其数据条目
  //multiple situation
  if (type === 'multiple') {
    if (Object.prototype.toString.call(id) !== "[object Array]")
      throw 'the init value in select show data request（ tree-component in select, bussiness for role-organization ）is error， because its request data is not array format, find it';
    for (let val of id) {
      Vos.map((item, i) => {
        if (val === item.organizationId) {
          data.push(_createModel(item));
        }
        else {
          item.childOrganizations.map((item, j) => {
            if (val === item.organizationId) {
              data.push(_createModel(item));
            }
          })
        }
      });
    }
  }
  //single situation
  else {
    Vos.map((item, i) => {
      if (id === item.organizationId) {
        data = _createModel(item);
      }
      else {
        item.childOrganizations.map((item, j) => {
          if (id === item.organizationId) {
            data = _createModel(item);
          }
        })
      }
    });
  }
  return data;
}


const roleMap = {
  //base default role-organization data
  "roleOrganization": {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData":
      {
        "level": 2,//默认展开几层
        "organizationVos": [  //数据
          {
            "organizationId": initFirstID,
            "organizationName": "绿城物业",
            "childOrganizations": [
              {"organizationId": initFirstID * 10 + 1, "organizationName": "绿城-技术部",},
              {"organizationId": initFirstID * 10 + 2, "organizationName": "绿城-财务部",},
              {"organizationId": initFirstID * 10 + 3, "organizationName": "绿城-市场部",},
            ]
          },
          {
            "organizationId": initSecondID,
            "organizationName": "万科物业",
            "childOrganizations": [
              {"organizationId": initSecondID * 10 + 1, "organizationName": "万科-技术部",},
              {"organizationId": initSecondID * 10 + 2, "organizationName": "万科-财务部",},
              {"organizationId": initSecondID * 10 + 3, "organizationName": "万科-市场部",},
            ]
          },
          {
            "organizationId": initThirdID,
            "organizationName": "碧桂园物业",
            "childOrganizations": [
              {"organizationId": initThirdID * 10 + 1, "organizationName": "碧桂园-技术部",},
              {"organizationId": initThirdID * 10 + 2, "organizationName": "碧桂园-财务部",},
              {"organizationId": initThirdID * 10 + 3, "organizationName": "碧桂园-市场部",},
            ]
          }
        ]
      }
  },
  //base default get child role-organization data
  "getChildRoleOrganization": {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData":
      {
        "level": 1,//默认展开几层
        "organizationVos": [  //数据
          {
            "organizationId": 11,
            "organizationName": "技术部",
            "childOrganizations": []
          },
          {
            "organizationId": 12,
            "organizationName": "财务部",
            "childOrganizations": []
          },
          {
            "organizationId": 13,
            "organizationName": "市场部",
            "childOrganizations": []
          }
        ]
      }


  },
}
export default {
  //get Multiple tree data （ 选择部门组件 - 获取多个数据-对应于特定id的此条数据：value => value + label ）
  getArrayData: config => {
    const Vos = roleMap.roleOrganization.resultData.organizationVos;
    const organizationIdList = JSON.parse(config.body);
    return {
      "resultCode": "200",
      "resultMsg": "操作成功",
      "resultData": _getResultData('multiple', Vos, organizationIdList)
    }
  },
  //get single tree data （ 选择部门组件 - 获取单个数据-对应于特定id的此条数据：value => value + label ）
  getSingleData: config => {
    const Vos = roleMap.roleOrganization.resultData.organizationVos;
    const organizationId = parseInt(getQuery(config.url, "organizationId")) //query - organizationId
    return {
      "resultCode": "200",
      "resultMsg": "操作成功。",
      "resultData": _getResultData('single', Vos, organizationId)
    }
  },

  //base default role-organization data （ 选择部门组件 - 获取初始组织树数据 ）
  roleOrganization: config => {
    return roleMap.roleOrganization;
  },
  //base default get child role-organization data （ 选择部门组件 - 按需获取子节点数据 ）
  getChildRoleOrganization: config => {
    const List = [];
    const count = 3;
    for (let i = 0; i < count; i++) {
      List.push(Mock.mock({
        "organizationId": '@float(0, 1000, 0, 0)',
        "organizationName": '@cname',
        "childOrganizations": [],
      }));
      List[i]['organizationName'] = List[i]['organizationName'] + '部';
    }
    roleMap.getChildRoleOrganization.resultData = {
      "level": 1,
      "organizationVos": List
    };
    return roleMap.getChildRoleOrganization;
  }
}
