/*
 * regular expression validation
 * you can use this form-validation for this project,as an extension script.
 * created: 2017/6/5.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
import {judgeType, debounce} from '../../utils/index'
import rulesInfo from './rulesInfo'
// import {Message} from 'element-ui';

/**
 * validate rule private
 * @param val
 * @param type          rule type
 * @param ruleInfo      rule information list
 * @returns {*}
 */
export default function validateRule(val, type, ruleInfo) {
  let info = {};
  //if ruleInfo exists, use it directly, otherwise, you need to get the ruleInfo value.
  if (ruleInfo) {
    info = ruleInfo;
  }
  else {
    for (let item of rulesInfo) {
      if (item.type === type) {
        info = item;
        break;
      }
      continue;
    }
  }
  const reg = info.ruleReg;//reg rule
  const warmPrompt = info.warmPrompt;//warm prompt message
  /*---------------------
  complex ? = > run _complexValidate method
  simple ? = >  validata value base on reg rule
  -----------------------*/

  // console.log('输入的值 -validateRule ')
  // console.log(val)

  let ruleStatus = info.complex ? _complexValidate(val, info) : reg.test(val);

  //throw resault to validate-check
  return ruleStatus;
}


/**
 * complex validate methods
 * @param val       value
 * @param info      rules information
 * @returns {boolean}
 * @private
 */
let _complexValidate = (val, info) => {
  switch (info.type) {
    case 'trimSpace':
      const type = judgeType(val);
      //judge the value of string and digital type
      if (val && (type === 'string' || type === 'number')) {
        const value = val.toString();
        return value === value.replace(/^\s+|\s+$/g, '');
      }
      else {
        return true;
      }
      break;
    case 'allSpace':
      return !info.ruleReg.test(val);

    /**
     * ===========================================================
     * Object check => check every key and value in single layer.
     */
    case 'Object-singleLayer':
      return _ObjectSingleLayer(val, info);

    case 'area':
      return _ObjectSingleLayer(val, info);

    case 'time-interval':
      return _ObjectSingleLayer(val, info);
    /* ============================================================*/

    case 'roleFnBtn':
      let isRequire = val.some((firstItem) => {
        return firstItem.functionVos.some((secItem) => {
          return secItem.buttonIds.length > 0;
        })
      });
      /*=================== warm prompt ===================*/
      _throwWarmPrompt(info.warmPrompt, isRequire);//throw warm prompt message
      isRequire = !isRequire ? !isRequire : isRequire;
      return isRequire;
    case 'long':
      const start = 1;
      const end = 5;
      let reg = new RegExp("^.{" + start + "," + end + "}$");
      return reg.test(val);
    default:
      break;
  }
};


/**
 * Object check => check every key and value in single layer.
 *  * for example:
 *   {
 *      xx: 1,
 *      YY: 2,
 *      ZZ: 3,
 *      KK: ''
 *   }
 * @param val
 * @param info        rules information
 * @returns {boolean}
 * @private
 */
let _ObjectSingleLayer = (val, info) => {
  if (val && (judgeType(val) === 'object')) {
    for (let key in val) {
      if (!val[key] && val[key] !== 0) {
        return false;
      }
      continue;
    }
  }
  return true;
};


/**
 * throw warm prompt message
 * @param msg
 * @param status
 * @private
 */
let _throwWarmPrompt = (msg, status) => {
  if (msg && judgeType(msg) === 'string') {
    //vailate resault s right
    if (status) {

    }
    //vailate resault s wrong
    else {
      (debounce(() => {
        // Message({message: msg, type: 'warning', duration: 2 * 1000}); //throw warm prompt message
      }, 500))();
    }
  }
};
