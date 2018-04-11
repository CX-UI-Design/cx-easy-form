import {getQuery} from "../../../../utils/index"
import {errorMap} from "../../../error/error"

const roleMap = {
  authorizer: {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": [
      {"userName": "高仓雄", "userId": 'gcx', "userAccount": 'gaocangxiong', "userTelephone": '18768183457'},
      {"userName": "魏一奇", "userId": 'wyq', "userAccount": 'weiyiqi', "userTelephone": '15768283496'},
      {"userName": "王仁杰", "userId": 'wrj', "userAccount": 'wangrenjie', "userTelephone": '13862783455'},
      {"userName": "胡乾亮", "userId": 'hql', "userAccount": 'huqianliang', "userTelephone": '187681d3454'},
      {"userName": "肖斯斯", "userId": 'xss', "userAccount": 'xiaosisi', "userTelephone": '15968123453'},
      {"userName": "叶润东", "userId": 'yrd', "userAccount": 'yerundong', "userTelephone": '18768183452'},
      {"userName": "孙伟", "userId": 'sw', "userAccount": 'sunwei', "userTelephone": '18768183451'},
      {"userName": "马云", "userId": 'my', "userAccount": 'mayun', "userTelephone": '15668122449'},
      {"userName": "马化腾", "userId": 'mht', "userAccount": 'mahuteng', "userTelephone": '13968185428'},
      {"userName": "王健林", "userId": 'wjl', "userAccount": 'wangjianlin', "userTelephone": '19868123447'},
      {"userName": "王思聪", "userId": 'wsc', "userAccount": 'wangsicong', "userTelephone": '15968003496'},
      {"userName": "李彦宏", "userId": 'lyh', "userAccount": 'liyanhong', "userTelephone": '15868223437'},
    ],
  }
}
export default {
  roleAuthorizer: config => {
    const organizationId = getQuery(config.url, "organizationId"); //query - areaLevel
    if (organizationId === 'Temp-DynamicQuery') {
      return roleMap.authorizer;
    }
    else {
      return errorMap.errorReturnArray;
    }
  }
}
