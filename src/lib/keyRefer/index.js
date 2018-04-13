/*
 * create keyRefer config object
 * You can add any other keyRefer config
 * created: 2018/04/01.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2018 Broccoli spring( gcx )
 */
/*================================================================*/

import AF_keyRefer from './Auto-form/AF_keyRefer';//auto-form

import RCB_keyRefer from './RoleCheckBtn/RCB_keyRefer';//role-check-button
import RE_keyRefer from './Role-employee/RE_keyRefer';//role-employee

import RG_keyRefer from './Role-group/RG_keyRefer';//role-group

export const ALL_keyRefer = {
  "auto-form": AF_keyRefer,
  "roleCheckBtn": RCB_keyRefer,
  "role-employee": RE_keyRefer,
  "role-group":RG_keyRefer
}
