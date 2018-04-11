/*
 * role group fetch ( 角色与权限 => 获取当前用户的功能菜单按钮 )
 * created: 2018/1/08.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2018 Broccoli spring( gcx )
 */
/*==========================================================================================================================*/
import fetch from '@/lib/utils/fetch/fetch'
import {dataFilter} from '@/lib/utils/fetch/fetchDataType'

/*==========================================================================================================================*/

/**
 * get user role-components func-button （获取当前用户的功能菜单按钮）
 */
export function getRoleFuncButton() {
  //fetch out
  return fetch({
    url: '/system/permission/list-menu-button',
    method: 'get',
    params: null,
  })
}


