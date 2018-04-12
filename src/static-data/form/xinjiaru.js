//form-template test 自动表单-测试调试
const rolegroup = {
  //v-model 绑定字段对象
  "modelData": {
    "organizationId": 11,
    "organizationIdList": [11, 12, 13],
    "manageRange": {
      seeScopeType: 1,
      seeOtherOrgIdList: [11, 12, 13],
    },
    "roleCheckBtn": [
      {
        "jeCoreMenuId": "2",
        "functionVos": [
          {"jeCoreFuncinfoId": "2-1", "buttonIds": ["search2"]},
          {"jeCoreFuncinfoId": "2-2", "buttonIds": [], "dataSeeScopeVo": {"seeScopeType": 4, "seeOtherOrgIdList": [2, 12, 13]}}
        ]
      },
      {
        "jeCoreMenuId": "1",
        "functionVos": [
          {"jeCoreFuncinfoId": "1-1", "buttonIds": ["search1", "edit1"], "dataSeeScopeVo": {"seeScopeType": 1, "seeOtherOrgIdList": [1]}},
          {"jeCoreFuncinfoId": "1-2", "buttonIds": [], "dataSeeScopeVo": {"seeScopeType": 2, "seeOtherOrgIdList": [1, 11]}}
        ]
      },
    ],//功能按钮权限 - checkbox
  },
  //表单信息
  "info": {
    "funcinfoFormlabelwidth": 150,
    "funcinfoFormcols": 2    //表单所占列数
  },
  //表单控件循环信息
  "fields": [
    //所属部门 - select -（ 模拟下拉，内含树状数据 ）
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "organizationId",  //表单model字段名称
      "resourcefieldName": "所属组织",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请选择所属组织",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": 'number',//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "simple-tree-select",//表单控件分支小类type,如input=>input-text,input-textere
        "thirdXtype": "role-organization",//控件-业务划分 三级分类
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请选择所属组织",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": 32,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": null,//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "group-addHolder", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
    //所属部门 - select -（ 模拟下拉，内含树状数据 ）
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "organizationIdList",  //表单model字段名称
      "resourcefieldName": "所属组织",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请选择所属组织",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": 'number',//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "simple-tree-select",//表单控件分支小类type,如input=>input-text,input-textere
        "thirdXtype": "role-organizationList",//控件-业务划分 三级分类
        "multiple": true,
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请选择所属组织",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": 'auto',//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": null,//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "group-addHolder", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },

    {
      "resourcefieldXtype": "other",    //表单类型
      "resourcefieldCode": "manageRange",  //表单model字段名称
      "resourcefieldName": "管理范围",   //表单字段 lable 名称
      "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请选择管理范围",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "object",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "manage-range",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请选择出生日期",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": 32,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": null,//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "base-info", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },

    //功能按钮权限 - checkbox
    {
      "resourcefieldXtype": "checkbox",    //表单类型
      "resourcefieldCode": "roleCheckBtn",  //表单model字段名称
      "resourcefieldName": "功能按钮权限",   //表单字段 lable 名称
      "isfieldRequired": false, //是否必填 required
      "resourcefieldBinding": "请选择功能按钮权限",//必填出错 提示信息
      "resourcefieldAllowblankexp": 'roleFnBtn',//内容验证规则
      "resourcefieldVtype": 'array',//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "roleCheckBtn",//表单控件分支小类type,如input=>input-text,input-textere
        "thirdXtype": "data-permissions",//控件-业务划分 三级分类
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请选择功能按钮权限",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 700,//表单元素部分宽度
      "fieldHeight": null,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 2,//所占列数
      "items": null,//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "group-addHolder", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
  ],
}

export default rolegroup;
