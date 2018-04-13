//form-template test 自动表单-测试调试
const temple = {
  //v-model 绑定字段对象
  "modelData": {
    "userAvatar": "http://otaflb4oo.bkt.clouddn.com/mimo/banner/banner3.jpg",//用户头像
    // "name": "",//客户姓名
    "info": {
      "ownerName": "这是我做的一个自动表单的示例，参数部分及使用方法请详见代码和使用文档",
      "ownerId": 0
    },//说明
    "upload": [
      {"fileName": "test-picture", "fileUrl": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"}
    ],
    "name": "高仓雄",
    "mobile": "",//移动电话
    "cardType": "",//证件类型
    "cardNum": "",//证件号码
    "sex": "1",//性别
    "birthday": "",//出生日期
    "ownerType": "",//客户类型
    "tel": "",//家庭电话
    "ownerProperty": "",//客户性质
    "customerLevel": "",//客户等级
    "marriage": "",//婚姻状况
    "education": "",//文化程度
    "nationality": "",//国籍/地区
    "industry": "",//行业
    "origin": "",//籍贯
    "nation": "",//民族
    "rolegroup": "",//角色组 - select
    "roleEmployee": ['frontend'],//员工角色 - select
    "organizationId": 11,
    "customer-info-single": 68,//select -（ 选人控件 ）单个
    "customer-info-linkage": {
      address: "天堂软件园 ",
      age: 0,
      areaId: null,
      areaName: null,
      autoForm: null,
      birthday: "1991-06-08",
      certificate: "330106199106086666",
      certificateType: "11",
      certificateTypeName: "护照",
      cityId: null,
      cityName: null,
      company: "新视窗",
      companyAddress: "天堂软件园",
      companyPhone: "18768183457",
      companyProperyty: "0",
      customerResultId: null,
      education: "4",
      educationName: "本科",
      email: "398755817@qq.com",
      emergencyContact: "朱莉莉",
      emergencyContactPhone: "13634110454",
      enterpriseId: 1,
      familyInfoVo: null,
      fax: "",
      gender: "1",
      genderName: "女",
      handlerId: null,
      interestsIdList: null,
      interestsIds: "0,9,2",
      interestsNames: "美食,旅游,音乐",
      legalRepresentative: "",
      linkman: "",
      linkmanPhone: "",
      mainHouseList: null,
      maritalStatus: "0",
      maritalStatusName: "未婚",
      mobile: "13634110454",
      nation: "10",
      nationName: "汉族",
      nativePlace: "浙江杭州",
      organizationId: 3,
      ownerBaseInfoOwnerId: null,
      ownerId: 68,
      ownerLevel: "0",
      ownerLevelName: "VIP",
      ownerName: "朱莉莉",
      ownerProperty: "0",
      ownerPropertyName: "业主",
      ownerRelationship: null,
      ownerType: "0",
      ownerTypeName: "个人",
      peopleCounts: 0,
      phone: "0714-88888888",
      picUrl: "http://192.168.1.200:81/M00/00/01/wKgByFo7dheANPp5AACfVU2HxiU455.jpg",
      pictures: null,
      precinctHouse: null,
      precinctId: 0,
      projectId: 0,
      provinceCityArea: null,
      provinceId: null,
      provinceName: null,
      qq: "771401093",
      region: "0",
      regionName: "中国",
      regionalInfo: "",
      registeredAddress: "",
      remark: "前端匠心铸造者",
      streetId: null,
      streetName: null,
      tradeId: "0",
      tradeName: "",
    }, //select - 信息联动（ 选人控件 ）
    "roleFnBtn": [],//功能按钮权限 - checkbox
    "addAuthorizer": ['gcx', 'wyq', 'xss'], //新增授权人 - transfer
    "searchInfo": "",//搜寻信息
    "hobby": [],//兴趣爱好
    "mainHouseList": [
      {"ownerPrecinct": "姓名", "ownerHouse": "",},
      {"ownerPrecinct": "主副房号", "ownerHouse": "桃李春风-单元-单元1606（业主）"},
      {"ownerPrecinct": "手机", "ownerHouse": ""},
      {"ownerPrecinct": "固定电话", "ownerHouse": ""},
      {"ownerPrecinct": "身份证", "ownerHouse": ""},
      {"ownerPrecinct": "邮箱", "ownerHouse": ""},
      {"ownerPrecinct": "备注", "ownerHouse": ""}
    ],//所属项目（表格）
    "remarks": "",//备注
    "provinceCityArea": {
      "province": 33,
      "city": 3301,
      "district": 330106,
    }, //省市区
    "address": "",//地址
    "company": "",//工作单位
    "companyTel": "",//单位电话
    "companyAddress": "",//单位地址
    "email": "",//电子邮箱
    "QQ": "",//QQ号码
    "emergency": "",//紧急联系人
    "emergencyTel": "",//紧急联系人电话
    "registered": "",//户口所在地
    "liveState": "",//居住形态
    "specialIdentity": "",//特殊身份
    "isloan": false,//是否贷款
    "loanMonery": [8, 20],//还款金额
    "houseMoney": 500,//购房金融
  },
  //表单信息
  "info": {
    "funcinfoFormlabelwidth": 100,
    "funcinfoFormcols": 2    //表单所占列数
  },
  //表单控件循环信息
  "fields": [
    //avatar
    {
      "resourcefieldXtype": "avatar",    //表单类型
      "resourcefieldCode": "userAvatar",  //表单model字段名称
      "resourcefieldName": "",   //表单字段 lable 名称
      "isfieldRequired": false, //是否必填 required
      "resourcefieldBinding": null,//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": null,//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
        "label-width": 0,//表单字段 lable 宽度
      },
      "resourcefieldEmptytext": null,//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 700,//表单元素部分宽度
      "fieldHeight": 188,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 2,//所占列数
      "items": null,//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "base-info", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
    //text
    {
      "resourcefieldXtype": "text",    //表单类型
      "resourcefieldCode": "info",  //表单model字段名称
      "resourcefieldName": "写在前面",   //表单字段 lable 名称
      "funcinfoFormlabelwidth": 0,//表单字段 lable 宽度
      "isfieldRequired": false, //是否必填 required
      "resourcefieldBinding": null,//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": null,//验证字段的内容类型
      "resourcefieldOtherconfigObject": {
        "resourcefieldSecondCode": "ownerName",  //如果表单model为object的情况下，可用此属性取其中的值（目前只支持文字标签）
        "secondXtype": "link",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": null,//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 700,//表单元素部分宽度
      "fieldHeight": 32,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": 10,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 2,//所占列数
      "items": null,//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "before", //分组名称
      "isResourcefieldHidden": false,      //是否隐藏
      "resourcefieldBindingfnList": []
    },
    /*==================== group 1 ==================== */
    //separator
    {
      "resourcefieldXtype": "separator",    //表单类型
      "resourcefieldCode": null,  //表单model字段名称
      "resourcefieldName": "基本信息",   //表单字段 lable 名称
      "funcinfoFormlabelwidth": 0,//表单字段 lable 宽度
      "isfieldRequired": false, //是否必填 required
      "resourcefieldBinding": null,//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": null,//验证字段的内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "simple",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": null,//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 700,//表单元素部分宽度
      "fieldHeight": 32,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": "gailan",//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 2,//所占列数
      "items": null,//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "base-info", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": ["click-groupSwitch"]//事件名称集合
    },
    //group - (客户姓名/移动电话/证件类型/证件号码)
    {
      "resourcefieldXtype": "group",    //表单类型
      "resourcefieldCode": "group",  //表单model字段名称
      "resourcefieldName": "group",   //表单字段 lable 名称
      "isfieldRequired": false, //是否必填 required
      "resourcefieldBinding": null,//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": null,//验证字段的内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": null,//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
        "label-width": 120,//表单字段 lable 宽度
        "dynamicUrl": "",
      },
      "resourcefieldEmptytext": null,//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": null,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": null,//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "xx", //分组名称
      "isResourcefieldHidden": false,      //是否隐藏
      "resourcefieldBindingfnList": [],
      "resourcefieldConfiginfo": 1,//分组框内部最大列数
      "children": [
        //客户姓名 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "name",  //表单model字段名称
          "resourcefieldName": "姓名",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入姓名",//必填出错 提示信息
          "resourcefieldAllowblankexp": "numEn-",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": 10,//max
          },
          "resourcefieldEmptytext": "请输入姓名",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": "add",//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //移动电话 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "mobile",  //表单model字段名称
          "resourcefieldName": "移动电话",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入移动电话",//必填出错 提示信息
          "resourcefieldAllowblankexp": "mobile",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入移动电话",//placeholder的值
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
        //证件类型 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldCode": "cardType",  //表单model字段名称
          "resourcefieldName": "证件类型",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择证件类型",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
            "dynamicUrl": null, //请求地址
            "dynamicQuery": null,//请求参数
            "clearable": 'false'
          },
          "resourcefieldEmptytext": "请选择证件类型",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": [
            {"label": "身份证", "value": "carded"},
            {"label": "学生证", "value": "studentCard"},
            {"label": "驾驶证", "value": "driverCard"},
            {"label": "残疾证", "value": "disabilityCard"}
          ],//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //证件号码 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "cardNum",  //表单model字段名称
          "resourcefieldName": "证件号码",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入证件号码",//必填出错 提示信息
          "resourcefieldAllowblankexp": "carded",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入证件号码",//placeholder的值
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
      ]
    },
    //upload
    {
      "resourcefieldXtype": "upload",    //表单类型
      "resourcefieldCode": "upload",  //表单model字段名称
      "resourcefieldName": "",   //表单字段 lable 名称
      "isfieldRequired": false, //是否必填 required
      "resourcefieldBinding": null,//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": null,//验证字段的内容类型
      "resourcefieldOtherconfigObject": {
        "label-width": 100,
        "secondXtype": "picture-single",//表单控件分支小类type,如input=>input-text,input-textere
        "dynamicUrl": "http://192.168.1.31/api/fastdfs/fastdfs/uploadFile",
        "min": undefined,//min
        "max": undefined,//max
        "scale": 1,//表单元素（图片/上传控件图片），宽度高度比例（ 宽度 / 高度 ）
      },
      "resourcefieldEmptytext": null,//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 300,//表单元素部分宽度
      "fieldHeight": 188,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": null,//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "before", //分组名称
      "isResourcefieldHidden": false,      //是否隐藏
      "resourcefieldBindingfnList": [],
    },
    //性别 - select
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "sex",  //表单model字段名称
      "resourcefieldName": "性别",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请选择性别",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "string",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
        "dynamicUrl": null, //请求地址
        "dynamicQuery": "sex",//请求参数
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请选择性别",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": 32,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": [
        {
          "label": "男",
          "value": "0"
        },
        {
          "label": "女",
          "value": "1"
        }
      ],//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "base-info", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
    //出生日期 - datepicker
    {
      "resourcefieldXtype": "datepicker",    //表单类型
      "resourcefieldCode": "birthday",  //表单model字段名称
      "resourcefieldName": "出生日期",   //表单字段 lable 名称
      "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请选择出生日期",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "date",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
        "format": "yyyy 年 MM 月 dd 日",
        "value-format": "yyyy-MM-dd",
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
    //客户类型 - select
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "ownerType",  //表单model字段名称
      "resourcefieldName": "客户类型",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请选择客户类型",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "string",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
        "dynamicUrl": "system/dictionary/select", //请求地址
        "dynamicQuery": "ownerType",//请求参数
      },
      "resourcefieldEmptytext": "请选择客户类型",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": 32,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": [
        {"label": "个人", "value": "personal"},
        {"label": "企业", "value": "enterprise"}
      ],//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "base-info", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
    //家庭电话 - input
    {
      "resourcefieldXtype": "input",    //表单类型
      "resourcefieldCode": "tel",  //表单model字段名称
      "resourcefieldName": "家庭电话",   //表单字段 lable 名称
      "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请输入家庭电话",//必填出错 提示信息
      "resourcefieldAllowblankexp": "tel",//内容验证规则
      "resourcefieldVtype": "string",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请输入家庭电话",//placeholder的值
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
    //客户性质 - select
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "ownerProperty",  //表单model字段名称
      "resourcefieldName": "客户性质",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请选择客户性质",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "string",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
        "dynamicUrl": "system/dictionary/select", //请求地址
        "dynamicQuery": "ownerProperty",//请求参数
      },
      "resourcefieldEmptytext": "请选择客户性质",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": 32,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": [
        {
          "label": "业主",
          "value": "owner"
        },
        {
          "label": "租户",
          "value": "tenant"
        }
      ],//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "base-info", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
    //客户等级 - select
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "customerLevel",  //表单model字段名称
      "resourcefieldName": "客户等级",   //表单字段 lable 名称
      "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请选择客户等级",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "string",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
        "dynamicUrl": "system/dictionary/select", //请求地址
        "dynamicQuery": "customerLevel",//请求参数
      },
      "resourcefieldEmptytext": "请选择客户等级",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": 32,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": [
        {
          "label": "VIP",
          "value": "VIP"
        },
        {
          "label": "NORMAL",
          "value": "NORMAL"
        }
      ],//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "base-info", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
    //婚姻状况 - select
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "marriage",  //表单model字段名称
      "resourcefieldName": "婚姻状况",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请选择婚姻状况",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "string",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
        "dynamicUrl": "system/dictionary/select", //请求地址
        "dynamicQuery": "marriage",//请求参数
      },
      "resourcefieldEmptytext": "请选择婚姻状况",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": 32,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": [
        {
          "label": "已婚",
          "value": "married"
        },
        {
          "label": "未婚",
          "value": "unmarried"
        },
        {
          "label": "保密",
          "value": "secrecy"
        }
      ],//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "base-info", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
    //文化程度 - select
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "education",  //表单model字段名称
      "resourcefieldName": "文化程度",   //表单字段 lable 名称
      "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请选择文化程度",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "string",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
        "dynamicUrl": "system/dictionary/select", //请求地址
        "dynamicQuery": "education",//请求参数
      },
      "resourcefieldEmptytext": "请选择文化程度",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": 32,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": [
        {
          "label": "高中",
          "value": "high-school"
        },
        {
          "label": "大专",
          "value": "Junior-College"
        },
        {
          "label": "本科",
          "value": "Undergraduate"
        },
        {
          "label": "研究生",
          "value": "graduate"
        },
        {
          "label": "博士",
          "value": "doctorate"
        },
        {
          "label": "其他",
          "value": "other"
        }
      ],//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "base-info", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
    //国籍/地区 - select
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "nationality",  //表单model字段名称
      "resourcefieldName": "国籍/地区",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请选择国籍/地区",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "string",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
        "dynamicUrl": "system/dictionary/select", //请求地址
        "dynamicQuery": "nationality",//请求参数
      },
      "resourcefieldEmptytext": "请选择国籍/地区",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": 32,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": [
        {
          "label": "CN 中国",
          "value": "CN"
        },
        {
          "label": "其他",
          "value": "other"
        }
      ],//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "base-info", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
    //行业 - select
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "industry",  //表单model字段名称
      "resourcefieldName": "行业",   //表单字段 lable 名称
      "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请选择行业",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "string",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
        "dynamicUrl": "system/dictionary/select", //请求地址
        "dynamicQuery": "industry",//请求参数
      },
      "resourcefieldEmptytext": "请选择行业",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": 32,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": [
        {
          "label": "软件和信息技术服务",
          "value": "software"
        },
        {
          "label": "法律",
          "value": "Law"
        },
        {
          "label": "医疗",
          "value": "medical"
        },
        {
          "label": "教育",
          "value": "education"
        },
        {
          "label": "机械制造",
          "value": "machinery"
        },
        {
          "label": "其他",
          "value": "other"
        }
      ],//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "base-info", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
    //籍贯 - input
    {
      "resourcefieldXtype": "input",    //表单类型
      "resourcefieldCode": "origin",  //表单model字段名称
      "resourcefieldName": "籍贯",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请输入籍贯",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "string",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请输入籍贯",//placeholder的值
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
    //民族 - input
    {
      "resourcefieldXtype": "input",    //表单类型
      "resourcefieldCode": "nation",  //表单model字段名称
      "resourcefieldName": "民族",   //表单字段 lable 名称
      "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请输入民族",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "string",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请输入民族",//placeholder的值
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
    //角色组 - select
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "rolegroup",  //表单model字段名称
      "resourcefieldName": "角色组",   //表单字段 lable 名称
      "isfieldRequired": false, //是否必填 required
      "resourcefieldBinding": "请输入角色组",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": 'number',//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "role-group",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
        "dynamicQuery": 'Temp-DynamicQuery',
      },
      "resourcefieldEmptytext": "请输入角色组",//placeholder的值
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
    //员工角色 - select
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "roleEmployee",  //表单model字段名称
      "resourcefieldName": "员工角色",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请输入员工角色",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": 'array',//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "role-employee",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
        "dynamicQuery": 'Temp-DynamicQuery',
      },
      "resourcefieldEmptytext": "请输入员工角色",//placeholder的值
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
    //选人控件-单个模糊查询下拉框 - select
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "customer-info-single",  //表单model字段名称
      "resourcefieldName": "客户姓名",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请选择客户姓名",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": 'string',//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "customer-info-single",//表单控件分支小类type,如input=>input-text,input-textere
        "thirdXtype": "vehicle",//控件-业务划分 三级分类
        "dynamicUrl": "owner/customer/list-customer-search",
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请输入客户姓名",//placeholder的值
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
    //select - 信息联动（ 选人控件 ）
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "customer-info-linkage",  //表单model字段名称
      "resourcefieldName": "",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请输入车主姓名",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": 'object',//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "customer-info-linkage",//表单控件分支小类type,如input=>input-text,input-textere
        "thirdXtype": "vehicle",//控件-业务划分 三级分类
        "label-width": 0,
        "dynamicUrl": "owner/customer/list-customer-search",
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请输入车主姓名",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": null,//表单元素部分高度
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
    //新增授权人 - transfer
    {
      "resourcefieldXtype": "transfer",    //表单类型
      "resourcefieldCode": "addAuthorizer",  //表单model字段名称
      "resourcefieldName": "授权人",   //表单字段 lable 名称
      "isfieldRequired": false, //是否必填 required
      "resourcefieldBinding": "请选择授权人",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": 'array',//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "role-authorizer",//表单控件分支小类type,如input=>input-text,input-textere
        "dynamicQuery": 'Temp-DynamicQuery',
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请选择授权人",//placeholder的值
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
    //功能按钮权限 - checkbox
    {
      "resourcefieldXtype": "checkbox",    //表单类型
      "resourcefieldCode": "roleFnBtn",  //表单model字段名称
      "resourcefieldName": "功能按钮权限",   //表单字段 lable 名称
      "isfieldRequired": false, //是否必填 required
      "resourcefieldBinding": "请选择功能按钮权限",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": 'array',//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "roleFnBtn",//表单控件分支小类type,如input=>input-text,input-textere
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
    //搜索信息 - select-remote
    {
      "resourcefieldXtype": "select",    //表单类型
      "resourcefieldCode": "searchInfo",  //表单model字段名称
      "resourcefieldName": "搜寻信息",   //表单字段 lable 名称
      "isfieldRequired": false, //是否必填 required
      "resourcefieldBinding": "请搜寻",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "string",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "remote",//表单控件分支小类type,如input=>input-text,input-textere
        "thirdXtype": "template",//控件-业务划分 三级分类
        "dynamicUrl": "form/select/remoteTest",
        "dynamicQuery": null,
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请搜寻",//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 350,//表单元素部分宽度
      "fieldHeight": 32,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 1,//所占列数
      "items": [],//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "base-info", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
    //兴趣爱好 - checkbox
    {
      "resourcefieldXtype": "checkbox",    //表单类型
      "resourcefieldCode": "hobby",  //表单model字段名称
      "resourcefieldName": "兴趣爱好",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请选择兴趣爱好",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "array",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
        "min": 0,//min
        "max": 5,//max
      },
      "resourcefieldEmptytext": null,//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 700,//表单元素部分宽度
      "fieldHeight": 32,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 2,//所占列数
      "items": [
        {"label": "美食", "value": "meishi"},
        {"label": "交友", "value": "jiaoyou"},
        {"label": "音乐", "value": "yinyue"},
        {"label": "阅读", "value": "yuedu"},
        {"label": "手工", "value": "shougong", "disabled": true},
        {"label": "棋牌", "value": "qipai"},
        {"label": "上网", "value": "shangwang"},
        {"label": "收藏", "value": "shoucang"},
        {"label": "奢侈品", "value": "shechipin"},
        {"label": "旅游", "value": "lvyou"},
        {"label": "摄影", "value": "sheying"},
        {"label": "书法", "value": "shufa"},
        {"label": "绘图", "value": "huitu"},
        {"label": "舞蹈", "value": "wudao"},
        {"label": "其他", "value": "other"}
      ],//表单控件内容部分（checkbox，radio......）
      "resourcefieldGroupname": "base-info", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
    //所属项目（表格）- baseTable
    {
      "resourcefieldXtype": "baseTable",    //表单类型
      "resourcefieldCode": "mainHouseList",  //表单model字段名称
      "resourcefieldName": "",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请输入民族",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "object",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": null,//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": "请输入民族",//placeholder的值
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
      "resourcefieldGroupname": "base-info", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
    //备注 - input
    {
      "resourcefieldXtype": "input",    //表单类型
      "resourcefieldCode": "remarks",  //表单model字段名称
      "resourcefieldName": "备注",   //表单字段 lable 名称
      "isfieldRequired": true, //是否必填 required
      "resourcefieldBinding": "请输入备注信息",//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": "string",//验证字段的 内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": "textarea",//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": 300,//max
        "resourcefieldRowspan": 100,
      },
      "resourcefieldEmptytext": "",//placeholder的值
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
      "resourcefieldGroupname": "base-info", //分组名称
      "isResourcefieldHidden": false,       //是否隐藏
      "resourcefieldBindingfnList": [],//事件名称集合
    },
    /*==================== group 2 ==================== */
    //group2 - (省市区/居住形态/工作单位/单位电话/单位地址/电子邮箱/QQ号码/紧急联系人/紧急联系人电话)
    {
      "resourcefieldXtype": "group",    //表单类型
      "resourcefieldCode": "group3",  //表单model字段名称
      "resourcefieldName": "group",   //表单字段 lable 名称
      "label-width": 120,//表单字段 lable 宽度
      "isfieldRequired": false, //是否必填 required
      "resourcefieldBinding": null,//必填出错 提示信息
      "resourcefieldAllowblankexp": null,//内容验证规则
      "resourcefieldVtype": null,//验证字段的内容类型
      "resourcefieldOtherconfigObject": {
        "secondXtype": null,//表单控件分支小类type,如input=>input-text,input-textere
        "min": undefined,//min
        "max": undefined,//max
      },
      "resourcefieldEmptytext": null,//placeholder的值
      "isResourcefieldRemoved": false,//是否禁用
      "isResourcefieldReadonly": false,//是否只读
      "fieldWidth": 700,//表单元素部分宽度
      "fieldHeight": null,//表单元素部分高度
      "resourcefieldStep": null,//step 步长
      "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
      "resourcefieldFieldcls": null,//表单控件图标
      "isResourcefieldEditable": false,//是否可编辑
      "resourcefieldColspan": 2,//所占列数
      "items": null,//表单控件内容部分（checkbox，radio......）
      "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
      "resourcefieldGroupname": "more-info", //分组名称
      "isResourcefieldHidden": false,      //是否隐藏
      "resourcefieldBindingfnList": [],
      "resourcefieldConfiginfo": 2,//分组框内部最大列数
      "children": [
        //填写更多 - separator
        {
          "resourcefieldXtype": "separator",    //表单类型
          "resourcefieldCode": null,  //表单model字段名称
          "resourcefieldName": "填写更多",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "more",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": ["click-groupSwitch"],//事件名称集合
        },
        //省市区 - cascader
        {
          "resourcefieldXtype": "select",//表单类型
          "resourcefieldCode": "provinceCityArea",//表单model字段名称
          "resourcefieldName": "省市区",//表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请选择省市区",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "object",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "area",//表单控件分支小类type,如input=>input-text,input-textere
            "dynamicUrl": "/owner/customer/initProvinceCityArea",
            "dynamicQuery": 'Temp-DynamicQuery',
            "min": null,
            "max": null,
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,
          "fieldHeight": 32,
          "resourcefieldStep": null,
          "resourcefieldRowspan": null,
          "resourcefieldFieldcls": "search",
          "isResourcefieldEditable": false,
          "resourcefieldColspan": 2,
          "items": [],
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": []//事件名称集合
        },
        //地址 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "address",  //表单model字段名称
          "resourcefieldName": null,   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 0,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入地址",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入地址",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //工作单位 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "company",  //表单model字段名称
          "resourcefieldName": "工作单位",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入工作单位",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入工作单位",//placeholder的值
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
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //单位电话 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "companyTel",  //表单model字段名称
          "resourcefieldName": "单位电话",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入单位电话",//必填出错 提示信息
          "resourcefieldAllowblankexp": "tel",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入单位电话",//placeholder的值
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
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //单位地址 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "companyAddress",  //表单model字段名称
          "resourcefieldName": "单位地址",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入单位地址",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入单位地址",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //电子邮箱 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "email",  //表单model字段名称
          "resourcefieldName": "电子邮箱",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入电子邮箱",//必填出错 提示信息
          "resourcefieldAllowblankexp": "email",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入电子邮箱",//placeholder的值
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
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //QQ号码 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "QQ",  //表单model字段名称
          "resourcefieldName": "QQ号码",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入QQ号码",//必填出错 提示信息
          "resourcefieldAllowblankexp": "QQ",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入QQ号码",//placeholder的值
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
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //紧急联系人 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "emergency",  //表单model字段名称
          "resourcefieldName": "紧急联系人",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入紧急联系人",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入紧急联系人",//placeholder的值
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
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //紧急联系人电话 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "emergencyTel",  //表单model字段名称
          "resourcefieldName": "紧急联系人电话",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入紧急联系人电话",//必填出错 提示信息
          "resourcefieldAllowblankexp": "tel",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入紧急联系人电话",//placeholder的值
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
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //separator-其他信息
        {
          "resourcefieldXtype": "separator",    //表单类型
          "resourcefieldCode": null,  //表单model字段名称
          "resourcefieldName": "其他信息",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 0,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "simple",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": "gailan",//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": []//事件名称集合
        },
        //户口所在地 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "registered",  //表单model字段名称
          "resourcefieldName": "户口所在地",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入户口所在地",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入户口所在地",//placeholder的值
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
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //居住形态 - radio
        {
          "resourcefieldXtype": "radio",    //表单类型
          "resourcefieldCode": "liveState",  //表单model字段名称
          "resourcefieldName": "居住形态",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请选择居住形态",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请选择居住形态",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": [
            {"label": "独居", "value": "duju"},
            {"label": "夫妻", "value": "fuqi"},
            {"label": "和子女", "value": "hezinv"}
          ],//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //特殊身份 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "specialIdentity",  //表单model字段名称
          "resourcefieldName": "特殊身份",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入特殊身份",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入特殊身份",//placeholder的值
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
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //是否贷款 - switch
        {
          "resourcefieldXtype": "switch",    //表单类型
          "resourcefieldCode": "isloan",  //表单model字段名称
          "resourcefieldName": "是否贷款",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "是否贷款",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "boolean",//验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": null,//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": null,//placeholder的值
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
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //还贷金额 - slider-range
        {
          "resourcefieldXtype": "slider",//表单类型
          "resourcefieldCode": "loanMonery",//表单model字段名称
          "resourcefieldName": "还贷金额(千)",
          "isfieldRequired": false,
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "array",//验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": null,//表单控件分支小类type,如input=>input-text,input-textere
            "min": 1,
            "max": 100,
            "range": true,
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": null,//表单元素部分高度
          "resourcefieldStep": 1,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,
          "isResourcefieldEditable": false,
          "resourcefieldColspan": 2,
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": []//事件名称集合
        },
        //购房金额 - slider
        {
          "resourcefieldXtype": "slider",//表单类型
          "resourcefieldCode": "houseMoney",//表单model字段名称
          "resourcefieldName": "购房金额(万)",
          "isfieldRequired": false,
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "number",//验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": null,//表单控件分支小类type,如input=>input-text,input-textere
            "min": 100,
            "max": 1000,
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": null,//表单元素部分高度
          "resourcefieldStep": 10,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,
          "isResourcefieldEditable": false,
          "resourcefieldColspan": 2,
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": []//事件名称集合
        },
      ]
    }
  ],
  //表格中表单控件items的内容
  "tableItems": [
    //主房号
    {
      "key": "ownerHouse",          //表头对应内容key
      "formItemData": [
        {
          "index": 1,
          "items": [
            {"label": "桃李春风-单元-单元1606（业主）", "value": "桃李春风-单元-单元1606（业主）"},
            {"label": "桃李春风-单元-单元0806（业主）", "value": "桃李春风-单元-单元0806（业主）"},
            {"label": "桃李春风-单元-单元1212（业主）", "value": "桃李春风-单元-单元1212（业主）"},
            {"label": "桃李春风-商铺-商铺1310（租户）", "value": "桃李春风-商铺-商铺1310（租户）"},
            {"label": "桃李春风-商铺-商铺1311（租户）", "value": "桃李春风-商铺-商铺1311（租户）"},
          ],
        }
      ]//表头对应内容区域 items 内容
    },
  ]
}

export default temple;
