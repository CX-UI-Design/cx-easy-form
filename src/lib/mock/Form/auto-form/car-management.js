import {param2Obj} from "@/utils"
import {errorMap} from "../../error/error"
import * as store from "@/utils/nsQuery/nsStore"
import $store from '@/store/index'
import ns from "@/utils/nsQuery/nsQuery"

const formMap = {
  //新增/修改车辆
  'carManagementData': {
    "resultCode": "200",
    "resultMsg": "模板自动表单请求数据操作成功",
    "resultData": {
      //v-model 绑定字段对象
      "modelData": {
        "carNumber": "",
        "carColorId": "",
        "ownerCarId": "",
        "vehicleBrandId": "",
        "isFixedParking": "0",
        "isCurrentUse": "0",
        "remark": "",
        "parkingPermit": "",
        "ownerId": ""
      },
      //表单信息
      "info": {
        "funcinfoFormlabelwidth": 150,
        "funcinfoFormcols": 1,  //表单所占列数
        "width-supply": 100,//宽度补足值
      },
      //表单控件循环信息
      "fields": [
        //车牌号码 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "carNumber",  //表单model字段名称
          "resourcefieldName": "车牌号码",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入车牌号码",//必填出错 提示信息
          "resourcefieldAllowblankexp": "tel",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入车牌号码",//placeholder的值
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
        //车辆品牌 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldCode": "vehicleBrandId",  //表单model字段名称
          "resourcefieldName": "车辆品牌",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择车辆品牌",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请选择车辆品牌",//placeholder的值
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
            {"label": "奔驰", "value": "benz"},
            {"label": "宝马", "value": "BMW"}
          ],//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "dynamicUrl": "system/dictionary/select", //请求地址
          "dynamicQuery": "ownerType",//请求参数
        },
        //车辆颜色 - select
        {
          "resourcefieldXtype": "select",    //表单类型
          "resourcefieldCode": "carColorId",  //表单model字段名称
          "resourcefieldName": "车辆颜色",   //表单字段 lable 名称
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请选择车辆颜色",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请选择车辆颜色",//placeholder的值
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
            {"label": "黑色", "value": "black"},
            {"label": "白色", "value": "white"}
          ],//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
          "dynamicUrl": "system/dictionary/select", //请求地址
          "dynamicQuery": "ownerType",//请求参数
        },
        //停车证 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "ownerCarId",  //表单model字段名称
          "resourcefieldName": "停车证",   //表单字段 lable 名称
          "funcinfoFormlabelwidth": 150,//表单字段 lable 宽度
          "isfieldRequired": true, //是否必填 required
          "resourcefieldBinding": "请输入停车证",//必填出错 提示信息
          "resourcefieldAllowblankexp": "tel",//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "text",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请输入停车证",//placeholder的值
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
        //是否固定车位 - radio
        {
          "resourcefieldXtype": "radio",    //表单类型
          "resourcefieldCode": "isFixedParking",  //表单model字段名称
          "resourcefieldName": "是否固定车位",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请选择是否固定车位",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请选择是否固定车位",//placeholder的值
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
            {"label": "是", "value": "true"},
            {"label": "否", "value": "false"},
          ],//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //是否当前使用车辆 - radio
        {
          "resourcefieldXtype": "radio",    //表单类型
          "resourcefieldCode": "isCurrentUse",  //表单model字段名称
          "resourcefieldName": "是否当前使用车辆",   //表单字段 lable 名称
          "isfieldRequired": false, //是否必填 required
          "resourcefieldBinding": "请选择是否当前使用车辆",//必填出错 提示信息
          "resourcefieldAllowblankexp": null,//内容验证规则
          "resourcefieldVtype": "string",//验证字段的 内容类型
          "resourcefieldOtherconfigObject": {
            "secondXtype": "normal",//表单控件分支小类type,如input=>input-text,input-textere
            "min": undefined,//min
            "max": undefined,//max
          },
          "resourcefieldEmptytext": "请选择是否当前使用车辆",//placeholder的值
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
            {"label": "是", "value": "true"},
            {"label": "否", "value": "false"},
          ],//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "more-info", //分组名称
          "isResourcefieldHidden": true,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
        //备注 - input
        {
          "resourcefieldXtype": "input",    //表单类型
          "resourcefieldCode": "remark",  //表单model字段名称
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
          "fieldWidth": 350,//表单元素部分宽度
          "fieldHeight": 64,//表单元素部分高度
          "resourcefieldStep": null,//step 步长
          "resourcefieldRowspan": 2,//row 值 - 所占 行数 （textarea / avatar / span ......）
          "resourcefieldFieldcls": null,//表单控件图标
          "isResourcefieldEditable": false,//是否可编辑
          "resourcefieldColspan": 1,//所占列数
          "items": null,//表单控件内容部分（checkbox，radio......）
          "resourcefieldGroupname": "base-info", //分组名称
          "isResourcefieldHidden": false,       //是否隐藏
          "resourcefieldBindingfnList": [],//事件名称集合
        },
      ]
    }
  }
}

export default {
  autoform: (config) => {
    const funcID = store.funcId.get();
    const interpreter = store.requestHead.interpreter.get();
    const requestFormId = $store.state.Form.control.requestFormId;//当前自定义表单请求的ID值
    //新增 / 修改 车辆
    if (requestFormId === "addCarForm") {
      return formMap['carManagementData'];
    }
    else {
      return errorMap.error;
    }
  },
}
