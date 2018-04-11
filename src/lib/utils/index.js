import Cookies from 'js-cookie';
import CryptoJS from 'crypto-js'
export const dynamicLoading = {
  css: function (path) {
    if (!path || path.length === 0) {
      throw new Error('argument "path" is required !');
    }
    let head = document.getElementsByTagName('head')[0];
    let link = document.createElement('link');
    link.href = path;
    link.rel = 'stylesheet';
    link.type = 'text/css';
    head.appendChild(link);
  },
  js: function (path) {
    if (!path || path.length === 0) {
      throw new Error('argument "path" is required !');
    }
    let body = document.getElementsByTagName('body')[0];
    let script = document.createElement('script');
    script.src = path;
    script.type = 'text/javascript';
    body.appendChild(script);
  }
}


//Crypto function
export const crypto = {
  /**
   * setCrypto
   * @param val
   * @param key      crypto-password
   * @returns {*}
   */
  setCrypto: function (val, key) {
    if (!CryptoJS) {
      error.throw('CryptoJS is undefined, you need to load it');
    }
    if (typeof val === 'string' && typeof key === 'string') {
      return CryptoJS.AES.encrypt(val, key);
    } else {
      error.throw('The data format of encrypted content and key should be string，find it.');
    }
  },

  /**
   * deCrypto
   * @param val
   * @param key      crypto-password
   * @returns {string}
   */
  deCrypto: function (val, key) {
    if (!CryptoJS) {
      error.throw('CryptoJS is undefined, you need to load it');
    }
    if (typeof key === 'string') {
      return CryptoJS.AES.decrypt(val, key).toString(CryptoJS.enc.Utf8);
    } else {
      error.throw('The decrypt-key should be string，find it.');
    }
  },

  /**
   * Crypto and set into Cookie
   * @param name        stroe name
   * @param val         stroe value
   * @param key         stroe password
   * @param time        stroe time
   */
  cryptoCookie: function (name, val, key, time) {
    //get crypto password
    const mi = this.setCrypto(JSON.stringify(val), key);
    time ? Cookie.set(name, mi, time) : Cookie.set(name, mi);
  },

  /**
   * deCrypto
   * @param cookieName
   * @param cookieKey         passwoed
   * @returns {{}}
   */
  deCryptoCookie: function (cookieName, cookieKey) {
    return Cookies.get(cookieName) ?
      JSON.parse(CryptoJS.AES.decrypt(Cookies.get(cookieName), cookieKey).toString(CryptoJS.enc.Utf8)) : {}
  },
}

//Cookie - handle
export const Cookie = {
  //set Cookie
  set: function (name, val, time) {
    if (!name || !val) {
      throw('Should set with objects and value ，please carry them,or you cookie is not to be set succsssfull');
    }
    time ? Cookies.set(name, val, time) : Cookies.set(name, val);
  },
  //get Cookie
  get: function (name) {
    if (!name) {
      error.throw('Should objects to get ，please carry with name');
    }
    return Cookies.get(name);
  },
  //delete Cookie
  delete: function (name) {
    if (!name) {
      error.throw('Should objects to delete ，please carry with name');
    }
    Cookies.remove(name);
  }
}


/**
 * getQuery (get 方法获取地址栏参数)
 * @param url
 * @param name
 * @returns {null}
 */
export function getQuery(url, name) {
  var reg = new RegExp("(^|\\?|&)" + name + "=([^&]*)(\\area-linkage|&|$)", "i");
  if (url) {
    if (reg.test(url)) {
      const val = unescape(RegExp.$2.replace(/\+/g, " "));

      if (val !== null && val.toString().length >= 1) {
        return val;
      }
    }
  }
  return null;
}

/**
 * judge type accurate
 * @param value
 * @returns {*}
 */
export function judgeType(value) {
  const t = Object.prototype.toString.call(value);
  let map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  if (value instanceof Element) {
    return 'element';
  }
  return map[t];
}

/**
 * judge is a certain type
 * @param type
 * @param value
 * @returns {boolean}
 */
export function isXType(type, value) {
  if (type && judgeType(type) === 'string') {
    const t = Object.prototype.toString.call(value);
    switch (type) {
      case 'number':
        return t === '[object Number]';
      case 'string':
        return t === '[object String]';
      case 'undefined':
        return t === '[object Undefined]';
      case 'boolean':
        return t === '[object Boolean]';
      case 'object':
        return t === '[object Object]';
      case 'array':
        return t === '[object Array]';
      case 'function':
        return t === '[object Function]';
      default:
        break;
    }
  }
  else {
    error.throw('The value of the type of judgment must exist and must be a string.')
  }
}


