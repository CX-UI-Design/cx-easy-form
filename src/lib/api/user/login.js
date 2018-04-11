/*
 * login-fetch for login
 * created: 2017/9/30.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
/*==========================================================================================================================*/
import qs from 'querystring';
import Cookies from 'js-cookie';
import fetch from '@/lib/utils/fetch/fetch'
import {dataFilter} from '@/lib/utils/fetch/fetchDataType'

/*==========================================================================================================================*/

/**
 * loginByUsername (fetch-login axios for login)
 * @param query
 */
export function loginByUsername(query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: '/oauth/login',
    method: 'post',
    data: query,
    transformRequest: [function (data) {
      //determine whether to select remember and, accordingly, perform cookie operations
      if (query.remember) {
        Cookies.set("autologin_username", query.username, 7);
        Cookies.set("autologin_password", query.password, 7);
      }
      else {
        Cookies.set("autologin_account", '');
        Cookies.set("autologin_password", '');
      }
      console.log('已经记住密码和账号，下次可以不用填写啦！！')
      data = qs.stringify(data);
      console.log('登录请求发送前数据处理，处理结果：————' + data)
      return data;
    }]
  })
}

