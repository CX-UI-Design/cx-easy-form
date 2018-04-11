import {judgeType} from './utils/index'


/**
 * Former plug-in external param config
 * @param Vue
 * @param opts
 * @constructor
 */
export const ConfFormer = function (Vue, opts) {
  console.log('插件设置传入的参数：')
  console.log(opts);
  //default param
  let former = {
    stageName: 'gcx-',//stage name config
    lan: 'ZH',//language config
    mock: true,//mock data
    log: false,//log information show
    requestHead: {},//request head config for all components
    formEvent: {},//binding form component interaction method （click / change / blur / fouce ... and so on）
    store: {},
  }
  //validate for param user config
  let _confValidate = (obj, key) => {
    if (!obj.hasOwnProperty(key)) return false;
    const t = judgeType(obj[key])
    if (t === 'null' || t === 'undefined') return false;
    return true;
  }
  if (opts) {
    for (const key of Object.keys(opts)) {
      if (_confValidate(opts, key)) {
        former[key] = opts[key]
        // if (key === 'stageName') {
        //   former[key] = opts[key]
        // }
        // if (key === 'lan') {
        //   former[key] = logger[key].concat(opts[key])
        // } else {
        //   former[key] = opts[key]
        // }
      }
      continue;
    }
  }
  Vue.prototype.$former = former
  Vue.former = former
}



