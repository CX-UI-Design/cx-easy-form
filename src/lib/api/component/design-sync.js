/*
 * login-fetch for login
 * created: 2017/9/30.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
/*==========================================================================================================================*/
import qs from 'querystring';
import fetch from '../../../lib/utils/fetch/fetch'
import {dataFilter} from '../../../lib/utils/fetch/fetchDataType'

/*==========================================================================================================================*/
/**
 * formSynchro_search
 * @param query
 */
export function designSync_search(query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: '/system/sync/get-all-company-org',
    method: 'post',
    data: query,
    transformRequest: [function (query) {
      query = qs.stringify(query);
      return query;
    }]
  })
}

/**
 * formSynchro_submit
 * @param query
 */
export function designSync_submit(query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: '/jepf/devplatform/sync-original',
    method: 'post',
    data: query,
  })
}
