/*
 * role group fetch ( 角色与权限 => 角色组下拉框组件 )
 * created: 2018/1/03.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2018 Broccoli spring( gcx )
 */
import fetch from '@/lib/utils/fetch/fetch'
import {dataFilter} from '@/lib/utils/fetch/fetchDataType'


/**
 * get init organization tree data（ 选择部门组件 - 获取初始组织树数据 ）
 * @param params
 */
export function getInitTreeData(params) {
  //Filter data
  dataFilter(params);
  //fetch out
  return fetch({
    url: "/system/organization/get-orgtree-form",
    method: 'get',
    params: params,
  })
}

/**
 * get child organization tree data（ 选择部门组件 - 按需获取子节点数据 ）
 * @param params    {organizationId:xx}
 */
export function getChildTreeData(params) {
  //Filter data
  dataFilter(params);
  //fetch out
  return fetch({
    url: "/system/organization/get-child-organization-form",
    method: 'get',
    params: params,
  })
}
