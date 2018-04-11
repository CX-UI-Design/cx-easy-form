import placesMap from "./area-code"

/*地区类*/
function _place(AreaCode, Name) {
  this.AreaCode = AreaCode;//地区编码
  this.Name = Name;//地名
  /*地区类的PlaceType方法，返回值：String类型，表示地区类别，"p"代表省/直辖市、特别行政区，"c"代表市，"d"代表区/县。*/
  _place.prototype.PlaceType = function () {
    var ac = parseInt(this.AreaCode);
    if (ac % 100 != 0) {
      return "d";
    } else if (ac % 10000 != 0) {
      return "c";
    } else {
      return "p";
    }
  }
  /*返回地点所属省编码*/
  _place.prototype.ProvinceCode = function () {
    //整除10000得到省级编码（前2位数字）
    var ac = parseInt(this.AreaCode);
    return Math.floor(ac / 10000);
  }
  /*返回地点所属市编码*/
  _place.prototype.CityCode = function () {
    //整除100得到市级编码（前4位数字）
    var ac = parseInt(this.AreaCode);
    return Math.floor(ac / 100);
  }
  /*返回地点所属区编码*/
  _place.prototype.DistrictCode = function () {
    //整除10得到市级编码（前6位数字)
    var ac = parseInt(this.AreaCode);
    return Math.floor(ac / 1);
  }
}

/* initSeletList() 这个函数初始化上面这三个数组，还有省下拉列表 */
export function initSeletList(allArea) {
  //遍历placesMap这个Json对象,根据key：value对创建place对象，并根据地区类型分类
  for (var key in placesMap) {
    var pl = new _place(key, placesMap[key]);
    var type = pl.PlaceType();
    if (type == "p") {
      allArea.provinces.push(pl);
    }
    if (type == "c") {
      allArea.cities.push(pl);
    }
    if (type == "d") {
      allArea.districts.push(pl);
    }
  }
}

/**
 * set province item （ 获取省下拉选择列表 ）
 * @param allArea
 * @returns {Array}
 */
export function setProvinceItem(allArea) {
  let pitem = [];        //empty
  const p = allArea.provinces;    //all provinces
  for (let i = 0; i < p.length; i++) {
    pitem.push({label: p[i].Name, value: p[i].ProvinceCode(), isResourcefieldRemoved: false, children: null,})
  }
  return pitem;
}

/**
 * set cityes item ( 获取市下拉选择列表 ）
 * @param allArea
 * @param areaCode
 * @returns {Array}
 */
export function setCitiesItem(allArea, areaCode) {
  let citem = [];                 //empty
  const c = allArea.cities;       //all provinces
  var pCode = parseInt(areaCode); //get provinces code whitch is selected
  if (areaCode && pCode !== 0) {
    for (let i = 0; i < c.length; i++) {
      /*根据省编码更新市下拉列表*/
      if (c[i].ProvinceCode() == pCode) {
        citem.push({label: c[i].Name, value: c[i].CityCode(), isResourcefieldRemoved: false, children: null,})
      }
    }
    return citem;
  }
}

/**
 * set districts item ( 获取区下拉选择列表 ）
 * @param allArea
 * @param areaCode
 * @returns {Array}
 */
export function setDistrictsItem(allArea, areaCode) {
  let ditem = [];                 //empty
  const d = allArea.districts;       //all provinces
  var cCode = parseInt(areaCode); //get cities code whitch is selected
  if (areaCode && cCode !== 0) {
    for (let i = 0; i < d.length; i++) {
      /*根据省编码更新市下拉列表*/
      if (d[i].CityCode() == cCode) {
        ditem.push({label: d[i].Name, value: d[i].DistrictCode(), isResourcefieldRemoved: false, children: null})
      }
    }
    return ditem;
  }
}
