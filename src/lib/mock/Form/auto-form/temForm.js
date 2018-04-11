const formMap = {
  "autoform": {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": {
      //v-model 绑定字段对象
      "modelData": {
        "info": "这是我做的一个自动表单的示例，参数部分及使用方法请详见代码和使用文档",//说明
        "userAvatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",//用户头像
        // "name": "",//客户姓名
        "name": "",
        "mobile": "",//移动电话
        "cardType": "",//证件类型
        "cardNum": "",//证件号码
        "sex": "",//性别
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
        "searchInfo": "",//搜寻信息
        "hobby": [],//兴趣爱好
        "mainHouseList": [
          {"ownerPrecinct": "姓名", "ownerHouse": ""},
          {"ownerPrecinct": "用户类型", "ownerHouse": "2"},
          {"ownerPrecinct": "手机", "ownerHouse": ""},
          {"ownerPrecinct": "固定电话", "ownerHouse": ""},
          {"ownerPrecinct": "身份证", "ownerHouse": ""},
          {"ownerPrecinct": "邮箱", "ownerHouse": ""},
          {"ownerPrecinct": "备注", "ownerHouse": ""}
        ],//所属项目（表格）
        "remarks": "",//备注
        "provincialandcity": [],//省市区
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
        "funcinfoFormcols": 2    //表单所占列数
      },
      //表单控件循环信息
      "fields": [
        //upload
        {
          "resourcefieldXtype": "upload",    //表单类型
          "resourcefieldNameEn": "upload",  //表单model字段名称
          "resourcefieldName": "头像",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfig": 'picture-card',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": []
        },
        //span
        {
          "resourcefieldXtype": "span",    //表单类型
          "resourcefieldNameEn": "info",  //表单model字段名称
          "resourcefieldName": "写在前面",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfig": null,//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 600,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": "function () {alert('gcxgcgxgcxg')}"
        },
        /*==================== group 1 ==================== */
        //separator
        {
          "resourcefieldXtype": "separator",    //表单类型
          "resourcefieldNameEn": null,  //表单model字段名称
          "resourcefieldName": "基本信息",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 0,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfig": 'simple',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": "gailan",//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": ['click-groupSwitch']//事件名称集合
        },
        //avatar
        {
          "resourcefieldXtype": "avatar",    //表单类型
          "resourcefieldNameEn": "userAvatar",  //表单model字段名称
          "resourcefieldName": "",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的 内容类型
          "resourcefieldOtherconfig": 'round',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 186,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //客户姓名 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "name",  //表单model字段名称
          "resourcefieldName": "姓名",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入姓名",//必填出错 提示信息
          "resourcefieldAllowblankexp": "NumEn",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入姓名",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": 'add',//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //移动电话 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "mobile",  //表单model字段名称
          "resourcefieldName": "移动电话",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入移动电话",//必填出错 提示信息
          "resourcefieldAllowblankexp": "mobile",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入移动电话",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //证件类型 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldNameEn": "cardType",  //表单model字段名称
          "resourcefieldName": "证件类型",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择证件类型",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请选择证件类型",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
          "resourcefieldBindingfnList": ['change-cardTypeFuncTest'],//事件名称集合
          "dynamicUrl": null, //请求地址
          "dynamicQuery": null,//请求参数
        },
        //证件号码 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "cardNum",  //表单model字段名称
          "resourcefieldName": "证件号码",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入证件号码",//必填出错 提示信息
          "resourcefieldAllowblankexp": "carded",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入证件号码",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //性别 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldNameEn": "sex",  //表单model字段名称
          "resourcefieldName": "性别",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择性别",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请选择性别",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": [
            {
              "label": "男",
              "value": "man"
            },
            {
              "label": "女",
              "value": "woman"
            }
          ],//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": ['visibleChange-sexFuncTest'],//事件名称集合
          "dynamicUrl": "system/dictionary/select", //请求地址
          "dynamicQuery": "sex",//请求参数
        },
        //出生日期 - datepicker
        {
          "resourcefieldXtype": "datepicker",    //表单类型
          "resourcefieldNameEn": "birthday",  //表单model字段名称
          "resourcefieldName": "出生日期",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请选择出生日期",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "date",//验证字段的 内容类型
          "resourcefieldOtherconfig": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请选择出生日期",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
          "resourcefieldNameEn": "ownerType",  //表单model字段名称
          "resourcefieldName": "客户类型",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择客户类型",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请选择客户类型",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": [
            {"label": "个人", "value": "personal"},
            {"label": "企业", "value": "enterprise"}
          ],//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "dynamicUrl": "system/dictionary/select", //请求地址
          "dynamicQuery": "ownerType",//请求参数
        },
        //家庭电话 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "tel",  //表单model字段名称
          "resourcefieldName": "家庭电话",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入家庭电话",//必填出错 提示信息
          "resourcefieldAllowblankexp": "tel",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入家庭电话",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //客户性质 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldNameEn": "ownerProperty",  //表单model字段名称
          "resourcefieldName": "客户性质",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择客户性质",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请选择客户性质",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "dynamicUrl": "system/dictionary/select", //请求地址
          "dynamicQuery": "ownerProperty",//请求参数
        },
        //客户等级 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldNameEn": "customerLevel",  //表单model字段名称
          "resourcefieldName": "客户等级",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择客户等级",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请选择客户等级",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "dynamicUrl": "system/dictionary/select", //请求地址
          "dynamicQuery": "customerLevel",//请求参数
        },
        //婚姻状况 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldNameEn": "marriage",  //表单model字段名称
          "resourcefieldName": "婚姻状况",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择婚姻状况",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请选择婚姻状况",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "dynamicUrl": "system/dictionary/select", //请求地址
          "dynamicQuery": "marriage",//请求参数
        },
        //文化程度 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldNameEn": "education",  //表单model字段名称
          "resourcefieldName": "文化程度",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择文化程度",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请选择文化程度",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "dynamicUrl": "system/dictionary/select", //请求地址
          "dynamicQuery": "education",//请求参数
        },
        //国籍/地区 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldNameEn": "nationality",  //表单model字段名称
          "resourcefieldName": "国籍/地区",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择国籍/地区",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请选择国籍/地区",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "dynamicUrl": "system/dictionary/select", //请求地址
          "dynamicQuery": "nationality",//请求参数
        },
        //行业 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldNameEn": "industry",  //表单model字段名称
          "resourcefieldName": "行业",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择行业",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请选择行业",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "dynamicUrl": "system/dictionary/select", //请求地址
          "dynamicQuery": "industry",//请求参数
        },
        //籍贯 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "origin",  //表单model字段名称
          "resourcefieldName": "籍贯",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入籍贯",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入籍贯",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //民族 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "nation",  //表单model字段名称
          "resourcefieldName": "民族",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入民族",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入民族",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //remote - select
        {
          "resourcefieldXtype": "select-remote",    //表单类型
          "resourcefieldNameEn": "searchInfo",  //表单model字段名称
          "resourcefieldName": "搜寻信息",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请搜寻",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请搜寻",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 600,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": [],//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
          "dynamicUrl": "system/dictionary/remoteTest",
          "dynamicQuery": null
        },
        //兴趣爱好 - checkbox
        {
          "resourcefieldXtype": "checkbox",    //表单类型
          "resourcefieldNameEn": "hobby",  //表单model字段名称
          "resourcefieldName": "兴趣爱好",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择兴趣爱好",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "array",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'normal',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 600,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": 0,//min
          "resourcefieldMaxvalue": 5,//max
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
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //所属项目（表格）- baseTable
        {
          "resourcefieldXtype": "baseTable",    //表单类型
          "resourcefieldNameEn": "mainHouseList",  //表单model字段名称
          "resourcefieldName": "",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入民族",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "object",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入民族",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 600,//表单元素部分宽度
          "fieldHeight": null,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          // "tableHead": 'autoFormTest'
        },
        //备注 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "remarks",  //表单model字段名称
          "resourcefieldName": "备注",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入备注信息",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'textarea',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 600,//表单元素部分宽度
          "fieldHeight": 64,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 2,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        /*==================== group 2 ==================== */
        //填写更多 - separator
        {
          "resourcefieldXtype": "separator",    //表单类型
          "resourcefieldNameEn": null,  //表单model字段名称
          "resourcefieldName": "填写更多",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 0,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfig": 'more',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": "fangchan",//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": ['click-groupSwitch'],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //省市区 - cascader
        {
          "resourcefieldXtype": "cascader",//表单类型
          "resourcefieldNameEn": "provincialandcity",//表单model字段名称
          "resourcefieldName": "省市区",//表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请选择省市区",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "array",//验证字段的 内容类型
          "resourcefieldOtherconfig": "normal",//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,
          "fieldHeight": 32,
          "resourcefieldMinvalue": null,
          "resourcefieldMaxvalue": null,
          "resourcefieldStep": null,
          "resourcefieldRowspan": null,
          "resourcefieldFieldcls": "search",
          "isResourcefieldEditable": false,
          "resourcefieldColspan": 1,
          "items": [
            {
              "value": "Mercedes",
              "label": "浙江",
              "children": [
                {
                  "value": "Car",
                  "label": "杭州",
                  "children": [
                    {
                      "value": "S-class",
                      "label": "西湖区"
                    },
                    {
                      "value": "E-class",
                      "label": "上城区"
                    }
                  ]
                },
                {
                  "value": "SUV",
                  "label": "宁波",
                  "children": [
                    {
                      "value": "gle",
                      "label": "鄞州区",
                      "isResourcefieldRemoved": true
                    },
                    {
                      "value": "glc",
                      "label": "江东区"
                    }
                  ]
                }
              ]
            },
            {
              "value": "BMW",
              "label": "江苏",
              "children": [
                {
                  "value": "Car",
                  "label": "苏州",
                  "children": [
                    {
                      "value": "7-class",
                      "label": "xxx"
                    },
                    {
                      "value": "5-class",
                      "label": "yyy"
                    }
                  ]
                },
                {
                  "value": "无锡",
                  "label": "无锡",
                  "children": [
                    {
                      "value": "X5",
                      "label": "xxx"
                    },
                    {
                      "value": "X3",
                      "label": "yyy"
                    }
                  ]
                }
              ]
            },
            {
              "value": "广东省",
              "label": "广东省",
              "children": [
                {
                  "value": "Car",
                  "label": "广州",
                  "children": [
                    {
                      "value": "A8-class",
                      "label": "xxx"
                    },
                    {
                      "value": "A6-class",
                      "label": "yyy"
                    }
                  ]
                },
                {
                  "value": "SUV",
                  "label": "深圳",
                  "children": [
                    {
                      "value": "Q7",
                      "label": "xxx"
                    },
                    {
                      "value": "Q5",
                      "label": "yyy"
                    }
                  ]
                }
              ]
            }
          ],
          "ddcode": null,
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": []//事件名称集合
        },
        //地址 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "address",  //表单model字段名称
          "resourcefieldName": null,   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 0,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入地址",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入地址",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //工作单位 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "company",  //表单model字段名称
          "resourcefieldName": "工作单位",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入工作单位",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入工作单位",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //单位电话 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "companyTel",  //表单model字段名称
          "resourcefieldName": "单位电话",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入单位电话",//必填出错 提示信息
          "resourcefieldAllowblankexp": "tel",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入单位电话",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //单位地址 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "companyAddress",  //表单model字段名称
          "resourcefieldName": "单位地址",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入单位地址",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入单位地址",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 600,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //电子邮箱 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "email",  //表单model字段名称
          "resourcefieldName": "电子邮箱",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入电子邮箱",//必填出错 提示信息
          "resourcefieldAllowblankexp": "email",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入电子邮箱",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //QQ号码 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "QQ",  //表单model字段名称
          "resourcefieldName": "QQ号码",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入QQ号码",//必填出错 提示信息
          "resourcefieldAllowblankexp": "QQ",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入QQ号码",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //紧急联系人 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "emergency",  //表单model字段名称
          "resourcefieldName": "紧急联系人",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入紧急联系人",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入紧急联系人",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //紧急联系人电话 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "emergencyTel",  //表单model字段名称
          "resourcefieldName": "紧急联系人电话",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入紧急联系人电话",//必填出错 提示信息
          "resourcefieldAllowblankexp": "tel",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入紧急联系人电话",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //========================================
        //separator
        {
          "resourcefieldXtype": "separator",    //表单类型
          "resourcefieldNameEn": null,  //表单model字段名称
          "resourcefieldName": "其他信息",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 0,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfig": 'simple',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": "gailan",//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": ['click-groupSwitch']//事件名称集合
        },
        //户口所在地 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "registered",  //表单model字段名称
          "resourcefieldName": "户口所在地",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入户口所在地",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入户口所在地",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //居住形态 - radio
        {
          "resourcefieldXtype": "radio",    //表单类型
          "resourcefieldNameEn": "liveState",  //表单model字段名称
          "resourcefieldName": "居住形态",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请选择居住形态",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'normal',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请选择居住形态",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 250,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //特殊身份 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldNameEn": "specialIdentity",  //表单model字段名称
          "resourcefieldName": "特殊身份",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入特殊身份",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfig": 'text',//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": "请输入特殊身份",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //是否贷款 - switch
        {
          "resourcefieldXtype": "switch",    //表单类型
          "resourcefieldNameEn": "isloan",  //表单model字段名称
          "resourcefieldName": "是否贷款",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "是否贷款",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "boolean",//验证字段的内容类型
          "resourcefieldOtherconfig": null,//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 200,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "resourcefieldMinvalue": null,//min
          "resourcefieldMaxvalue": null,//max
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
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //还贷金额 - slider-range
        {
          "resourcefieldXtype": "slider-range",//表单类型
          "resourcefieldNameEn": "loanMonery",//表单model字段名称
          "resourcefieldName": "还贷金额(千)",
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false,
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "array",//验证字段的内容类型
          "resourcefieldOtherconfig": null,//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 550,//表单元素部分宽度
          "fieldHeight": null,//表单元素部分高度
          "resourcefieldMinvalue": 1,
          "resourcefieldMaxvalue": 100,
          "resourcefieldStep": 1,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,
          "isResourcefieldEditable": false,
          "resourcefieldColspan": 2,
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": []//事件名称集合
        },
        //购房金额 - slider
        {
          "resourcefieldXtype": "slider",//表单类型
          "resourcefieldNameEn": "houseMoney",//表单model字段名称
          "resourcefieldName": "购房金额(万)",
          "funcinfoFormlabelwidth": 100,//表单字段 lable 宽度
          "isfieldRequired": false,
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "number",//验证字段的内容类型
          "resourcefieldOtherconfig": null,//表单控件分支小类type,如input=>input-text,input-textere
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 550,//表单元素部分宽度
          "fieldHeight": null,//表单元素部分高度
          "resourcefieldMinvalue": 100,
          "resourcefieldMaxvalue": 1000,
          "resourcefieldStep": 10,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,
          "isResourcefieldEditable": false,
          "resourcefieldColspan": 2,
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": []//事件名称集合
        },
      ]
    }
  },
}

export default {
  autoform: () => {
    return formMap.autoform
  },
}
