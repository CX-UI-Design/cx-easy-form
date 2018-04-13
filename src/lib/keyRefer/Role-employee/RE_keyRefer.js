/*
 * role employee - keyRefer ( 角色与权限 => 角色组下拉框组件 属性字段配置 )
 * created: 2018/1/04.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2018 Broccoli spring( gcx )
 */
export default {
  firstLevel: {
    label: "rolecategoryName",
    value: "value",
    children: "roleVos"
  },
  secondLevel: {
    label: "rolename",
    value: "roleid",
    disabled: "disabled",
    checkSw: "checkSw"
  }
}



