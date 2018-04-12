import * as $Utils from './utils/index'
import CX from './utils/storeX'
import FormEvent from './utils/formEvent/index'

/**
 * init methods and ready handle
 * @param Vue
 * @param opts    Vue.former
 */
const init = (Vue, opts) => {
  // console.log('初始化  -  挂载开始');
  // console.log('融合设置处理后的 ----  插件设置参数')
  // console.log(opts);
  CX.requestHead.set(Vue.former.requestHead);//storing and setting request header data from config


  let EVE = Object.assign(FormEvent, opts.formEvent);//to mix, cover, and remove repetition

  Vue.prototype.$SN = opts.stageName;//add dynamic custom stage name
  Vue.prototype.$FormEvent = EVE;//binding form component interaction method （click / change / blur / fouce ... and so on）
  Vue.prototype.$CX = CX;//绑定此插件的方法 （非基础方法）
  Vue.prototype.$Utils = $Utils;//基础共通方法ku
  Vue.$Utils = $Utils;



}

export default init;
