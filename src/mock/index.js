import Mock from 'mockjs'
import sw from '../switch'
import registerList from './register'

Mock.setup({
  timeout: '350-600'
})

const prod_env = require('../../config/prod.env');

/**
 * create mock url
 * @param baseUrl     base url
 * @param oUrl        suffix url
 * @returns {*}
 * @private
 */
function _mockUrl(baseUrl, oUrl) {
  /**
   * judge type
   * @param value
   * @returns {*}
   */
  let _judgeStr = (value) => {
    const t = Object.prototype.toString.call(value);
    return t === '[object String]';
  }
  if (!_judgeStr(baseUrl) || !_judgeStr(oUrl)) {
    return false;
  }
  var reg = new RegExp('"', "g");
  const a = baseUrl.replace(reg, "") + oUrl
  console.log(a);
  console.log(typeof a)
  return baseUrl.replace(reg, "") + oUrl;

}

if (sw['local-debug']) {
  registerList.forEach((item, index) => {
    Mock.mock(item.url, item.method, item.target);
  })
}

export default Mock;
