/*
 * fetch for Vue
 * created: 2018/2/10.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
/*==========================================================================================================================*/
import fetch from '@/lib/utils/fetch/fetch'
import {dataFilter} from '@/lib/utils/fetch/fetchDataType'

/*==========================================================================================================================*/

/**
 * get upload information
 * @param query
 */
export function getUploadInfo(query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: '/upload/polling',
    method: 'post',
    data: query,
  })
}

