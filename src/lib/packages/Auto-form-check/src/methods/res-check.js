import {judgeType, isEmpty, random} from '../../../../utils/index'
import keyRefer from '../../../../keyRefer/Auto-form/keyRefer';
import checkKeyRefer from './checkKeyRefer';

function _noSetStatus(value) {
  return (!value && value !== false) && !isEmpty(value) ? true : false;
}

let autoFormErr = {
  firstLevel: {
    error: [],
    warning: [],
  },
  info: {
    error: [],
    warning: [],
  },
  fields: {
    error: [],
    warning: [],
  }
}
const autoFormResCheck = function (res, formID) {
  const returnErrList = []; //return error list

  const infoRefer = keyRefer.info;//指代属性集合
  const fieldsRefer = keyRefer.fields;//指代属性集合
  const checkNecessaryKey = checkKeyRefer.necessaryKey; //数据检测 - 指代属性集合 - 必要字段


  //base function for check
  const _baseFunc = {
    //base-error send temple
    baseErrItem: (errInfo, random) => {
      const stamp = (new Date()).valueOf() + '';
      return {
        errNum: formID + '-' + stamp.slice(stamp.length - 5) + '-' + random,
        info: errInfo
      }
    },
    //check first level key in form - resultData
    _firstLevelCheck: (res) => {
      const firstLevelErrList = autoFormErr.firstLevel.error; // autoFormErr => firstLevel => err ( array )
      const necessaryKey = checkNecessaryKey.firstLevel.necessary;//necessary key in resultData
      necessaryKey.map((firstKey, index) => {
        if (!res.hasOwnProperty(firstKey)) {
          firstLevelErrList.push(_baseFunc.baseErrItem('resultData中没有：' + firstKey + ' 字段', random.randomWord(false, 4)))
        }
        else {
          if (!res[firstKey]) {
            firstLevelErrList.push(_baseFunc.baseErrItem('resultData中,' + firstKey + '字段没有信息', random.randomWord(false, 4)))
          }
        }
      })
    },
    //check second level key in form - resultData
    _secondLevelCheck: {
      //info data
      _info: {
        _formCols: (res) => {
          const resInfo = res.info; // response-info data;
          const infoErrList = autoFormErr.info.error; // autoFormErr => info => err ( array )
          if (resInfo.hasOwnProperty(infoRefer["form-cols"])) {
            const formCols = resInfo[infoRefer["form-cols"]];
            if (!parseInt(formCols) > 0) {
              infoErrList.push(_baseFunc.baseErrItem('表单info字段中，表单总体列数值必须为数字且大于0，值如下：' + formCols, random.randomWord(false, 4)))
            }
          }
          else {
            infoErrList.push(_baseFunc.baseErrItem('表单info字段中，表单总体列数必须存在', random.randomWord(false, 4)))
          }
        }
      },
      //fields data
      _fields: (res) => {
        const fieldsData = res.fields;//fields-data
        const fieldsErrList = autoFormErr.fields.error; // autoFormErr => fields => err ( array )
        const necessaryKey = checkNecessaryKey.fields.necessary;//necessary key in resultData => fields
        const unnecessaryKey = checkNecessaryKey.fields.unnecessary;//necessary key in resultData => fields

        //necessary key checking....
        necessaryKey.map((fieldsKey, index) => {
          const k = fieldsKey.key;
          const rules = fieldsKey.type;
          fieldsData.map((fieldsItem, index) => {
            let isErr = false;
            //fields-items contains this key
            if (fieldsItem.hasOwnProperty(k)) {
              const fieldsVal = fieldsItem[k];
              const itsType = judgeType(fieldsVal);
              //exclude null / undefined / '' .......( not set )
              if (!_noSetStatus(fieldsVal)) {
                //this key'area-linkage check type is string
                if (judgeType(rules) === 'string') {
                  isErr = judgeType(fieldsVal) === rules ? false : true; //judge is err
                }
                //this key'area-linkage check type is array
                if (judgeType(rules) === 'array') {
                  for (var i = 0; i < rules.length; i++) {
                    if (!judgeType(fieldsVal) === rules[i]) {
                      isErr = true;
                      continue;
                    }
                    else {
                      isErr = false;
                      break;
                    }
                  }
                }
                //is error : push error information to error list ( type is error )
                if (isErr) {
                  fieldsErrList.push(
                    _baseFunc.baseErrItem(
                      'resultData => fields 数据中,第' + (index + 1) + '项，表单类型为：' + fieldsItem[fieldsRefer['item-type']] + '，其ModelKey对应字段名为：'
                      + fieldsItem[fieldsRefer['model-key']] + '，其中 "' + k + '" 字段，要求数据类型为：' + rules + '，其数据类型为：' + itsType + '，数据格式错误',
                      random.randomWord(false, 4)
                    )
                  )
                }
              }
            }
            //fields-items not contains this key
            else {
              //push error information to error list ( do not has this property )
              fieldsErrList.push(
                _baseFunc.baseErrItem(
                  'resultData => fields数据中,第' + index + '项，表单类型为：' + fieldsItem[fieldsRefer['item-type']] +
                  '，其ModelKey对应字段名为：' + fieldsItem[fieldsRefer['model-key']] + '，其数据中没有 ' + fieldsKey + ' 字段',
                  random.randomWord(false, 4)
                )
              )
            }
          })
        });
        //unnecessary key checking....
        unnecessaryKey.map((fieldsKey, index) => {
          const k = fieldsKey.key;
          const rules = fieldsKey.type;
          fieldsData.map((fieldsItem, index) => {
            //items-type === 'group' check
            if (k === 'children' && fieldsItem[fieldsRefer['item-type']] === 'group') {
              if (!fieldsItem.hasOwnProperty(k)) {
                fieldsErrList.push(
                  _baseFunc.baseErrItem(
                    'resultData => fields 数据中,第' + (index + 1) + '项，表单类型为：' + fieldsItem[fieldsRefer['item-type']] + '，其ModelKey对应字段名为：'
                    + fieldsItem[fieldsRefer['model-key']] + '，缺失 "' + k + '" 字段，请检查',
                    random.randomWord(false, 4)
                  )
                )
              }
            }
          })
        })
      }
    }

  }
  const _errHandle = {
    reformErrList: (errList, newList) => {
      function _insert(errList, newList) {
        if (errList.length > 0) {
          errList.map((item, index) => {
            newList.push(item);
          })
        }
      };
      for (let key in errList) {
        _insert(errList[key].error, newList);
      }
      return newList;
    }
  }

  //first-level checking...................
  _baseFunc._firstLevelCheck(res);

  //first level check hadnle
  if (autoFormErr.firstLevel.error.length > 0) {
    console.log('数据第一层  发生错误')
    return _errHandle.reformErrList(autoFormErr, returnErrList);
  }
  //second level check handle
  else {
    //second level => info check handle
    _baseFunc._secondLevelCheck._info._formCols(res);
    if (autoFormErr.info.error.length > 0) {
      console.log('数据info层  发生错误')
      return _errHandle.reformErrList(autoFormErr, returnErrList);
    }
    //second level => fields check handle
    _baseFunc._secondLevelCheck._fields(res);
    if (autoFormErr.fields.error.length > 0) {
      console.log('数据fields层  发生错误')
      return _errHandle.reformErrList(autoFormErr, returnErrList);
    }


  }

  return _errHandle.reformErrList(autoFormErr, returnErrList);


}


export default autoFormResCheck;
