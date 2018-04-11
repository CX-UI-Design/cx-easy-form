import {getQuery} from "../../../utils/index"
import {initSeletList, setProvinceItem, setCitiesItem, setDistrictsItem} from "./deAreaCode"

// provinces/cities/districts  array
let allArea = {provinces: [], cities: [], districts: [],}
//loading store of area-information
initSeletList(allArea);

const areaMap = {
  //init
  "area-init": {
    "resultCode": "200",
    "resultMsg": "模板自动表单请求数据操作成功",
    "resultData": {
      "provinces": [{"label": "浙江省", "value": 33}],
      "cities": [{"label": "杭州市", "value": 3301}],
      "districts": [{"label": "西湖区", "value": 330106}],
      "streets": [{"label": "翠苑街道", "value": 33010601}],

      // "provinces": [{"label": "", "value": ""}],
      // "cities": [{"label": "", "value": ""}],
      // "districts": [{"label": "", "value": ""}],
      // "streets": [{"label": "", "value": ""}],
    }
  },
  "area-data": {
    "resultCode": "200",
    "resultMsg": "模板自动表单请求数据操作成功",
    "resultData":
      {
        "provinces": [{"label": "浙江省", "value": 33}],
        "cities": [{"label": "杭州市", "value": 3301}],
        "districts": [{"label": "西湖区", "value": 330106}],
        "streets": [{"label": "翠苑街道", "value": 33010601}],
      }
  },
}

export default {
  area: (config) => {
    const areaLevel = getQuery(config.url, "areaLevel"); //query - areaLevel
    const areaCode = getQuery(config.url, "areaCode");   //query - areaCode
    const sendData = areaMap["area-data"];               //send area data

    switch (areaLevel) {
      case "1":
        sendData.resultData = {provinces: setProvinceItem(allArea)};
        break;
      case "2":
        sendData.resultData = {cities: setCitiesItem(allArea, areaCode)};
        break;
      case "3":
        sendData.resultData = {districts: setDistrictsItem(allArea, areaCode)};
        break;
      default:
        return areaMap["area-init"];
    }
    return sendData;
  },
}
