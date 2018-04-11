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
 * download Excel
 * @param query
 */
export function download(query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: '/fastdfs/fastdfs/downloadFile',
    method: 'get',
    params: query,
    responseType: 'blob'
  })
}

