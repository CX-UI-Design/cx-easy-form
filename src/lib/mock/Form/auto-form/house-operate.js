import {param2Obj} from "@/utils"
import {errorMap} from "../../error/error"
import * as store from "@/utils/nsQuery/nsStore"
import ns from "@/utils/nsQuery/nsQuery"

const formMap = {
  //售楼登记
  "salesRegistration": {
    "resultCode": "200",
    "resultMsg": "模板自动表单请求数据操作成功",
    "resultData": {
      //v-model 绑定字段对象
      "modelData": {
        "salesDate": "",
        "remarks": "",
        "createUserName": "高仓雄",
        "createTime": "2017-12-25",
        "updateUserName": "高仓雄",
        "updateTime": "2017-12-26",
        "developer": {
          "address": "",
          "age": 0,
          "areaId": "",
          "areaName": "",
          "autoForm": null,
          "birthday": null,
          "certificate": "WRFGHYYYY",
          "certificateType": "11",
          "certificateTypeName": "",
          "cityId": "",
          "cityName": "",
          "company": "",
          "companyAddress": "浙江省杭州市西湖区",
          "companyPhone": "7859955",
          "companyProperyty": "民营",
          "customerResultId": "",
          "education": "0",
          "educationName": "",
          "email": "",
          "emergencyContact": "",
          "emergencyContactPhone": "",
          "enterpriseId": 1,
          "familyInfoVo": null,
          "fax": "fax-0885766",
          "gender": "0",
          "genderName": "",
          "handlerId": 0,
          "interestsIdList": [],
          "interestsIds": "",
          "interestsNames": "",
          "legalRepresentative": "xxxx",
          "linkman": "xxx",
          "linkmanPhone": "46567777",
          "mainHouseList": [],
          "maritalStatus": "0",
          "maritalStatusName": "",
          "mobile": "",
          "nation": "0",
          "nationName": "",
          "nativePlace": "",
          "organizationId": 3,
          "ownerBaseInfoOwnerId": 0,
          "ownerId": 65,
          "ownerLevel": "0",
          "ownerLevelName": "",
          "ownerName": "绿城物业",
          "ownerProperty": "3",
          "ownerPropertyName": "",
          "ownerRelationship": "",
          "ownerType": "1",
          "ownerTypeName": "",
          "peopleCounts": 10000,
          "phone": "",
          "picUrl": "",
          "pictures": [],
          "precinctHouse": null,
          "precinctId": 0,
          "projectId": 0,
          "provinceCityArea": {
            "province": "91",
            "city": "",
            "district": "",
            "street": "0"
          },
          "provinceId": "91",
          "provinceName": "",
          "qq": "",
          "region": "0",
          "regionName": "",
          "regionalInfo": "",
          "registeredAddress": "",
          "remark": "略。。。。。。",
          "streetId": "0",
          "streetName": "",
          "tradeId": "1",
          "tradeName": ""
        },
        "oldCheckInDate": "",//原业主的入住日期
        "applyDate": "",  //搬出日期
        //原业主  修改
        "oldOwner": {},
        //原产权人
        "oldPropertyOwnerList": [],
        //新业主   修改
        "newOwner": {},
        //新产权人
        "newPropertyOwnerList": [
          {
            address: "天堂软件园 ",
            age: 0,
            areaId: null,
            areaName: null,
            autoForm: null,
            birthday: "1976-10-20",
            certificate: "330106197610204066",
            certificateType: "11",
            certificateTypeName: "护照",
            cityId: null,
            cityName: null,
            company: "新视窗",
            companyAddress: "天堂软件园",
            companyPhone: "18768186666",
            companyProperyty: "0",
            customerResultId: null,
            education: "4",
            educationName: "高中",
            email: "771401022@qq.com",
            emergencyContact: "马云",
            emergencyContactPhone: "18768186666",
            enterpriseId: 1,
            familyInfoVo: null,
            fax: "",
            gender: "1",
            genderName: "男",
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
            mobile: "19878647898",
            nation: "10",
            nationName: "汉族",
            nativePlace: "浙江杭州",
            organizationId: 3,
            ownerBaseInfoOwnerId: null,
            ownerId: 66,
            ownerLevel: "0",
            ownerLevelName: "VIP",
            ownerName: "马云",
            ownerProperty: "0",
            ownerPropertyName: "业主",
            ownerRelationship: '3',
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
          },
          {
            address: "天堂软件园 ",
            age: 0,
            areaId: null,
            areaName: null,
            autoForm: null,
            birthday: "1970-9-20",
            certificate: "330106197090204021",
            certificateType: "11",
            certificateTypeName: "护照",
            cityId: null,
            cityName: null,
            company: "新视窗",
            companyAddress: "天堂软件园",
            companyPhone: "15987623409",
            companyProperyty: "0",
            customerResultId: null,
            education: "4",
            educationName: "高中",
            email: "721401322@qq.com",
            emergencyContact: "马化腾",
            emergencyContactPhone: "18668467666",
            enterpriseId: 1,
            familyInfoVo: null,
            fax: "",
            gender: "1",
            genderName: "男",
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
            mobile: "176893875898",
            nation: "10",
            nationName: "汉族",
            nativePlace: "浙江杭州",
            organizationId: 3,
            ownerBaseInfoOwnerId: null,
            ownerId: 66,
            ownerLevel: "0",
            ownerLevelName: "VIP",
            ownerName: "马化腾",
            ownerProperty: "0",
            ownerPropertyName: "业主",
            ownerRelationship: '3',
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
          }
        ],  //新增  产权人
      },
      //表单信息
      "info": {
        "funcinfoFormlabelwidth": 150,
        "funcinfoFormcols": 2    //表单所占列数
      },
      //表单控件循环信息
      "fields": [
        //售楼日期 - datepicker
        {
          "resourcefieldXtype": "datepicker",    //表单类型
          "resourcefieldCode": "salesDate",  //表单model字段名称
          "resourcefieldName": "售楼日期",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择售楼日期",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "date",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "datetime",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请选择售楼日期",//placeholder的值
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
          "resourcefieldGroupname": "", //分组名称
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
          "fieldWidth": 800,//表单元素部分宽度
          "fieldHeight": "auto",//表单元素部分高度
          "min": undefined,//min
          "max": undefined,//max
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 5,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 2,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "src": "",//图片操作地址（获取地址，上传地址）
        },
        //登记人姓名 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "createUserName",  //表单model字段名称
          "resourcefieldName": "登记人姓名",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入登记人姓名",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入登记人姓名",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
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
        //登记日期 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "createTime",  //表单model字段名称
          "resourcefieldName": "登记日期",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入登记日期",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入登记日期",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
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
        //修改人姓名 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "updateUserName",  //表单model字段名称
          "resourcefieldName": "修改人姓名",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入修改人姓名",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入修改人姓名",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
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
        //修改日期 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "updateTime",  //表单model字段名称
          "resourcefieldName": "修改日期",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请输入修改日期",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入修改日期",//placeholder的值
          "isResourcefieldRemoved": false,//是否禁用
          "isResourcefieldReadonly": false,//是否只读
          "fieldWidth": 350,//表单元素部分宽度
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
      ],
      //关系 select
      "selectItem": [
        {label: "夫妻", value: "1"}, {label: "父母", value: "2"}, {label: "子女", value: "3"}
      ]
    }
  }
}

export default {
  autoform: (config) => {
    const funcID = store.funcId.get();
    const interpreter = store.requestHead.interpreter.get();
    const blendTemplate = "salesRegistration";
    if (interpreter === 10) {
      if (funcID === "ctSP2CVb8C7n4oHBrM8" || funcID === "blendAutoForm") {
        return formMap[blendTemplate];
      }
    }
    else {
      return errorMap.error;
    }
  },
}
