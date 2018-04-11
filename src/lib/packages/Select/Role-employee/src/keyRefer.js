/*
 * role employee - keyRefer ( 角色与权限 => 角色组下拉框组件 属性字段配置 )
 * created: 2018/1/03.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2018 Broccoli spring( gcx )
 */
const keyRefer = {
  firstLevel: {
    label: "rolecategoryName",
    value: "xx",
    children:"roleVos"
  },
  secondLevel: {
    label: "rolename",
    value: "roleid",
    disabled:"disabled",
    checkSw:"checkSw"
  }
}

export default keyRefer;


