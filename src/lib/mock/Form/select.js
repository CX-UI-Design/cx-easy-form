import {errorMap} from "../error/error"
import {getQuery} from "../../utils/index"

const formMap = {
  //select - 证件类型
  "cardType": {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": [
      {"value": "carded", "label": "身份证"},
      {"value": "studentCard", "label": "学生证"},
      {"value": "driverCard", "label": "驾驶证"},
      {"value": "disabilityCard", "label": "残疾证"},
      {"value": "officialCard", "label": "军官证"},
    ]
  },
  //select - 性别
  "sex": {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": [
      {
        "label": "男",
        "value": "man"
      },
      {
        "label": "女",
        "value": "woman"
      }
    ]
  },
  //select - 客户类型
  "ownerType": {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": [
      {"label": "个人", "value": "personal"},
      {"label": "企业", "value": "enterprise"}
    ]
  },
  //select - 客户性质
  "ownerProperty": {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": [
      {
        "label": "业主",
        "value": "owner"
      },
      {
        "label": "租户",
        "value": "tenant"
      }
    ]
  },
  //select - 客户等级
  "customerLevel": {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": [
      {
        "label": "VIP",
        "value": "VIP"
      },
      {
        "label": "NORMAL",
        "value": "NORMAL"
      }
    ]
  },
  //select - 婚姻状况
  "marriage": {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": [
      {
        "label": "已婚",
        "value": "married"
      },
      {
        "label": "未婚",
        "value": "unmarried"
      },
      {
        "label": "保密",
        "value": "secrecy"
      }
    ]
  },
  //select - 学历
  "education": {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": [
      {
        "label": "高中",
        "value": "high-school"
      },
      {
        "label": "大专",
        "value": "Junior-College"
      },
      {
        "label": "本科",
        "value": "Undergraduate"
      },
      {
        "label": "研究生",
        "value": "graduate"
      },
      {
        "label": "博士",
        "value": "doctorate"
      },
      {
        "label": "其他",
        "value": "other"
      }
    ]
  },
  //select - 国籍
  "nationality": {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": [
      {
        "label": "CN 中国",
        "value": "CN"
      },
      {
        "label": "其他",
        "value": "other"
      }
    ]
  },
  //select - 行业
  "industry": {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": [
      {
        "label": "软件和信息技术服务",
        "value": "software"
      },
      {
        "label": "法律",
        "value": "Law"
      },
      {
        "label": "医疗",
        "value": "medical"
      },
      {
        "label": "教育",
        "value": "education"
      },
      {
        "label": "机械制造",
        "value": "machinery"
      },
      {
        "label": "其他",
        "value": "other"
      }
    ]
  },

  "remoteTest": [
    {"label": "Alabama", "value": "Alabama"},
    {"label": "Alaska", "value": "Alaska"},
    {"label": "Arizona", "value": "Arizona"},
    {"label": "Arkansas", "value": "Arkansas"},
    {"label": "California", "value": "California"},
    {"label": "Colorado", "value": "Colorado"},
    {"label": "Connecticut", "value": "Connecticut"},
    {"label": "Delaware", "value": "Delaware"},
    {"label": "Florida", "value": "Florida"},
    {"label": "Georgia", "value": "Georgia"},
    {"label": "Hawaii", "value": "Hawaii"},
    {"label": "Idaho", "value": "Idaho"},
    {"label": "Illinois", "value": "Illinois"},
    {"label": "Indiana", "value": "Indiana"},
    {"label": "Iowa", "value": "Iowa"},
    {"label": "Kansas", "value": "Kansas"},
    {"label": "Kentucky", "value": "Kentucky"},
    {"label": "Louisiana", "value": "Louisiana"},
    {"label": "Maine", "value": "Maine"},
    {"label": "Maryland", "value": "Maryland"},
    {"label": "Massachusetts", "value": "Massachusetts"},
    {"label": "Michigan", "value": "Michigan"},
    {"label": "Minnesota", "value": "Minnesota"},
    {"label": "Mississippi", "value": "Mississippi"},
    {"label": "Missouri", "value": "Missouri"},
    {"label": "Montana", "value": "Montana"},
    {"label": "Nebraska", "value": "Nebraska"},
    {"label": "Nevada", "value": "Nevada"},
    {"label": "New Hampshire", "value": "New Hampshire"},
    {"label": "New Jersey", "value": "New Jersey"},
    {"label": "New Mexico", "value": "New Mexico"},
    {"label": "New York", "value": "New York"},
    {"label": "North Carolina", "value": "North Carolina"},
    {"label": "North Dakot", "value": "North Dakot"},
    {"label": "Ohio", "value": "Ohio"},
    {"label": "Oklahoma", "value": "Oklahoma"},
    {"label": "Oregon", "value": "Oregon"},
    {"label": "Pennsylvania", "value": "Pennsylvania"},
    {"label": "Rhode Island", "value": "Rhode Island"},
    {"label": "South Carolina", "value": "South Carolina"},
    {"label": "South Dakota", "value": "South Dakota"},
    {"label": "Tennessee", "value": "Tennessee"},
    {"label": "Texas", "value": "Texas"},
    {"label": "Utah", "value": "Utah"},
    {"label": "Vermont", "value": "Vermont"},
    {"label": "Virginia", "value": "Virginia"},
    {"label": "Washington", "value": "Washington"},
    {"label": "West Virginia", "value": "West Virginia"},
    {"label": "Wisconsin", "value": "Wisconsin"},
    {"label": "Wyoming", "value": "Wyoming"},
  ],
}

export default {
  selectOption: config => {
    const url = config.url;
    const query = getQuery(url, 0); //query - areaLevel
    if (query) {
      console.log(formMap[query]);
      if (formMap[query]) {
        return formMap[query];
      }
      else {
        return errorMap.error;
      }
    }
  },
  //remote - mocktest, data form remoteTest
  remoteTest: config => {
    const url = encodeURI(config.url);

    let q = getQuery(url, "0"); //query
    const query = decodeURI(decodeURI(q));

    const option = formMap.remoteTest.filter(item => {
      return item.label.toLowerCase()
        .indexOf(query.toLowerCase()) > -1;
    });
    const requireData = {
      "resultCode": "200",
      "resultMsg": "操作成功。",
      "resultData": option
    }
    return requireData;
  },
}
