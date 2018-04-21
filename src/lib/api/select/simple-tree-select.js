/*
 * role group fetch ( 角色与权限 => 角色组下拉框组件 )
 * created: 2018/1/03.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2018 Broccoli spring( gcx )
 */
import fetch from '../../../lib/utils/fetch/fetch'
import {dataFilter} from '../../../lib/utils/fetch/fetchDataType'


/**
 * get select value and tree model data
 * @param params              {organizationId:xx}
 */
export function getInitShowData(url, method, query) {
  //Filter data
  dataFilter(query);
  let config = {
    url: url,
    method: method,
  }
  method === 'post' ? config.data = query : config.params = query;
  //fetch out
  return fetch(config);
}
