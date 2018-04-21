/*
 * role group fetch ( 角色与权限 => 角色组下拉框组件 )
 * created: 2018/1/03.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2018 Broccoli spring( gcx )
 */
import fetch from '../../../lib/utils/fetch/fetch'
import {dataFilter} from '../../../lib/utils/fetch/fetchDataType'


/**
 * get init role-group-list （ 获取初始化数据，显示初始值所对应的label值 ）
 * @param query        {roleid: xxx}
 */
export function getInitRoleGroupList(query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: '/system/role/list-rolecategory-for-edit',
    method: 'post',
    data: query,
  })
}


/**
 * get role-group-list （ 分组获取角色列表 ）
 * @param query        {rolecategoryId:xx,rolecategoryName:'xx'}
 */
export function getRoleGroupList(query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: '/system/role/list-role-group-by-Category',
    method: 'get',
    params: query,
  })
}




