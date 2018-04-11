/*
 * table-head data for Vue
 * add head-head data in this file ,please pay attention to input format.
 * created: 2017/11/10.
 * author: Broccoli spring( 高仓雄 - gcx )
 * copyright (c) 2017 Broccoli spring( gcx )
 */
const tableHeadMap = {
  /* ========= 测试自动表单部分（可作为示例参考）========= */
  //autoFormTest ： table-head in auto-form
  "autoFormTest": [
    //index 序号栏
    {
      "type": "index",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      "label": "#",  //表头标题
      "key": null, //表头对应内容key
      "align": "center",  //标题位置（居中，左，右）
      "width": "50",     //表头宽度
      "converFormat": [],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      "model": true,  //是否为v-model值所在的列
      "fixed": "left",//固定列（left，right，是/否）
      "formItemData": []
    },
    //所属项目
    {
      "type": "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      "label": "所属项目",  //表头标题
      "key": "ownerPrecinct", //表头对应内容key
      "align": "center",  //标题位置（居中，左，右）
      "width": "199",     //表头宽度
      //表单部分
      "converFormat": [],
      "fixed": false,
      "formItemData": [
        {
          "formType": "text",
          "required": false, //是否必填 required
          "requiredMsg": "请输入正确的所属项目",//必填出错 提示信息
          "ruleType": null,//内容验证规则
          "type": "span",//表单控件分支小类type,如input=>input-text,input-textere
          "placeholder": "请输入民族",//placeholder的值
          "disabled": false,//是否禁用
          "readonly": false,//是否只读
          "Width": 200,//表单元素部分宽度
          "Height": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "row": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "items": null,//表单控件内容部分（checkbox，radio......）
          "funList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        {
          "formType": "text",
          "required": false, //是否必填 required
          "requiredMsg": "请输入正确的所属项目",//必填出错 提示信息
          "ruleType": null,//内容验证规则
          "type": "span",//表单控件分支小类type,如input=>input-text,input-textere
          "placeholder": "请输入民族",//placeholder的值
          "disabled": false,//是否禁用
          "readonly": false,//是否只读
          "Width": 200,//表单元素部分宽度
          "Height": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "row": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "items": null,//表单控件内容部分（checkbox，radio......）
          "funList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        {
          "formType": "text",
          "required": false, //是否必填 required
          "requiredMsg": "请输入正确的所属项目",//必填出错 提示信息
          "ruleType": null,//内容验证规则
          "type": "span",//表单控件分支小类type,如input=>input-text,input-textere
          "placeholder": "请输入民族",//placeholder的值
          "disabled": false,//是否禁用
          "readonly": false,//是否只读
          "Width": 200,//表单元素部分宽度
          "Height": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "row": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "items": null,//表单控件内容部分（checkbox，radio......）
          "funList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        {
          "formType": "text",
          "required": false, //是否必填 required
          "requiredMsg": "请输入正确的所属项目",//必填出错 提示信息
          "ruleType": null,//内容验证规则
          "type": "span",//表单控件分支小类type,如input=>input-text,input-textere
          "placeholder": "请输入民族",//placeholder的值
          "disabled": false,//是否禁用
          "readonly": false,//是否只读
          "Width": 200,//表单元素部分宽度
          "Height": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "row": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "items": null,//表单控件内容部分（checkbox，radio......）
          "funList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        {
          "formType": "text",
          "required": false, //是否必填 required
          "requiredMsg": "请输入正确的所属项目",//必填出错 提示信息
          "ruleType": null,//内容验证规则
          "type": "span",//表单控件分支小类type,如input=>input-text,input-textere
          "placeholder": "请输入民族",//placeholder的值
          "disabled": false,//是否禁用
          "readonly": false,//是否只读
          "Width": 200,//表单元素部分宽度
          "Height": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "row": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "items": null,//表单控件内容部分（checkbox，radio......）
          "funList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        {
          "formType": "text",
          "required": false, //是否必填 required
          "requiredMsg": "请输入正确的所属项目",//必填出错 提示信息
          "ruleType": null,//内容验证规则
          "type": "span",//表单控件分支小类type,如input=>input-text,input-textere
          "placeholder": "请输入民族",//placeholder的值
          "disabled": false,//是否禁用
          "readonly": false,//是否只读
          "Width": 200,//表单元素部分宽度
          "Height": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "row": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "items": null,//表单控件内容部分（checkbox，radio......）
          "funList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        {
          "formType": "text",
          "required": false, //是否必填 required
          "requiredMsg": "请输入正确的所属项目",//必填出错 提示信息
          "ruleType": null,//内容验证规则
          "type": "span",//表单控件分支小类type,如input=>input-text,input-textere
          "placeholder": "请输入民族",//placeholder的值
          "disabled": false,//是否禁用
          "readonly": false,//是否只读
          "Width": 200,//表单元素部分宽度
          "Height": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "row": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "items": null,//表单控件内容部分（checkbox，radio......）
          "funList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        }
      ]
    },
    //主房号
    {
      "type": "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      "label": "主房号",  //表头标题
      "key": "ownerHouse", //表头对应内容key
      "align": "center",  //标题位置（居中，左，右）
      "width": "299",     //表头宽度
      //表单部分
      "converFormat": [],
      "fixed": false,
      "formItemData": [
        {
          "formType": "input",
          "required": true, //是否必填 required
          "requiredMsg": "请输入正确的姓名",//必填出错 提示信息
          "ruleType": null,//内容验证规则
          "type": "text",//表单控件分支小类type,如input=>input-text,input-textere
          "placeholder": "请输入正确的姓名",//placeholder的值
          "disabled": false,//是否禁用
          "readonly": false,//是否只读
          "Width": 200,//表单元素部分宽度
          "Height": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "row": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "items": null,//表单控件内容部分（checkbox，radio......）
          "funList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        {
          "formType": "select",
          "required": true, //是否必填 required
          "requiredMsg": "请选择正确的用户类型",//必填出错 提示信息
          "ruleType": null,//内容验证规则
          "type": "text",//表单控件分支小类type,如input=>input-text,input-textere
          "placeholder": "请选择正确的用户类型",//placeholder的值
          "disabled": false,//是否禁用
          "readonly": false,//是否只读
          "Width": 200,//表单元素部分宽度
          "Height": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "row": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "items": [
            {"label": "桃李春风-单元-单元1606（业主）", "value": "桃李春风-单元-单元1606（业主）"}
          ],//表单控件内容部分（checkbox，radio......）
          "funList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        {
          "formType": "input",
          "required": true, //是否必填 required
          "requiredMsg": "请输入正确的手机号",//必填出错 提示信息
          "ruleType": "mobile",//内容验证规则
          "type": "text",//表单控件分支小类type,如input=>input-text,input-textere
          "placeholder": "请输入正确的手机号",//placeholder的值
          "disabled": false,//是否禁用
          "readonly": false,//是否只读
          "Width": 200,//表单元素部分宽度
          "Height": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "row": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "items": null,//表单控件内容部分（checkbox，radio......）
          "funList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        {
          "formType": "input",
          "required": true, //是否必填 required
          "requiredMsg": "请输入正确的固定电话",//必填出错 提示信息
          "ruleType": "tel",//内容验证规则
          "type": "text",//表单控件分支小类type,如input=>input-text,input-textere
          "placeholder": "请输入正确的固定电话",//placeholder的值
          "disabled": false,//是否禁用
          "readonly": false,//是否只读
          "Width": 200,//表单元素部分宽度
          "Height": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "row": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "items": null,//表单控件内容部分（checkbox，radio......）
          "funList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        {
          "formType": "input",
          "required": true, //是否必填 required
          "requiredMsg": "请输入正确的身份证",//必填出错 提示信息
          "ruleType": "carded",//内容验证规则
          "type": "text",//表单控件分支小类type,如input=>input-text,input-textere
          "placeholder": "请输入正确的身份证",//placeholder的值
          "disabled": false,//是否禁用
          "readonly": false,//是否只读
          "Width": 200,//表单元素部分宽度
          "Height": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "row": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "items": null,//表单控件内容部分（checkbox，radio......）
          "funList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        {
          "formType": "input",
          "required": true, //是否必填 required
          "requiredMsg": "请输入正确的邮箱",//必填出错 提示信息
          "ruleType": "email",//内容验证规则
          "type": "text",//表单控件分支小类type,如input=>input-text,input-textere
          "placeholder": "请输入正确的邮箱",//placeholder的值
          "disabled": false,//是否禁用
          "readonly": false,//是否只读
          "Width": 200,//表单元素部分宽度
          "Height": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "row": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "items": null,//表单控件内容部分（checkbox，radio......）
          "funList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        {
          "formType": "input",
          "required": false, //是否必填 required
          "requiredMsg": "请输入正确的备注",//必填出错 提示信息
          "ruleType": null,//内容验证规则
          "type": "text",//表单控件分支小类type,如input=>input-text,input-textere
          "placeholder": "请输入正确的备注",//placeholder的值
          "disabled": false,//是否禁用
          "readonly": false,//是否只读
          "Width": 200,//表单元素部分宽度
          "Height": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "row": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "items": null,//表单控件内容部分（checkbox，radio......）
          "funList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
      ]
    },
  ],
  //autoFormTest ： table-head in data-show
  "autoFormTest_DataList": [
    //表单元素名称
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "表单元素名称",  //表头标题
      key: "resourcefieldName", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "150",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: "left",//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //index 序号栏
    {
      type: "index",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "#",  //表头标题
      key: null, //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "50",     //表头宽度
      converFormat: [],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: true,  //是否为v-model值所在的列
      fixed: "left",//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //表单model字段名称
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "model-value",  //表头标题
      key: "resourcefieldNameEn", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "180",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: true,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //表单类型
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "表单类型",  //表头标题
      key: "resourcefieldXtype", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "150",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //字段名
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "字段名",  //表头标题
      key: "resourcefieldNameEn", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "150",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //表单控件分支小类type,如input=>input-text,input-textere
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "控件type",  //表头标题
      key: "resourcefieldOtherconfig", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "150",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //是否必填
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "是否必填",  //表头标题
      key: "isfieldRequired", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["booleanToCN"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //必填出错 提示信息
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "必填提示",  //表头标题
      key: "resourcefieldBinding", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //验证规则
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "验证规则",  //表头标题
      key: "resourcefieldAllowblankexp", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //验证字段的 内容类型
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "验证字段类型",  //表头标题
      key: "resourcefieldVtype", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //所占列数
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "所占列数",  //表头标题
      key: "resourcefieldColspan", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //Label宽度
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "Label宽度",  //表头标题
      key: "funcinfoFormlabelwidth", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //宽度
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "宽度",  //表头标题
      key: "fieldWidth", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //基础高度
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "基础高度",  //表头标题
      key: "fieldHeight", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //行数
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "行数",  //表头标题
      key: "resourcefieldRowspan", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //分组名称
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "分组名称",  //表头标题
      key: "resourcefieldGroupname", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //事件集合
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "事件集合",  //表头标题
      key: "resourcefieldBindingfnList", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //是否隐藏
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "是否隐藏",  //表头标题
      key: "isResourcefieldHidden", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["booleanToCN"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //表单控件内容部分（checkbox，radio......）
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "控件内容",  //表头标题
      key: "items", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //placeholder的值
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "占位符",  //表头标题
      key: "resourcefieldEmptytext", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //是否禁用
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "是否禁用",  //表头标题
      key: "isResourcefieldRemoved", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["booleanToCN"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //是否只读
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "是否只读",  //表头标题
      key: "isResourcefieldReadonly", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["booleanToCN"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //是否可编辑
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "是否可编辑",  //表头标题
      key: "isResourcefieldEditable", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["booleanToCN"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //Min值
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "Min值",  //表头标题
      key: "resourcefieldMinvalue", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //Max值
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "Max值",  //表头标题
      key: "resourcefieldMaxvalue", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //step 步长
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "步长",  //表头标题
      key: "resourcefieldStep", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //表单控件图标
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "图标",  //表头标题
      key: "resourcefieldFieldcls", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "120",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //操作栏
    {
      type: "handle",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "操作",  //表头标题
      key: null, //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "180",     //表头宽度
      converFormat: [],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: "right",//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
  ],
  //autoFormTest ：show model value when form submit
  "autoFormTest_submitShowModel": [
    //index 序号栏
    {
      type: "index",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "#",  //表头标题
      key: null, //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "50",     //表头宽度
      converFormat: [],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: true,  //是否为v-model值所在的列
      fixed: "left",//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //表单元素名称
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "表单元素名称",  //表头标题
      key: "resourcefieldName", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "220",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: false,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
    //表单model字段名称
    {
      type: "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      label: "model-value",  //表头标题
      key: "resourcefieldNameEn", //表头对应内容key
      align: "center",  //标题位置（居中，左，右）
      width: "220",     //表头宽度
      converFormat: ["allToString"],//内容值转换（显示值转换，增加显示值，转换显示值等，不填写：[] 为不转换）
      model: true,  //是否为v-model值所在的列
      fixed: false,//固定列（left，right，是/否）
      isEdit: false,//是否可以编辑
    },
  ],

  /* ========= 请添加项目中表头数据在此静态文件下（可参考上面示例）========= */
  //新增/编辑企业 客户  enterpriseManage
  "enterpriseManage": [
    //主房号
    {
      "type": "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      "label": "主房号",  //表头标题
      "key": "ownerHouse", //表头对应内容key
      "align": "center",  //标题位置（居中，左，右）
      "width": "350",     //表头宽度
      //表单部分
      "converFormat": [],
      "fixed": false,
      "formItemData": [
        {
          "formType": "select",
          "required": true, //是否必填 required
          "requiredMsg": "请选择正确的用户类型",//必填出错 提示信息
          "ruleType": null,//内容验证规则
          "type": "normal",//表单控件分支小类type,如input=>input-text,input-textere
          "placeholder": "请选择正确的用户类型",//placeholder的值
          "disabled": false,//是否禁用
          "readonly": false,//是否只读
          "Width": 300,//表单元素部分宽度
          "Height": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "row": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "items": [],//表单控件内容部分（checkbox，radio......）
          "funList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        {
          "formType": "select",
          "required": true, //是否必填 required
          "requiredMsg": "请选择正确的用户类型",//必填出错 提示信息
          "ruleType": null,//内容验证规则
          "type": "normal",//表单控件分支小类type,如input=>input-text,input-textere
          "placeholder": "请选择正确的用户类型",//placeholder的值
          "disabled": false,//是否禁用
          "readonly": false,//是否只读
          "Width": 300,//表单元素部分宽度
          "Height": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "row": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "items": [],//表单控件内容部分（checkbox，radio......）
          "funList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
      ]
    },
    //所属项目
    {
      "type": "normal",   //当前表格（列）所属类型（index-序号，selection-选择，normal-常规）
      "label": "所属项目",  //表头标题
      "key": "ownerPrecinct", //表头对应内容key
      "align": "center",  //标题位置（居中，左，右）
      "width": "199",     //表头宽度
      //表单部分
      "converFormat": [],
      "fixed": false,
      "formItemData": [
        {
          "formType": "text",
          "required": false, //是否必填 required
          "requiredMsg": "请输入正确的所属项目",//必填出错 提示信息
          "ruleType": null,//内容验证规则
          "type": "span",//表单控件分支小类type,如input=>input-text,input-textere
          "placeholder": "请输入民族",//placeholder的值
          "disabled": false,//是否禁用
          "readonly": false,//是否只读
          "Width": 200,//表单元素部分宽度
          "Height": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "row": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "items": null,//表单控件内容部分（checkbox，radio......）
          "funList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        {
          "formType": "text",
          "required": false, //是否必填 required
          "requiredMsg": "请输入正确的所属项目",//必填出错 提示信息
          "ruleType": null,//内容验证规则
          "type": "span",//表单控件分支小类type,如input=>input-text,input-textere
          "placeholder": "请输入民族",//placeholder的值
          "disabled": false,//是否禁用
          "readonly": false,//是否只读
          "Width": 200,//表单元素部分宽度
          "Height": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "row": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "items": null,//表单控件内容部分（checkbox，radio......）
          "funList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
      ]
    },
  ],

}

export default tableHeadMap
