/*
 * login-fetch for login
 * created: 2017/9/30.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
/*==========================================================================================================================*/
import fetch from '../../../lib/utils/fetch/fetch'
import {dataFilter} from '../../../lib/utils/fetch/fetchDataType'
import {config} from "../../packages/Auto-form-item/config";

/*==========================================================================================================================*/

/**
 * auto-form request
 * @param url
 * @param method
 * @param head
 * @param query
 */
export function autoForm(url, method, head, query) {
  //Filter data
  dataFilter(head);
  dataFilter(query);
  if (method === 'get') {
    return fetch({
      url: url,
      method: method,
      params: query,
      headers: head
    });
  } else {
    return fetch({
      url: url,
      method: method,
      data: query,
      headers: head
    });
  }
}

/**
 * auto-form submit
 * @param url
 * @param query
 */
export function autoFormSubmit(url, query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: url,
    method: 'post',
    data: query,
  })
}
