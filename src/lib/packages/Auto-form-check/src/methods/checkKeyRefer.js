const checkKeyRefer = {
  //必须包含的字段
  necessaryKey: {
    // resultData => fields 必须包含 / 无强制性要求的的字段
    firstLevel: {
      //必要字段
      necessary: ["modelData", "info", "fields"],
      //可选字段
      unnecessary: ["tableItems"],
    },
    fields: {
      //必要字段
      necessary: [
        {key: 'resourcefieldXtype', type: 'string'},//表单类型
        {key: 'resourcefieldCode', type: 'string'},//表单model字段名称
        {key: 'resourcefieldName', type: 'string'},//表单字段 lable 名称
        {key: 'isfieldRequired', type: 'boolean'},//是否必填 required
        {key: 'resourcefieldBinding', type: 'string'},//必填出错 提示信息
        {key: 'resourcefieldAllowblankexp', type: 'string'},//内容验证规则
        {key: 'resourcefieldVtype', type: 'string'},//验证字段的内容类型
        {key: 'resourcefieldOtherconfigObject', type: 'object'},//其他信息
        {key: 'resourcefieldEmptytext', type: 'string'},//placeholder的值
        {key: 'isResourcefieldRemoved', type: 'boolean'},//是否禁用
        {key: 'isResourcefieldReadonly', type: 'boolean'},//是否只读
        {key: 'fieldWidth', type: 'number'},//表单元素部分宽度
        {key: 'fieldHeight', type: 'number'},//表单元素部分高度
        {key: 'resourcefieldStep', type: 'number'},//step 步长
        {key: 'resourcefieldFieldcls', type: 'string'},//表单控件图标
        {key: 'isResourcefieldEditable', type: 'boolean'},//是否可编辑
        {key: 'resourcefieldColspan', type: 'number'},//所占列数
        {key: 'resourcefieldGroupname', type: 'string'},//分组名称
        {key: 'isResourcefieldHidden', type: 'boolean'}, //是否隐藏
        {key: 'resourcefieldBindingfnList', type: ['array', 'function']},//事件名称集合
        {key: 'items', type: 'array'},//表单控件内容部分（checkbox，radio......）
      ],
      //可选字段
      unnecessary: [
        {key: 'children', type: 'array'},
        {key: 'resourcefieldSecondCode', type: 'string'},
        {key: 'label-width', type: 'number'},
        {key: 'min', type: 'number'},
        {key: 'max', type: 'number'},
        {key: 'resourcefieldRowspan', type: 'number'},
      ]

    }
  }
}

export default checkKeyRefer;

