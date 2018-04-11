/*=====================================================================================================================*/
/*
 * error-message for Vue
 * created: 2017/10/01.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
/*=====================================================================================================================*/

export default [
  /*====================== condition detection =======================*/
  //验证小写字母
  {type: 'lowerCase', complex: false, warmPrompt: '', msg: '请输入小写字母', ruleReg: /^[a-z]+$/},

  //验证大写字母
  {type: 'upperCase', complex: false, warmPrompt: '', msg: '请输入大写字母', ruleReg: /^[A-Z]+$/},

  //验证大小写字母
  {type: 'alphabets', complex: false, warmPrompt: '', msg: '请输入大写或者小写字母', ruleReg: /^[A-Za-z]+$/},

  //验证由数字和26个英文字母组成的字符串
  {type: 'numEn', complex: false, warmPrompt: '', msg: '请输入数字和英文组成的字符串', ruleReg: /^[A-Za-z0-9]+$/},

  //验证由数字，26个英文字母和 - 组成的字符串
  {type: 'numEn-', complex: false, warmPrompt: '', msg: '请输入数字、英文和-组成的字符串', ruleReg: /^[A-Za-z0-9-]+$/},

  //必须 ！同时包含! 数字和26个英文字母
  {type: 'numEnBoth', complex: false, warmPrompt: '', msg: '必须同时包含数字和26个英文字母', ruleReg: /^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{2,}$/},

  //不能为纯数字
  {type: 'notAllNum', complex: false, warmPrompt: '', msg: '不能为纯数字', ruleReg: /^\w*[a-zA-Z]+\w*$/},

  //数字格式
  {type: 'num', complex: false, warmPrompt: '', msg: '请输入正确的数字格式', ruleReg: /^[0-9.]+$/},

  //验证长度为  x-y  的字符串
  {type: 'long', complex: true, msg: '请输入长度为  x-y  的字符串', ruleReg: null},

  /*========================= form validate  =========================*/

  //验证用户名,含有数字，英文字母和_,4-16位
  {type: 'acount', complex: false, warmPrompt: '', msg: '用户名由4-16位数字，英文字母和_构成', ruleReg: /^[a-zA-Z0-9_]{4,16}$/},

  //验证密码
  {
    type: 'pass', complex: false, warmPrompt: '', msg: '用户名由4-16位数字，英文字母和特殊字符构成',
    //含有数字和英文字母以及特殊字符 _*/.`~    ，6-20位
    // ruleReg: /^[a-zA-Z0-9_*/.`~]{6,20}$/,
    //同时含有数字和英文字母，不含特殊字符，6-20位
    // ruleReg: /^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9]{6,20}$/,
    //同时含有数字和英文字母，可以特殊字符  _*/.`~   ，6-20位
    ruleReg: /^(?=.*?[a-zA-Z])(?=.*?[0-9])[a-zA-Z0-9_*/.`~]{6,20}$/
  },


  //验证日期格式，格式：xxxx-xx-xx
  {type: 'date', complex: false, warmPrompt: '', msg: '请输入正确的日期格式', ruleReg: /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/},

  //验证邮箱
  {type: 'email', complex: false, warmPrompt: '', msg: '请输入正确的邮箱', ruleReg: /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/},

  //验证 Mobilephone
  {
    type: 'mobile', complex: false, warmPrompt: '', msg: '请输入正确的手机号码',
    //国内手机,格式：13（1-9），147，15（8-9），18（0-9
    // ruleReg: /^((\(\d{3}\))|(\d{3}\-))?13[0-9]\d{8}|14[57]\d{8}|15[0-9]\d{8}|18[0-9]\d{8}|19[8]\d{8}$/},
    //国内手机,所有格式：13-9（0-9）
    ruleReg: /^((\(\d{3}\))|(\d{3}\-))?13[0-9]\d{8}|14[0-9]\d{8}|15[0-9]\d{8}|16[0-9]\d{8}|17[0-9]\d{8}|18[0-9]\d{8}|19[0-9]\d{8}$/
  },

  //验证tel固定电话（国内固定电话）,格式：XXXX-XXXXXXXX，XXXXXXX，XXX-XXXXXXX。
  {type: 'tel', complex: false, warmPrompt: '', msg: '请输入正确的固定电话号码', ruleReg: /^(\(\d{3,4}\)|\d{3,4}-)?\d{7,8}$/},

  //验证fax传真, 格式：+123 -999 999 ； +123-999 999 ；123 999 999 ；+123 999999 ；05718888888
  {type: 'fax', complex: false, warmPrompt: '', msg: '请输入正确的传真号码', ruleReg: /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/},

  //验证身份证,身份证17或者18位
  {
    type: 'carded', complex: false, warmPrompt: '', msg: '请输入正确的身份证',
    ruleReg: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/
  },

  //验证网址,网址以http://https://开头，或者www开头（不严谨，但考虑用户习惯，这里予以保留，根据项目予以考虑）
  {type: 'web', complex: false, warmPrompt: '', msg: '请输入正确的网址', ruleReg: /^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/|[Ww]{3}.)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/},

  //验证QQ,以非零数字开头，从10000开始
  {type: 'QQ', complex: false, warmPrompt: '', msg: '请输入正确的QQ', ruleReg: /^[1-9][0-9]{4,14}$/},

  //验证合法uri
  {
    type: 'url', complex: false, warmPrompt: '', msg: '请输入正确的路径地址',
    ruleReg: /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  },

  /*========================= complex vaildate =========================*/

  //all space （判断是否全为空格）
  {type: 'allSpace', complex: true, warmPrompt: '', msg: '输如内容不能全为空格', ruleReg: /^[ ]+$/},

  //trim space （判断首尾空格）
  {type: 'trimSpace', complex: true, warmPrompt: '', msg: '输如内容不能全为空格,且首尾不能有空格', ruleReg: null},

  //Object check => check every key and value in single layer.
  {type: 'Object-singleLayer', complex: true, warmPrompt: '', msg: '请正确填写/选择', ruleReg: null},

  //area linkage: （Object check => check every key and value in single layer)
  {type: 'area', complex: true, warmPrompt: '', msg: '请选择正确的区域地址', ruleReg: null},

  //time-interval: （Object check => check every key and value in single layer)
  {type: 'time-interval', complex: true, warmPrompt: '', msg: '请选择正确的执行时间频率', ruleReg: null},

  //role-package-funcButton list (验证 功能菜单按钮组件 是否被选择操作过)
  {type: 'roleFnBtn', complex: true, warmPrompt: '确认无需功能菜单按钮设置吗', msg: '请选择功能菜单按钮', ruleReg: null},


];
