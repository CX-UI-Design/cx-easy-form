/*
 * distributor-validator for Vue
 * there are so many validator function you can use , by distributor,you can use it more flexible and convenient
 * created: 2017/10/5.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
/*=====================================================================================================================*/
import check from './validate-check'
import {judgeType} from '../../utils/index'



/**
 * Array.prototype.[method name] allows you to define/overwrite an objects method
 * needle is the item you are searching for
 * this is a special variable that refers to "this" instance of an Array.
 * returns true if needle is in the array, and false otherwise
 */
Array.prototype.contains = function (needle) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === needle) return true;
  }
  return false;
}

/**
 * distributor - 分发验证方法
 * @param required    - 必填
 * @param ruleMode    - rule 内容规则
 * @param type        - validator rule type : string / number /array ..... , string is default
 * @param trigger
 * @param msg
 * @returns {*}
 */
export function distributor(required, ruleMode, type, trigger, msg) {
  let arr1, arr2, arr3;
  if (required) {
    arr1 = {required: required, message: msg, trigger: trigger};//required - rule
    if (!ruleMode) {
      arr3 = {type: type, validator: check['allSpace'], trigger: trigger};//required - space warning
    }
  }
  if (ruleMode) {
    arr2 = type ? {type: type, validator: check[ruleMode], trigger: trigger} ://value validate
      {validator: check[ruleMode], trigger: trigger};
  }
  console.log(222222222);
  console.log(arr2);
  console.log(type)
  console.log(ruleMode)
  const newRules = [arr1, arr2, arr3].filter(item => judgeType(item) !== 'undefined');
  console.log(newRules)

  return newRules;
}



