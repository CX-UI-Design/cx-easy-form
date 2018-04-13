/*
 * role check button - keyRefer
 * created: 2018/1/03.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2018 Broccoli spring( gcx )
 */
export default {
  firstLevel: {
    "menu-name": "menuMenuname",    //一级分类 名称
    "menu-id": "jeCoreMenuId",      //一级分类ID
    checkSW: "checkSW",             //一级分类 全选开关
    indeterminate: "indeterminate",  //一级分类 checkbox 的不确定状态
    children: "childMenus"          //一级分类子数组
  },
  secondLevel: {
    "menu-name": "menuMenuname",    //二级分类 名称
    "menu-id": "jeCoreFuncinfoId",  //二级分类ID
    infoVo: "funcinfoVo",           //二级分类 所对应的功能
    btnItems: 'resourcebuttons',    //二级分类 按钮信息
    checkSW: "checkSW",             //二级分类 全选开关
    indeterminate: "indeterminate",  //二级分类 checkbox 的不确定状态
  },
  thirdLevel: {
    btnType: "buttonType",          //按钮组分类名称
    children: "buttons",          //三级级分类子数组
    value: "jeCoreResourcebuttonId",//按钮id
    label: "resourcebuttonName",    //按钮名称
    disabled: "disabled",           //禁用开关
  },
  modelKey: {
    firstID: 'jeCoreMenuId',        //一级分类ID
    secondID: 'jeCoreFuncinfoId',   //二级分类ID
    infoVo: 'functionVos',          //二级分类 对应的功能
    btnItems: 'buttonIds',          //二级分类 按钮信息
    dataSeeModel: 'dataSeeScopeVo',//内置数据权限管理范围组件的情况下，获取其初始化 model-data 值得字段值
  }
}



