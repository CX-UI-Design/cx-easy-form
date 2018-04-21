/*
 * role group fetch ( 角色与权限 => 角色组下拉框组件 )
 * created: 2018/1/03.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2018 Broccoli spring( gcx )
 */
import fetch from '../../../lib/utils/fetch/fetch'
import {dataFilter} from '../../../lib/utils/fetch/fetchDataType'
/**
 * edit roleg-roup （新增/编辑角色组）
 * @param query        {rolecategoryId:xx,rolecategoryName:'xx'}
 */
export function editAddRoleGroup(query) {
  //Filter data
  dataFilter(query);
  //fetch out
  return fetch({
    url: '/system/role/save-role-category',
    method: 'post',
    data: query,
  })
}

/**
 * edit roleg-roup （删除角色组）
 * @param params       {rolecategoryId:xx}
 */
export function delRoleGroup(params) {
  //Filter data
  dataFilter(params);
  //fetch out
  return fetch({
    url: '/system/role/delete-role-category',
    method: 'get',
    params: params,
  })
}

/**
 * roleg-roup list（角色组列表）
 * @param params     {organizationId:xx}
 */
export function roleGroupList(params) {
  //Filter data
  dataFilter(params);
  //fetch out
  return fetch({
    url: "/system/role/list-role-category",
    method: 'get',
    params: params,
  })
}
/**
 * roleg-roup list（角色组详情）
 * @param params    {rolecategoryId:xx}
 */
export function roleGroupInfo(params) {
  //Filter data
  dataFilter(params);
  //fetch out
  return fetch({
    url: "/system/role/detail-role-category",
    method: 'get',
    params: params,
  })
}