/**
 * judge object is empty
 * @param value
 * @returns {boolean}
 */
export function isEmpty(value) {
  return (Array.isArray(value) && value.length === 0) || (Object.prototype.isPrototypeOf(value) && Object.keys(value).length === 0);
}


/**
 * judge array contain another Obj
 * @param arr
 * @param obj
 * @returns {boolean}
 */
export function arrContainObj(arr, obj) {
  if (judgeType(arr) === 'array') {
    let i = arr.length;
    while (i--) {
      if (arr[i] === obj) {
        return true;
      }
    }
    return false;
  }
  else {
    error.formatError('array');
  }
}

/**
 * arr remove distinct Object 在数组中去除重复项
 * @param arr
 * @returns {*}
 */
export function arrRemoveDistinct(arr) {
  if (!arr) return null;
  const resultArr = [];
  $(arr).each(function (index, el) {
    let notExist = true;
    $(resultArr).each(function (i, element) {
      if (ns.base.isObjectValEqual(el, element)) {
        notExist = false;
        return false;
      }
    });
    if (notExist)
      resultArr.push(el);
  });
  return resultArr;
}

/**
 * trim 移除字符串左右空格
 * @param str
 * @returns {string}
 */
export function trim(str) {
  if (judgeType(str) === 'string') {
    return str.replace(/^\s\s*/, '').replace(/\s\s*$/, '');
  }
  else {
    error.formatError('string');
  }
}


/**
 * judge string contain another string
 * @param str
 * @param substr
 * @returns {boolean}
 */
export function strContain(str, substr) {
  if (isXType('string', str) && isXType('string', substr)) {
    return str.indexOf(substr) >= 0;
  }
  else {
    error.formatError('string');
  }
}

/**
 * judge string contain another string in definite place
 * @param str
 * @param substr
 * @param place       place number
 * @returns {boolean}
 */
export function strContainPlace(str, substr, place) {
  if (isXType('string', str) && isXType('string', substr)) {
    if (judgeType(place) === 'number') {
      return str.indexOf(substr) === place;
    }
  }
  else {
    error.formatError('string');
  }
}


/**
 * replace the specified string by something in father string
 * @param str
 * @param substr
 * @param replace
 * @returns {*|string|void|XML}
 */
export function delsubstr(str, substr, replace) {
  if (isXType('string', str) && isXType('string', substr)) {
    const reg = new RegExp(substr, "g");
    return typeof replace === "undefined" ? str.replace(reg, '') : str.replace(reg, replace);
  }
  else {
    error.formatError('string');
  }
}


/**
 * convert width / height - units
 * @param val
 * @param type
 * @param base
 * @returns {*}
 */
export function convertUnits(val, type, base) {
  if (val || val === 0) {
    if (judgeType(val) === 'number') {
      return val + 'px';
    } else if (judgeType(val) === 'string') {
      return val;
    } else {
      error.throw("the value of the units must be string or number format ，you better find it");
    }
  } else {
    if (type) {
      if (base) {
        return base;
      } else {

        return type === 'width' ? '100%' : null;
      }
    } else {
      error.throw("in function of 'convertUnits', you should set type-value to tell this function " +
        "which style ( width / height ) you went to set value.");
    }
  }
}


/**
 * invert
 * @param val
 * @returns {boolean}
 */
export function invert(val) {
  const t = judgeType(val)
  if (t === 'undefined' || t === 'null') {
    return;
  }
  return !val;
}

/**
 * is variable Exitsed
 * @param variableName
 * @returns {boolean}
 */
export function isExitsVariable(variableName) {
  try {
    const type = judgeType(variableName);
    if (type == "undefined" || type == "null") {
      return false;
    } else {
      return true;
    }
  } catch (e) {
  }
  return false;
}

/**
 * hasClass
 * @param elements
 * @param cName
 * @returns {boolean}
 */
export function hasClass(elements, cName) {
  return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)")); // ( \\s|^ ) 判断前面是否有空格 （\\s | $ ）判断后面是否有空格 两个感叹号为转换为布尔值 以方便做判断
}

/**
 * remove class
 * @param elements
 * @param cName
 */
export function removeClass(elements, cName) {
  if (hasClass(elements, cName)) {
    elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " "); // replace方法是替换
  }
}

/**
 * deep clone
 * @param data
 * @returns {{}}
 */
