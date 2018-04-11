import {param2Obj} from "@/utils"
import {errorMap} from "../../error/error"
import $store from '@/store/index'
import * as store from "@/utils/nsQuery/nsStore"
import ns from "@/utils/nsQuery/nsQuery"

const formMap = {
  //个人客户
  "personalOwner": {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": {
      //v-model 绑定字段对象
      "modelData": {
        "userAvatar": [{"fileName": "test-picture", "fileUrl": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"}],//用户头像上传
        "name": "",//客户姓名
        "project": "",//所属项目
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
        "hobby": [],//兴趣爱好
        "remarks": "",//备注
        "provinceCityArea": {
          "province": "",
          "city": "",
          "area": "",
        },
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
      },
      //表单信息
      "info": {
        "funcinfoFormlabelwidth": 150,
        "funcinfoFormcols": 2    //表单所占列数
      },
      //表单控件循环信息
      "fields": [
        /*==================== group 1 ==================== */
        //separator
        {
          "resourcefieldXtype": "separator",    //表单类型
          "resourcefieldCode": null,  //表单model字段名称
          "resourcefieldName": "基本信息",   //表单字段 lable 名称
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
        //upload
        {
          "resourcefieldXtype": "upload",    //表单类型
          "resourcefieldCode": "userAvatar",  //表单model字段名称
          "resourcefieldName": "",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "picture-single",//表单控件分支小类type,如input=>input-text,input-textere
            "label-width": 150,
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 200,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": [],
        },
        //客户姓名 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "name",  //表单model字段名称
          "resourcefieldName": "姓名",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入姓名",//必填出错 提示信息
          "resourcefieldAllowblankexp": "NumEn",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "请输入姓名",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //所属项目 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "project",  //表单model字段名称
          "resourcefieldName": "所属项目",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入所属项目",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text"//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "请输入所属项目",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //移动电话 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "mobile",  //表单model字段名称
          "resourcefieldName": "移动电话",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入移动电话",//必填出错 提示信息
          "resourcefieldAllowblankexp": "mobile",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text"//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "请输入移动电话",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
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
          "resourcefieldOtherconfigObject": {
            "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
            "dynamicUrl": "system/dictionary/select", //请求地址
            "dynamicQuery": "cardType",//请求参数
            "min": undefined,//min
            "max": undefined,//max
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
            {"value": "carded", "label": "身份证"},
            {"value": "studentCard", "label": "学生证"},
            {"value": "driverCard", "label": "驾驶证"},
            {"value": "disabilityCard", "label": "残疾证"},
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
          },
          "resourcefieldEmptytext": "请输入证件号码",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
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
            "dynamicUrl": "system/dictionary/select", //请求地址
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
            {"label": "男", "value": "man"},
            {"label": "女", "value": "woman"}
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
          },
          "resourcefieldEmptytext": "请选择出生日期",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
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
            {"label": "个人", "value": "0"},
            {"label": "企业", "value": "1"}
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
          },
          "resourcefieldEmptytext": "请输入家庭电话",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
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
            "dynamicUrl": "system/dictionary/select", //请求地址
            "dynamicQuery": "marriage",//请求参数
            "min": undefined,//min
            "max": undefined,//max
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
            {"label": "已婚", "value": "married"},
            {"label": "未婚", "value": "unmarried"},
            {"label": "保密", "value": "secrecy"}
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
            "dynamicUrl": "system/dictionary/select", //请求地址
            "dynamicQuery": "education",//请求参数
            "min": undefined,//min
            "max": undefined,//max
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
            {"label": "高中", "value": "high-school"},
            {"label": "大专", "value": "Junior-College"},
            {"label": "本科", "value": "Undergraduate"},
            {"label": "研究生", "value": "graduate"},
            {"label": "博士", "value": "doctorate"},
            {"label": "其他", "value": "other"}
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
            "dynamicUrl": "system/dictionary/select", //请求地址
            "dynamicQuery": "nationality",//请求参数
            "min": undefined,//min
            "max": undefined,//max
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
            {"label": "CN 中国", "value": "CN"},
            {"label": "其他", "value": "other"}
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
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择行业",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
            "dynamicUrl": "system/dictionary/select", //请求地址
            "dynamicQuery": "industry",//请求参数
            "min": undefined,//min
            "max": undefined,//max
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
            {"label": "软件和信息技术服务", "value": "software"},
            {"label": "法律", "value": "Law"},
            {"label": "医疗", "value": "medical"},
            {"label": "教育", "value": "education"},
            {"label": "机械制造", "value": "machinery"},
            {"label": "其他", "value": "other"}
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
          "src": "",//图片操作地址（获取地址，上传地址）
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
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 237,//表单元素部分高度
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 10,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        /*==================== group 2 ==================== */
        //group2 - (省市区/居住形态/工作单位/单位电话/单位地址/电子邮箱/QQ号码/紧急联系人/紧急联系人电话)
        {
          "resourcefieldXtype": "group",    //表单类型
          "resourcefieldCode": "group",  //表单model字段名称
          "resourcefieldName": "",   //表单字段 lable 名称
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
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": [],
          "resourcefieldConfiginfo": 2,//分组框内部最大列数
          "children": [
            //联系信息 - separator
            {
              "resourcefieldXtype": "separator",    //表单类型
              "resourcefieldCode": null,  //表单model字段名称
              "resourcefieldName": "联系信息",   //表单字段 lable 名称
              "funcinfoFormlabelwidth": 0,//表单字段 lable 宽度
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
              "resourcefieldFieldcls": "fangchan",//表单控件图标
              "isResourcefieldEditable": false,//是否可编辑
              "resourcefieldColspan": 2,//所占列数
              "items": null,//表单控件内容部分（checkbox，radio......）
              "resourcefieldGroupname": "more-info", //分组名称
              "isResourcefieldHidden": false,       //是否隐藏
              "resourcefieldBindingfnList": ["click-groupSwitch"],//事件名称集合
            },
            //省市区 - select
            {
              "resourcefieldXtype": "select",//表单类型
              "resourcefieldCode": "provinceCityArea",//表单model字段名称
              "resourcefieldName": "省市区",//表单字段 lable 名称
              "isfieldRequired": false, //是否必填 required
              "resourcefieldBinding": "请选择省市区",//必填出错 提示信息
              "resourcefieldAllowblankexp": null,//内容验证规则
              "resourcefieldVtype": "array",//验证字段的 内容类型
              "resourcefieldOtherconfigObject": {
                "secondXtype": "area",//表单控件分支小类type,如input=>input-text,input-textere
                "dynamicUrl": "/owner/customer/initProvinceCityArea",
                "dynamicQuery": "1",
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
              "ddcode": null,
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
            //========================================
            //separator
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
              "resourcefieldBindingfnList": ["click-groupSwitch"]//事件名称集合
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
                {"label": "和子女", "value": "hezinv"},
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
          ]
        },
      ]
    }
  },
  //企业客户
  "companyOwner": {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": {
      //v-model 绑定字段对象
      "modelData": {
        "name": "",//客户姓名
        "legalPerson": "",//法人代表
        "companyNature": "",//企业性质
        "mobile": "",//移动电话
        "cardType": "",//证件类型
        "cardNum": "",//证件号码
        "ownerType": "",//客户类型
        "contacts": "",//联系人
        "ownerProperty": "",//客户性质
        "contactsMobile": "",//联系人电话
        "customerLevel": "",//客户等级
        "number": "",//公司人数
        "industry": "",//行业
        "mainHouseList": [
          {"ownerPrecinct": "天泓山庄", "ownerHouse": "桃李春风-商铺-商铺1310（租户）"},
          {"ownerPrecinct": "桃李春风", "ownerHouse": ""}
        ],//所属项目（表格）
        "remarks": "",//备注
        "provinceCityArea": {
          "province": "",
          "city": "",
          "area": "",
        },
        "address": "",//地址
        "company": "",//工作单位
        "companyTel": "",//单位电话
        "companyAddress": "",//单位地址
        "registered": "",//户口所在地
        "liveState": "",//居住形态
        "specialIdentity": "",//特殊身份

      },
      //表单信息
      "info": {
        "funcinfoFormlabelwidth": 150,
        "funcinfoFormcols": 2    //表单所占列数
      },
      //表单控件循环信息
      "fields": [
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
          "resourcefieldBindingfnList": []//事件名称集合
        },
        //客户名称 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "name",  //表单model字段名称
          "resourcefieldName": "客户名称",   //表单字段 lable 名称
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入客户名称",//placeholder的值
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
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //法人代表 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "legalPerson",  //表单model字段名称
          "resourcefieldName": "法人代表",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入法人代表",//placeholder的值
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
        //企业性质 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "companyNature",  //表单model字段名称
          "resourcefieldName": "企业性质",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入企业性质",//placeholder的值
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
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
            "dynamicUrl": "system/dictionary/select", //请求地址
            "dynamicQuery": "cardType",//请求参数
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
            {"value": "carded", "label": "身份证"},
            {"value": "studentCard", "label": "学生证"},
            {"value": "driverCard", "label": "驾驶证"},
            {"value": "disabilityCard", "label": "残疾证"},
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
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
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
        //客户类型 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldCode": "ownerType",  //表单model字段名称
          "resourcefieldName": "客户类型",   //表单字段 lable 名称
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
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
            {"label": "个人", "value": "0"},
            {"label": "企业", "value": "1"}
          ],//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //联系人 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "contacts",  //表单model字段名称
          "resourcefieldName": "联系人",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入联系人",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入联系人",//placeholder的值
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
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
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
            {"label": "业主", "value": "owner"},
            {"label": "租户", "value": "tenant"}
          ],//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //联系人电话 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "contactsMobile",  //表单model字段名称
          "resourcefieldName": "联系人电话",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入联系人电话",//必填出错 提示信息
          "resourcefieldAllowblankexp": "mobile",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入联系人电话",//placeholder的值
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
        //客户等级 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldCode": "customerLevel",  //表单model字段名称
          "resourcefieldName": "客户等级",   //表单字段 lable 名称
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
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
            {"label": "VIP", "value": "VIP"},
            {"label": "NORMAL", "value": "NORMAL"}
          ],//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //公司人数 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "number",  //表单model字段名称
          "resourcefieldName": "联系人电话",   //表单字段 lable 名称
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入公司人数 ",//placeholder的值
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
        //行业 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldCode": "industry",  //表单model字段名称
          "resourcefieldName": "行业",   //表单字段 lable 名称
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
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
            {"label": "软件和信息技术服务", "value": "software"},
            {"label": "法律", "value": "Law"},
            {"label": "医疗", "value": "medical"},
            {"label": "教育", "value": "education"},
            {"label": "机械制造", "value": "machinery"},
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
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入民族",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 600,//表单元素部分宽度
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
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "textarea",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入备注信息",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 64,//表单元素部分高度
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 2,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        /*==================== group 2 ==================== */
        //填写更多 - group
        {
          "resourcefieldXtype": "group",    //表单类型
          "resourcefieldCode": "group",  //表单model字段名称
          "resourcefieldName": "",   //表单字段 lable 名称
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
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": [],
          "resourcefieldConfiginfo": 2,//分组框内部最大列数
          "children": [
            {
              "resourcefieldXtype": "separator",    //表单类型
              "resourcefieldCode": null,  //表单model字段名称
              "resourcefieldName": "填写更多",   //表单字段 lable 名称
              "funcinfoFormlabelwidth": 0,//表单字段 lable 宽度
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
              "resourcefieldFieldcls": "fangchan",//表单控件图标
              "isResourcefieldEditable": false,//是否可编辑
              "resourcefieldColspan": 2,//所占列数
              "items": null,//表单控件内容部分（checkbox，radio......）
              "resourcefieldGroupname": "more-info", //分组名称
              "isResourcefieldHidden": false,       //是否隐藏
              "resourcefieldBindingfnList": ["click-groupSwitch"],//事件名称集合
            },
            {
              "resourcefieldXtype": "separator",    //表单类型
              "resourcefieldCode": null,  //表单model字段名称
              "resourcefieldName": "联系信息",   //表单字段 lable 名称
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
              "resourcefieldBindingfnList": ["click-groupSwitch"]//事件名称集合
            },
            //省市区 - select
            {
              "resourcefieldXtype": "select",//表单类型
              "resourcefieldCode": "provinceCityArea",//表单model字段名称
              "resourcefieldName": "省市区",//表单字段 lable 名称
              "isfieldRequired": false, //是否必填 required
              "resourcefieldBinding": "请选择省市区",//必填出错 提示信息
              "resourcefieldAllowblankexp": null,//内容验证规则
              "resourcefieldVtype": "array",//验证字段的 内容类型
              "resourcefieldOtherconfigObject": {
                "secondXtype": "area",//表单控件分支小类type,如input=>input-text,input-textere
                "dynamicUrl": "/owner/customer/initProvinceCityArea",
                "dynamicQuery": "1",
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
              "ddcode": null,
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
            //公司传真 - input
            {
              "resourcefieldXtype": "input",    //表单类型
              "resourcefieldCode": "fax",  //表单model字段名称
              "resourcefieldName": "公司传真",   //表单字段 lable 名称
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
            //========================================
            //separator
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
              "resourcefieldBindingfnList": ["click-groupSwitch"]//事件名称集合
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
            //特殊身份 - select
            {
              "resourcefieldXtype": "select",    //表单类型
              "resourcefieldCode": "specialIdentity",  //表单model字段名称
              "resourcefieldName": "特殊身份",   //表单字段 lable 名称
              "isfieldRequired": false, //是否必填 required
              "resourcefieldBinding": "请输入特殊身份",//必填出错 提示信息
              "resourcefieldAllowblankexp": null,//内容验证规则
              "resourcefieldVtype": "string",//验证字段的 内容类型
              "resourcefieldOtherconfigObject": {
                "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
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
              "items": [
                {"label": "雷神", "value": "thor"},
                {"label": "蜘蛛侠", "value": "spoderman"},
                {"label": "超人", "value": "superman"}
              ],//表单控件内容部分（checkbox，radio......）
              "resourcefieldGroupname": "more-info", //分组名称
              "isResourcefieldHidden": true,       //是否隐藏
              "resourcefieldBindingfnList": [],//事件名称集合
            },
          ]
        }
      ]
    }
  },
  //新增装修
  "addDecorationForm": {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": {
      //v-model 绑定字段对象
      "modelData": {
        "houseName": "天泓山庄-香山苑-1-1-102", //房产名称
        "ownerName": "刘明", //业主名称
        "ownerCertificate": "342423198702112870", //证件号码
        "ownerMobile": "15868851535", //移动电话
        "lesseeName": "刘俊峰", //租户名称
        "lesseeMobile": "15868851666", //租户移动电话
        "applyDate": "", //申请日期
        "startDate": "", //装修日期
        "endDate": "", //装修日期
        "remark": "", //备注
        "createTime": "2017-09-12 11:20:30", //登记日期
        "createUserName": "李春", //登记人
        "updateTime": "2017-09-13 11:20:30", //修改日期
        "updateUserName": "赵春", //修改人

      },
      //表单信息
      "info": {
        "funcinfoFormlabelwidth": 150,
        "funcinfoFormcols": 2 //表单所占列数
      },
      //表单控件循环信息
      "fields": [
        //separator
        {
          "resourcefieldXtype": "separator", //表单类型
          "resourcefieldCode": "info", //表单model字段名称
          "resourcefieldName": "新增装修", //表单字段 lable 名称
          "funcinfoFormlabelwidth": 100, //表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null, //必填出错 提示信息
          "resourcefieldAllowblankexp": null, //内容验证规则
          "resourcefieldVtype": null, //验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "simple",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null, //placeholder的值
          "isResourcefieldRemoved": false, //是否禁用
          "isResourcefieldReadonly": false, //是否只读
          "fieldWidth": 700, //表单元素部分宽度
          "fieldHeight": 32, //表单元素部分高度
          "min": null, //min
          "max": null, //max
          "resourcefieldStep": null, //step 步长
          "resourcefieldRowspan": 1, //row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null, //表单控件图标
          "isResourcefieldEditable": false, //是否可编辑
          "resourcefieldColspan": 2, //所占列数
          "items": null, //表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false, //是否隐藏
          "resourcefieldBindingfnList": [], //事件名称集合
        },
        /*==================== group 1 ==================== */
        //房产名称 - span
        {
          "resourcefieldXtype": "text", //表单类型
          "resourcefieldCode": "houseName", //表单model字段名称
          "resourcefieldName": "房产名称", //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null, //必填出错 提示信息
          "resourcefieldAllowblankexp": null, //内容验证规则
          "resourcefieldVtype": null, //验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "span",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null, //placeholder的值
          "isResourcefieldRemoved": false, //是否禁用
          "isResourcefieldReadonly": false, //是否只读
          "fieldWidth": 350, //表单元素部分宽度
          "fieldHeight": 32, //表单元素部分高度
          "min": null, //min
          "max": null, //max
          "resourcefieldStep": null, //step 步长
          "resourcefieldRowspan": 1, //row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null, //表单控件图标
          "isResourcefieldEditable": false, //是否可编辑
          "resourcefieldColspan": 2, //所占列数
          "items": null, //表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false, //是否隐藏
          "resourcefieldBindingfnList": [], //事件名称集合
        },
        //业主名称 - span
        {
          "resourcefieldXtype": "text", //表单类型
          "resourcefieldCode": "ownerName", //表单model字段名称
          "resourcefieldName": "业主名称", //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150, //表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null, //必填出错 提示信息
          "resourcefieldAllowblankexp": null, //内容验证规则
          "resourcefieldVtype": null, //验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "span",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null, //placeholder的值
          "isResourcefieldRemoved": false, //是否禁用
          "isResourcefieldReadonly": false, //是否只读
          "fieldWidth": 350, //表单元素部分宽度
          "fieldHeight": 32, //表单元素部分高度
          "min": null, //min
          "max": null, //max
          "resourcefieldStep": null, //step 步长
          "resourcefieldRowspan": 1, //row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null, //表单控件图标
          "isResourcefieldEditable": false, //是否可编辑
          "resourcefieldColspan": 2, //所占列数
          "items": null, //表单控件内容部分（checkbox，radio......）
          "ddcode": null, //表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false, //是否隐藏
          "resourcefieldBindingfnList": [], //事件名称集合
        },
        //证件号码 - input
        {
          "resourcefieldXtype": "input", //表单类型
          "resourcefieldCode": "ownerCertificate", //表单model字段名称
          "resourcefieldName": "证件号码", //表单字段 lable 名称
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null, //必填出错 提示信息
          "resourcefieldAllowblankexp": null, //内容验证规则
          "resourcefieldVtype": "string", //验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null, //placeholder的值
          "isResourcefieldRemoved": true, //是否禁用
          "isResourcefieldReadonly": true, //是否只读
          "fieldWidth": 350, //表单元素部分宽度
          "fieldHeight": 32, //表单元素部分高度
          "min": null, //min
          "max": null, //max
          "resourcefieldStep": null, //step 步长
          "resourcefieldRowspan": null, //row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null, //表单控件图标
          "isResourcefieldEditable": false, //是否可编辑
          "resourcefieldColspan": 2, //所占列数
          "items": null, //表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false, //是否隐藏
          "resourcefieldBindingfnList": [], //事件名称集合
        },
        //移动电话 - input
        {
          "resourcefieldXtype": "input", //表单类型
          "resourcefieldCode": "ownerMobile", //表单model字段名称
          "resourcefieldName": "移动电话", //表单字段 lable 名称
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null, //必填出错 提示信息
          "resourcefieldAllowblankexp": null, //内容验证规则
          "resourcefieldVtype": "string", //验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null, //placeholder的值
          "isResourcefieldRemoved": true, //是否禁用
          "isResourcefieldReadonly": true, //是否只读
          "fieldWidth": 350, //表单元素部分宽度
          "fieldHeight": 32, //表单元素部分高度
          "min": null, //min
          "max": null, //max
          "resourcefieldStep": null, //step 步长
          "resourcefieldRowspan": null, //row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null, //表单控件图标
          "isResourcefieldEditable": false, //是否可编辑
          "resourcefieldColspan": 2, //所占列数
          "items": null, //表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false, //是否隐藏
          "resourcefieldBindingfnList": [], //事件名称集合
        },
        //租户名称 - input
        {
          "resourcefieldXtype": "text", //表单类型
          "resourcefieldCode": "lesseeName", //表单model字段名称
          "resourcefieldName": "租户名称", //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null, //必填出错 提示信息
          "resourcefieldAllowblankexp": null, //内容验证规则
          "resourcefieldVtype": null, //验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "span",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null, //placeholder的值
          "isResourcefieldRemoved": false, //是否禁用
          "isResourcefieldReadonly": false, //是否只读
          "fieldWidth": 350, //表单元素部分宽度
          "fieldHeight": 32, //表单元素部分高度
          "min": null, //min
          "max": null, //max
          "resourcefieldStep": null, //step 步长
          "resourcefieldRowspan": 1, //row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null, //表单控件图标
          "isResourcefieldEditable": false, //是否可编辑
          "resourcefieldColspan": 2, //所占列数
          "items": null, //表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false, //是否隐藏
          "resourcefieldBindingfnList": [], //事件名称集合
        },
        //移动电话 - input
        {
          "resourcefieldXtype": "input", //表单类型
          "resourcefieldCode": "lesseeMobile", //表单model字段名称
          "resourcefieldName": "移动电话", //表单字段 lable 名称
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": null, //必填出错 提示信息
          "resourcefieldAllowblankexp": null, //内容验证规则
          "resourcefieldVtype": "string", //验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null, //placeholder的值
          "isResourcefieldRemoved": true, //是否禁用
          "isResourcefieldReadonly": false, //是否只读
          "fieldWidth": 350, //表单元素部分宽度
          "fieldHeight": 32, //表单元素部分高度
          "min": null, //min
          "max": null, //max
          "resourcefieldStep": null, //step 步长
          "resourcefieldRowspan": null, //row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null, //表单控件图标
          "isResourcefieldEditable": false, //是否可编辑
          "resourcefieldColspan": 2, //所占列数
          "items": null, //表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false, //是否隐藏
          "resourcefieldBindingfnList": [], //事件名称集合
        },
        //申请日期 - datepicker
        {
          "resourcefieldXtype": "datepicker", //表单类型
          "resourcefieldCode": "applyDate", //表单model字段名称
          "resourcefieldName": "申请日期", //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择申请日期", //必填出错 提示信息
          "resourcefieldAllowblankexp": null, //内容验证规则
          "resourcefieldVtype": "date", //验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "请选择申请日期", //placeholder的值
          "isResourcefieldRemoved": false, //是否禁用
          "isResourcefieldReadonly": false, //是否只读
          "fieldWidth": 350, //表单元素部分宽度
          "fieldHeight": 32, //表单元素部分高度
          "min": null, //min
          "max": null, //max
          "resourcefieldStep": null, //step 步长
          "resourcefieldRowspan": null, //row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null, //表单控件图标
          "isResourcefieldEditable": false, //是否可编辑
          "resourcefieldColspan": 2, //所占列数
          "items": null, //表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false, //是否隐藏
          "resourcefieldBindingfnList": [], //事件名称集合
        },
        //装修日期(startDate) - datepicker
        {
          "resourcefieldXtype": "datepicker", //表单类型
          "resourcefieldCode": "startDate", //表单model字段名称
          "resourcefieldName": "装修日期", //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择装修日期", //必填出错 提示信息
          "resourcefieldAllowblankexp": null, //内容验证规则
          "resourcefieldVtype": "date", //验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "请选择装修日期", //placeholder的值
          "isResourcefieldRemoved": false, //是否禁用
          "isResourcefieldReadonly": false, //是否只读
          "fieldWidth": 350, //表单元素部分宽度
          "fieldHeight": 32, //表单元素部分高度
          "min": null, //min
          "max": null, //max
          "resourcefieldStep": null, //step 步长
          "resourcefieldRowspan": null, //row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null, //表单控件图标
          "isResourcefieldEditable": false, //是否可编辑
          "resourcefieldColspan": 1, //所占列数
          "items": null, //表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false, //是否隐藏
          "resourcefieldBindingfnList": [], //事件名称集合
        },
        //装修日期(endDate) - datepicker
        {
          "resourcefieldXtype": "datepicker", //表单类型
          "resourcefieldCode": "endDate", //表单model字段名称
          "resourcefieldName": "~", //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择装修日期（结束）", //必填出错 提示信息
          "resourcefieldAllowblankexp": null, //内容验证规则
          "resourcefieldVtype": "date", //验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "label-width": 50,
            "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null, //placeholder的值
          "isResourcefieldRemoved": false, //是否禁用
          "isResourcefieldReadonly": false, //是否只读
          "fieldWidth": 250, //表单元素部分宽度
          "fieldHeight": 32, //表单元素部分高度
          "min": null, //min
          "max": null, //max
          "resourcefieldStep": null, //step 步长
          "resourcefieldRowspan": null, //row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null, //表单控件图标
          "isResourcefieldEditable": false, //是否可编辑
          "resourcefieldColspan": 1, //所占列数
          "items": null, //表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false, //是否隐藏
          "resourcefieldBindingfnList": [], //事件名称集合
        },
        //备注 - input
        {
          "resourcefieldXtype": "input", //表单类型
          "resourcefieldCode": "remark", //表单model字段名称
          "resourcefieldName": "备注", //表单字段 lable 名称
          "isfieldRequired": null, //是否必填 required
          "resourcefieldBinding": "请输入备注信息", //必填出错 提示信息
          "resourcefieldAllowblankexp": null, //内容验证规则
          "resourcefieldVtype": "string", //验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "textarea",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "请输入备注信息", //placeholder的值
          "isResourcefieldRemoved": false, //是否禁用
          "isResourcefieldReadonly": false, //是否只读
          "fieldWidth": 350, //表单元素部分宽度
          "fieldHeight": 64, //表单元素部分高度
          "min": null, //min
          "max": null, //max
          "resourcefieldStep": null, //step 步长
          "resourcefieldRowspan": 2, //row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null, //表单控件图标
          "isResourcefieldEditable": false, //是否可编辑
          "resourcefieldColspan": 2, //所占列数
          "items": null, //表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false, //是否隐藏
          "resourcefieldBindingfnList": [], //事件名称集合
        },
        /*==================== group 2 ==================== */
        //操作信息 - separator
        {
          "resourcefieldXtype": "separator", //表单类型
          "resourcefieldCode": null, //表单model字段名称
          "resourcefieldName": "操作信息", //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null, //必填出错 提示信息
          "resourcefieldAllowblankexp": null, //内容验证规则
          "resourcefieldVtype": null, //验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "more",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null, //placeholder的值
          "isResourcefieldRemoved": false, //是否禁用
          "isResourcefieldReadonly": false, //是否只读
          "fieldWidth": 700, //表单元素部分宽度
          "fieldHeight": 32, //表单元素部分高度
          "min": null, //min
          "max": null, //max
          "resourcefieldStep": null, //step 步长
          "resourcefieldRowspan": null, //row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": "fangchan", //表单控件图标
          "isResourcefieldEditable": false, //是否可编辑
          "resourcefieldColspan": 2, //所占列数
          "items": null, //表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": false, //是否隐藏
          "resourcefieldBindingfnList": ["click-groupSwitch"], //事件名称集合
        },
        //登记日期 - span
        {
          "resourcefieldXtype": "text", //表单类型
          "resourcefieldCode": "createTime", //表单model字段名称
          "resourcefieldName": "登记日期", //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null, //必填出错 提示信息
          "resourcefieldAllowblankexp": null, //内容验证规则
          "resourcefieldVtype": null, //验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "span",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null, //placeholder的值
          "isResourcefieldRemoved": false, //是否禁用
          "isResourcefieldReadonly": false, //是否只读
          "fieldWidth": 350, //表单元素部分宽度
          "fieldHeight": 32, //表单元素部分高度
          "min": null, //min
          "max": null, //max
          "resourcefieldStep": null, //step 步长
          "resourcefieldRowspan": 1, //row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null, //表单控件图标
          "isResourcefieldEditable": false, //是否可编辑
          "resourcefieldColspan": 2, //所占列数
          "items": null, //表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": false, //是否隐藏
          "resourcefieldBindingfnList": [], //事件名称集合
        },
        //登记人 - span
        {
          "resourcefieldXtype": "text", //表单类型
          "resourcefieldCode": "createUserName", //表单model字段名称
          "resourcefieldName": "登记人", //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null, //必填出错 提示信息
          "resourcefieldAllowblankexp": null, //内容验证规则
          "resourcefieldVtype": null, //验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "span",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null, //placeholder的值
          "isResourcefieldRemoved": false, //是否禁用
          "isResourcefieldReadonly": false, //是否只读
          "fieldWidth": 350, //表单元素部分宽度
          "fieldHeight": 32, //表单元素部分高度
          "min": null, //min
          "max": null, //max
          "resourcefieldStep": null, //step 步长
          "resourcefieldRowspan": 1, //row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null, //表单控件图标
          "isResourcefieldEditable": false, //是否可编辑
          "resourcefieldColspan": 2, //所占列数
          "items": null, //表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": false, //是否隐藏
          "resourcefieldBindingfnList": [], //事件名称集合
        },
        //修改日期 - text
        {
          "resourcefieldXtype": "text", //表单类型
          "resourcefieldCode": "updateTime", //表单model字段名称
          "resourcefieldName": "修改日期", //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null, //必填出错 提示信息
          "resourcefieldAllowblankexp": null, //内容验证规则
          "resourcefieldVtype": null, //验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "span",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null, //placeholder的值
          "isResourcefieldRemoved": false, //是否禁用
          "isResourcefieldReadonly": false, //是否只读
          "fieldWidth": 350, //表单元素部分宽度
          "fieldHeight": 32, //表单元素部分高度
          "min": null, //min
          "max": null, //max
          "resourcefieldStep": null, //step 步长
          "resourcefieldRowspan": 1, //row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null, //表单控件图标
          "isResourcefieldEditable": false, //是否可编辑
          "resourcefieldColspan": 2, //所占列数
          "items": null, //表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": false, //是否隐藏
          "resourcefieldBindingfnList": [], //事件名称集合
        },
        //修改人 - input
        {
          "resourcefieldXtype": "text", //表单类型
          "resourcefieldCode": "updateUserName", //表单model字段名称
          "resourcefieldName": "修改人", //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null, //必填出错 提示信息
          "resourcefieldAllowblankexp": null, //内容验证规则
          "resourcefieldVtype": null, //验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "span",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null, //placeholder的值
          "isResourcefieldRemoved": false, //是否禁用
          "isResourcefieldReadonly": false, //是否只读
          "fieldWidth": 350, //表单元素部分宽度
          "fieldHeight": 32, //表单元素部分高度
          "min": null, //min
          "max": null, //max
          "resourcefieldStep": null, //step 步长
          "resourcefieldRowspan": 1, //row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null, //表单控件图标
          "isResourcefieldEditable": false, //是否可编辑
          "resourcefieldColspan": 2, //所占列数
          "items": null, //表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": false, //是否隐藏
          "resourcefieldBindingfnList": [], //事件名称集合
        },
      ]
    }
  },
  //新增收房
  "addReceiveHouse": {
    "resultCode": "200",
    "resultMsg": "模板自动表单请求数据操作成功",
    "resultData": {
      //v-model 绑定字段对象
      "modelData": {
        "info": "",//说明
        "houseName": "天泓山庄-香山苑-1幢-1单元-102",//房产名称
        "ownerId": "滨江天泓山庄有限公司",//开发商
        "newOwner": "刘秀峰",//新业主
        "add": "",
        "certificate": "",//证件号码
        "mobile": "",//移动电话
        "isMainHouse": "",//是否主房产
        "salesDate": "",//售楼日期
        "takeDate": "",//收房日期
        "checkInDate": "",//入住日期
        "remarks": "",//备注
      },
      //表单信息
      "info": {
        "funcinfoFormlabelwidth": 150,
        "funcinfoFormcols": 2    //表单所占列数
      },
      //表单控件循环信息
      "fields": [
        //separator
        {
          "resourcefieldXtype": "separator",    //表单类型
          "resourcefieldCode": "info",  //表单model字段名称
          "resourcefieldName": "新增收房",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "sample",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspanpan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": []
        },
        /*==================== group 1 ==================== */

        //房产名称
        {
          "resourcefieldXtype": "text",    //表单类型
          "resourcefieldCode": "houseName",  //表单model字段名称
          "resourcefieldName": "房产名称",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "span",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": []
        },
        //开发商
        {
          "resourcefieldXtype": "text",    //表单类型
          "resourcefieldCode": "ownerId",  //表单model字段名称
          "resourcefieldName": "开发商",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "span",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": []
        },

        //新业主 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "newOwner",  //表单model字段名称
          "resourcefieldName": "新业主",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入新业主姓名",//必填出错 提示信息
          "resourcefieldAllowblankexp": "NumEn",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "请输入新业主姓名",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
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
        //新增 - input
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldCode": null,  //表单model字段名称
          "resourcefieldName": "",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "label-width": 10,
          },
          "resourcefieldEmptytext": "新增",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 110,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": [
            {
              "label": "个人", "value": "personal"
            },
            {"label": "企业", "value": "company"}
          ],//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //证件号码 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "certificate",  //表单model字段名称
          "resourcefieldName": "证件号码",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": "carded",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
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
          },
          "resourcefieldEmptytext": "请输入移动电话",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //是否主房产 - checkbox
        {
          "resourcefieldXtype": "radio",    //表单类型
          "resourcefieldCode": "isMainHouse",  //表单model字段名称
          "resourcefieldName": "是否主房产",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "array",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": 0,//min
          "max": 1,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": [
            {"label": "是", "value": "true"},
            {"label": "否", "value": "false"},

          ],//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //售楼日期 - datepicker
        {
          "resourcefieldXtype": "datepicker",    //表单类型
          "resourcefieldCode": "salesDate",  //表单model字段名称
          "resourcefieldName": "售楼日期",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择售楼日期",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "date",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
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
        //收房日期 - datepicker
        {
          "resourcefieldXtype": "datepicker",    //表单类型
          "resourcefieldCode": "takeDate",  //表单model字段名称
          "resourcefieldName": "收房日期",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择收房日期",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "date",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
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
        //入住日期 - datepicker
        {
          "resourcefieldXtype": "datepicker",    //表单类型
          "resourcefieldCode": "checkInDate",  //表单model字段名称
          "resourcefieldName": "入住日期",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
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
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入备注信息",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "textarea",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 600,//表单元素部分宽度
          "fieldHeight": 64,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 2,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },

      ]
    }
  },
  //新增转租
  "addLease": {
    "resultCode": "200",
    "resultMsg": "模板自动表单请求数据操作成功",
    "resultData": {
      //v-model 绑定字段对象
      "modelData": {
        "info": "",//说明
        "houseName": "天泓山庄-香山苑-1幢-1单元-102",//房产名称
        "ownerId": "董宇全",//业主
        "oldRentOwner": "宋逸",//原租户
        "certificate1": "",//证件号码
        "mobile1": "",//移动电话
        "provinceCityArea": [],//详细地址
        "salesDate": "",//退租日期
        "newRentOwner": "",//新租户
        "add": "",//新增
        "certificate2": "",//证件号码
        "mobile2": "",//移动电话
        "takeDate": "",//出租日期开始
        "checkInDate": "",//出租日期结束
        "remarks": "",//备注
      },
      //表单信息
      "info": {
        "funcinfoFormlabelwidth": 150,
        "funcinfoFormcols": 2    //表单所占列数
      },
      //表单控件循环信息
      "fields": [
        //separator
        {
          "resourcefieldXtype": "separator",    //表单类型
          "resourcefieldCode": "info",  //表单model字段名称
          "resourcefieldName": "新增转租",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "simple",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": []
        },
        /*==================== group 1 ==================== */
        //房产名称
        {
          "resourcefieldXtype": "text",    //表单类型
          "resourcefieldCode": "houseName",  //表单model字段名称
          "resourcefieldName": "房产名称",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "span",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": []
        },
        //开发商
        {
          "resourcefieldXtype": "text",    //表单类型
          "resourcefieldCode": "ownerId",  //表单model字段名称
          "resourcefieldName": "业主",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "span",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": []
        },
        //separator
        {
          "resourcefieldXtype": "separator", //表单类型
          "resourcefieldCode": null, //表单model字段名称
          "resourcefieldName": "", //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null, //必填出错 提示信息
          "resourcefieldAllowblankexp": null, //内容验证规则
          "resourcefieldVtype": null, //验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "simple",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null, //placeholder的值
          "isResourcefieldRemoved": false, //是否禁用
          "isResourcefieldReadonly": false, //是否只读
          "fieldWidth": 700, //表单元素部分宽度
          "fieldHeight": 32, //表单元素部分高度
          "min": null, //min
          "max": null, //max
          "resourcefieldStep": null, //step 步长
          "resourcefieldRowspan": null, //row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": "gailan", //表单控件图标
          "isResourcefieldEditable": false, //是否可编辑
          "resourcefieldColspan": 2, //所占列数
          "items": null, //表单控件内容部分（checkbox，radio......）
          "ddcode": null, //表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false, //是否隐藏
          "resourcefieldBindingfnList": ["click-groupSwitch"] //事件名称集合
        },
        //原租户
        {
          "resourcefieldXtype": "text",    //表单类型
          "resourcefieldCode": "ownerId",  //表单model字段名称
          "resourcefieldName": "原租户",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "span",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "ddcode": null,//表单控件分布加载内容，请求值,(在select,cascader......中应用)
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": []
        },
        //证件号码 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "certificate1",  //表单model字段名称
          "resourcefieldName": "证件号码",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": "carded",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
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
        //移动电话 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "mobile1",  //表单model字段名称
          "resourcefieldName": "移动电话",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入移动电话",//必填出错 提示信息
          "resourcefieldAllowblankexp": "mobile",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "请输入移动电话",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
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
        //详细地址 - cascader
        {
          "resourcefieldXtype": "cascader", //表单类型
          "resourcefieldCode": "provinceCityArea", //表单model字段名称
          "resourcefieldName": "详细地址", //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请选择省市区", //必填出错 提示信息
          "resourcefieldAllowblankexp": null, //内容验证规则
          "resourcefieldVtype": "array", //验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "请选择省市区", //placeholder的值
          "isResourcefieldRemoved": false, //是否禁用
          "isResourcefieldReadonly": false, //是否只读
          "fieldWidth": 580,
          "fieldHeight": 32,
          "min": null,
          "max": null,
          "resourcefieldStep": null,
          "resourcefieldRowspan": null,
          "resourcefieldFieldcls": "search",
          "isResourcefieldEditable": false,
          "resourcefieldColspan": 2,
          "items": [{
            "value": "Mercedes",
            "label": "浙江",
            "children": [{
              "value": "Car",
              "label": "杭州",
              "children": [{
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
                "children": [{
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
              "children": [{
                "value": "Car",
                "label": "苏州",
                "children": [{
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
                  "children": [{
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
              "children": [{
                "value": "Car",
                "label": "广州",
                "children": [{
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
                  "children": [{
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
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false, //是否隐藏
          "resourcefieldBindingfnList": [] //事件名称集合
        },
        //退租日期 - datepicker
        {
          "resourcefieldXtype": "datepicker",    //表单类型
          "resourcefieldCode": "salesDate",  //表单model字段名称
          "resourcefieldName": "退租日期",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择售楼日期",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "date",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
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
        //separator
        {
          "resourcefieldXtype": "separator", //表单类型
          "resourcefieldCode": null, //表单model字段名称
          "resourcefieldName": "", //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null, //必填出错 提示信息
          "resourcefieldAllowblankexp": null, //内容验证规则
          "resourcefieldVtype": null, //验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "simple",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null, //placeholder的值
          "isResourcefieldRemoved": false, //是否禁用
          "isResourcefieldReadonly": false, //是否只读
          "fieldWidth": 700, //表单元素部分宽度
          "fieldHeight": 32, //表单元素部分高度
          "min": null, //min
          "max": null, //max
          "resourcefieldStep": null, //step 步长
          "resourcefieldRowspan": null, //row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": "gailan", //表单控件图标
          "isResourcefieldEditable": false, //是否可编辑
          "resourcefieldColspan": 2, //所占列数
          "items": null, //表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false, //是否隐藏
          "resourcefieldBindingfnList": ["click-groupSwitch"] //事件名称集合
        },
        //新租户  - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "newOwner",  //表单model字段名称
          "resourcefieldName": "新租户",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入新业主姓名",//必填出错 提示信息
          "resourcefieldAllowblankexp": "NumEn",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "请输入新业主姓名",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //新增 - input
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldCode": null,  //表单model字段名称
          "resourcefieldName": "",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "label-width": 10,
          },
          "resourcefieldEmptytext": "新增",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 110,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": [
            {
              "label": "个人", "value": "personal"
            },
            {"label": "企业", "value": "company"}
          ],//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //证件号码 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "certificate2",  //表单model字段名称
          "resourcefieldName": "证件号码",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": "carded",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "请输入证件号码",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //移动电话 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "mobile2",  //表单model字段名称
          "resourcefieldName": "移动电话",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入移动电话",//必填出错 提示信息
          "resourcefieldAllowblankexp": "mobile",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "请输入移动电话",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //退租日期( 开始 ) - datepicker
        {
          "resourcefieldXtype": "datepicker",    //表单类型
          "resourcefieldCode": "takeDate",  //表单model字段名称
          "resourcefieldName": "出租日期",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择收房日期",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "date",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
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
        //出租日期（ 结束 ） - datepicker
        {
          "resourcefieldXtype": "datepicker",    //表单类型
          "resourcefieldCode": "checkInDate",  //表单model字段名称
          "resourcefieldName": "~",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "label-width": 30,
            "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 230,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
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
        //备注 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "remarks",  //表单model字段名称
          "resourcefieldName": "备注",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入备注信息",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "textarea",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 580,//表单元素部分宽度
          "fieldHeight": 64,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 2,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },

      ]
    }
  },
  //新增收房
  "addTabke": {
    "resultCode": "200",
    "resultMsg": "模板自动表单请求数据操作成功",
    "resultData": {
      //v-model 绑定字段对象
      "modelData": {
        "houseName": "",//房产名称
        "ownerId": "滨江天泓山庄有限公司",//开发商
        "newOwner": "刘秀峰",//新业主
        "certificate": "360823199001010456",//证件号码
        "mobile": "13738102644",//移动电话
        "isMainHouse": "",//是否主房产
        "salesDate": "",//售楼日期
        "takeDate": "",//收房日期
        "stayDate": "",//入住日期
        "remarks": "",//备注
      },
      //表单信息
      "info": {
        "funcinfoFormlabelwidth": 150,
        "funcinfoFormcols": 2    //表单所占列数
      },
      //表单控件循环信息
      "fields": [
        //separator
        {
          "resourcefieldXtype": "separator",    //表单类型
          "resourcefieldCode": "info",  //表单model字段名称
          "resourcefieldName": "新增收房",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "simple",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": []
        },
        //房产名称
        {
          "resourcefieldXtype": "text",    //表单类型
          "resourcefieldCode": "houseName",  //表单model字段名称
          "resourcefieldName": "房产名称",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "span",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": []
        },
        //开发商
        {
          "resourcefieldXtype": "text",    //表单类型
          "resourcefieldCode": "ownerId",  //表单model字段名称
          "resourcefieldName": "开发商",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": null,//验证字段的内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "span",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 1,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "before", //分组名称
          "isResourcefieldHidden": false,      //是否隐藏
          "resourcefieldBindingfnList": []
        },
        //新业主 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "newOwner",  //表单model字段名称
          "resourcefieldName": "新业主",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入新业主姓名",//必填出错 提示信息
          "resourcefieldAllowblankexp": "NumEn",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "请输入新业主姓名",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
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
        //新增 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldCode": null,  //表单model字段名称
          "resourcefieldName": "",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "label-width": 10,
          },
          "resourcefieldEmptytext": "新增",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 110,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": [
            {"label": "个人", "value": "personal"},
            {"label": "企业", "value": "company"}
          ],//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //是否主房产- checkbox
        {
          "resourcefieldXtype": "radio",    //表单类型
          "resourcefieldCode": "isMainHouse",  //表单model字段名称
          "resourcefieldName": "是否主房产",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "array",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 700,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": 0,//min
          "max": 1,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": null,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": [
            {"label": "是", "value": "true"},
            {"label": "否", "value": "false"},
          ],//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //证件号码 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "certificate",  //表单model字段名称
          "resourcefieldName": "证件号码",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": null,//必填出错 提示信息
          "resourcefieldAllowblankexp": "carded",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "请输入证件号码",//placeholder的值
          "isResourcefieldRemoved": true,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
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
        //移动电话 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "mobile",  //表单model字段名称
          "resourcefieldName": "移动电话",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入移动电话",//必填出错 提示信息
          "resourcefieldAllowblankexp": "mobile",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "请输入移动电话",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
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
        //售楼日期 - datepicker
        {
          "resourcefieldXtype": "datepicker",    //表单类型
          "resourcefieldCode": "salesDate",  //表单model字段名称
          "resourcefieldName": "售楼日期",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择售楼日期",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "date",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
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
        //收房日期 - datepicker
        {
          "resourcefieldXtype": "datepicker",    //表单类型
          "resourcefieldCode": "takeDate",  //表单model字段名称
          "resourcefieldName": "收房日期",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择收房日期",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "date",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
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
        //入住日期 - datepicker
        {
          "resourcefieldXtype": "datepicker",    //表单类型
          "resourcefieldCode": "stayDate",  //表单model字段名称
          "resourcefieldName": "入住日期",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择入住日期",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "date",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": null,//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 32,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
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
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入备注信息",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "textarea",//表单控件分支小类type,如input=>input-text,input-textere
          },
          "resourcefieldEmptytext": "",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 600,//表单元素部分宽度
          "fieldHeight": 64,//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 2,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        }
      ]
    }
  },
}

export default {
  autoform: (config) => {
    const funcID = store.funcId.get();
    const interpreter = store.requestHead.interpreter.get();
    const formId1 = "personalOwner";
    const formId2 = "companyOwner";
    const formId3 = "addDecorationForm";

    const requestFormId = $store.state.Form.control.requestFormId;//当前自定义表单请求的ID值

    //新增个人/企业
    if (requestFormId === "personalOwner" || requestFormId === "companyOwner") {
      if (interpreter === "0") {
        return formMap[formId1];
      }
      if (interpreter === "1") {
        return formMap[formId2];
      }
    }
    else if (funcID === "5" && interpreter === "0") {
      return formMap[formId3];
    }
    else {
      return errorMap.error;
    }
  },
}
