/*=====================================================================================================================*/
/*
 * check-validator for Vue
 * With the wrapper function below, you can use the check-validator fun more quickly
 * created: 2017/9/25.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
/*=====================================================================================================================*/
import validateRule from './validate-rule'
import rulesInfo from './rulesInfo'

/**
 * base validator function
 * @param value
 * @param callback
 * @param validator
 * @param errmsg
 * @private
 */
function _basevalfun(value, callback, validator, errmsg) {
  !value || validator ? callback() : callback(new Error(errmsg));//空值时，不进行内容验证
}

let check = {};
/*====================== condition detection =======================*/
rulesInfo.forEach((item) => {
  check[item.type] = (rule, value, callback) => {
    _basevalfun(value, callback, validateRule(value, item.type, item), item.msg);
  }
})

export default check;