export function deepClone(data) {
  let obj = {};
  let originQueue = [data];
  let copyQueue = [obj];
  let visitQueue = [];
  let copyVisitQueue = [];
  while (originQueue.length > 0) {
    let _data = originQueue.shift();
    let _obj = copyQueue.shift();
    visitQueue.push(_data);
    copyVisitQueue.push(_obj);
    for (const key in _data) {
      const _value = _data[key];
      const type = judgeType(_data[key]);
      if (type !== 'object') {
        // 值为 undefined 时，默认更改为''
        if (type === 'undefined') {
          // alert('为undefined：' + key)
          _obj[key] = '';
        }
        else {
          _obj[key] = _value;
        }
        // _obj[key] = _value;
      }
      else {
        let index = visitQueue.indexOf(_value);
        if (index >= 0) {
          _obj[key] = copyVisitQueue[index];
        } else {
          originQueue.push(_value);
          _obj[key] = {};
          copyQueue.push(_obj[key]);
        }
      }
    }
  }
  return obj;
}

/**
 * debounce
 * @param func
 * @param wait
 * @param immediate
 * @returns {Function}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result;

  const later = function () {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp;
    // 上次被包装函数被调用时间间隔last小于设定时间间隔wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      }
    }
  };
  return function (...args) {
    context = this;
    timestamp = +new Date();
    const callNow = immediate && !timeout;
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait);
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }
    return result;
  };
}

//random methods
export const random = {
  /**
   * randomWord ( 产生任意长度随机字母数字组合 )
   * @param randomFlag  是否任意长度
   * @param min         任意长度最小位[固定位数]
   * @param max         max-任意长度最大位
   * @returns {string}
   */
  randomWord: function (randomFlag, min, max) {
    let str = "",
      range = min,
      arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    // random build
    if (randomFlag) {
      range = Math.round(Math.random() * (max - min)) + min;
    }
    for (var i = 0; i < range; i++) {
      const pos = Math.round(Math.random() * (arr.length - 1));
      str += arr[pos];
    }
    return str;
  }
}

//format methods
export const format = {
  /**
   * Other formats convert to string format
   * @param val
   * @returns {*}
   * @constructor
   */
  allToString: function (val) {
    const nullText = '无';
    const getType = Object.prototype.toString.call(val);
    switch (getType) {
      case '[object Object]':
        val ? JSON.stringify(val, null, 4) : nullText;
        break;
      case '[object Boolean]':
        return val ? 'true' : 'false';
        break;
      case '[object Number]':
        return val + '';
        break;
      case '[object String]':
        return val ? trim(val) ? val : nullText : nullText;//after trim space ,to judge value is existed or not
        break;
      case '[object Array]':
        return val.length > 0 ? JSON.stringify(val, null, 4) : nullText;
        break;
      default:
        return val ? val : nullText;  //when value is existed ， convert to string
        break;
    }
  },
  /**
   * boolean to '是' or "否"
   * @param item
   * @returns {string}
   */
  booleanToCN: function (item) {
    return judgeType(item) === 'boolean' ? item ? '是' : "否" : item;
  }
}


/**
 * throw error message
 * @type {{throw: error.throw, formatError: error.formatError}}
 */
export const error = {
  /**
   * throw error information
   * @param txt
   */
  throw: function (txt) {
    if (typeof txt === 'string') {
      throw txt;
    }
    else {
      throw 'The type of params should be string , find it ';
    }
  },
  formatError: function (format) {
    this.throw("the object of the judgment must be a " + format + " format ，you better find it");
  }
}
//log message
export const log = {
  /**
   * log information style
   * @param type
   * @returns {string}
   */
  logStyle: function (type) {
    const base = 'font-weight:bold;';
    switch (type) {
      case 'tit':
        return 'color:#F56C6C; ' + base;
      case 'info':
        return 'color:#409EFF; ' + base;
      case 'text':
        return 'color:#303133; ' + base;
      case 'success':
        return 'color:#67C23A; ' + base;
      case 'warning':
        return 'color:#E6A23C; ' + base;
      case 'line':
        return 'color:#DCDFE6; ' + base;
      case '3DTest':
        return " text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:1.4em";
      default:
        break;
    }
  }
}


export const form = {
  /**
   * 校验特定范围内是否所有表单元素都通过验证  vaildate
   * @param range
   * @returns {boolean}
   */
  checkRange: function (range) {
    const allError = document.querySelectorAll(range + ' .cx-is-error');
    return allError.length > 0 ? false : true;
  },
}



