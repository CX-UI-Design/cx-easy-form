/*
 * login-fetch for login
 * created: 2017/9/30.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
/*==========================================================================================================================*/
import fetch from '../../../lib/utils/fetch/fetch'
import {dataFilter} from '../../../lib/utils/fetch/fetchDataType'

/**
 * init area-linkage （ 省市区-select 初始化下拉数据显示 ）
 * @param url
 * @param query
 */
export function initAreaLinkage(url, query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: url,
    method: 'get',
    params: query,
  })
}

