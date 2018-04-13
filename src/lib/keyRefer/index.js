/*
 * create keyRefer config object
 * You can add any other keyRefer config
 * created: 2018/04/11.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2018 Broccoli spring( gcx )
 */
/*================================================================*/

import AF_keyRefer from './Auto-form/AF_keyRefer';//auto-form

import RCB_keyRefer from './Checkbox/RoleCheckBtn/RCB_keyRefer';//role-check-button
import RE_keyRefer from './Select/Role-employee/RE_keyRefer';//role-employee
import RG_keyRefer from './Select/Role-group/RG_keyRefer';//role-group
import RA_keyRefer from './Transfer/Role-authorizer/RA_keyRefer';//role-authorizer

import STS_keyRefer from './Select/Simple-tree-select/STS_keyRefer';//simple-tree-select

import RMR_keyRefer from './Other/Role-manage-range/RMR_keyRefer';//role-group

export const ALL_keyRefer = {
  "auto-form": AF_keyRefer,

  "roleCheckBtn": RCB_keyRefer,
  "role-employee": RE_keyRefer,
  "role-group": RG_keyRefer,
  "role-authorizer": RA_keyRefer,

  "simple-tree-select": STS_keyRefer,

  "role-manage-range": RMR_keyRefer,


}
