/*
* Created by Broccoli spring( gcx ) on 2018/1/15.
* register data for mock.
*/
//系统管理 模块
import roleGroup from './Form/component/select/role-group'
import roleEmployee from './Form/component/select/role-employee'
import roleCheckBtnList from './Form/component/checkbox/role-check-btn-list'
import roleAuthorizer from './Form/component/transfer/role-authorizer'
import simpleTree from './Form/component/tree/simple-tree'
//省市区模块
import area from './Form/area-linkage/index'
//用户/公司 信息搜索 联动 （ customer search linkage ）
import customerInfoLinkage from './Form/component/select/customer-info-linkage'
//上传控件模块
import upload from './upload/upload'

import selectAPI from './Form/select'

//data register list
const registerList = [
  //upload
  {url: /\/fastdfs\/fastdfs\/uploadFile/, method: 'post', target: upload.upload, remarks: 'upload'},
  //select other
  {url: /\/system\/dictionary\/select/, method: 'get', target: selectAPI.selectOption, remarks: 'selectOption'},
  {url: /\/form\/select\/remoteTest/, method: 'get', target: selectAPI.remoteTest, remarks: 'remoteTest'},

  //province city area
  {url: /\/owner\/customer\/initProvinceCityArea/, method: 'get', target: area.area, remarks: 'province-city-area 省市区控件'},

  //customer search information / linkage
  {url: /\/owner\/customer\/list-customer-search/, method: 'get', target: customerInfoLinkage.customerSearch, remarks: ' customer search linkage '},
  {url: /\/owner\/customer\/detail-customer-for-search/, method: 'get', target: customerInfoLinkage.customerEditInit, remarks: '用户编辑初始化，用户数据 =>（label 显示在select中)'},


  //系统管理 模块
  //roleGroupList
  {url: /\/system\/role\/list-role-category/, method: 'get', target: roleGroup.roleGroupList, remarks: '获取角色组列表'},
  {url: /\/system\/role\/save-role-category/, method: 'post', target: roleGroup.handleRoleGroup, remarks: '新增/编辑角色组'},
  {url: /\/system\/role\/delete-role-category/, method: 'get', target: roleGroup.handleRoleGroup, remarks: '删除角色组'},

  //funcButtonList
  {url: /\/system\/permission\/list-menu-button/, method: 'get', target: roleCheckBtnList.roleCheckBtnList, remarks: '分组获取角色列表'},

  //roleAuthorizer
  {url: /\/system\/user\/list-user-by-organizationId/, method: 'get', target: roleAuthorizer.roleAuthorizer, remarks: '获取某个组织下的所有员工（授权人）列表'},

  //roleEmployee
  {url: /\/system\/role\/list-rolecategory-for-edit/, method: 'post', target: roleEmployee.init, remarks: '分组获取角色列表 - 初始绑定'},
  {url: /\/system\/role\/list-role-group-by-Category/, method: 'get', target: roleEmployee.roleEmployee, remarks: '分组获取角色列表 - 下拉数据'},

  //roleOrganization
  {url: /\/system\/organization\/get-orgDetail-form/, method: 'get', target: simpleTree.getSingleData, remarks: '选择部门组件 - 获取单个数据-对应于特定id的此条数据'},
  {url: /\/system\/organization\/get-moreOrgDetail-form/, method: 'post', target: simpleTree.getArrayData, remarks: '树组件-下拉框 - 获取多个数据的对应于特定id的此条数据，业务类型：organizationIdList'},


  {url: /\/system\/organization\/get-orgtree-form/, method: 'get', target: simpleTree.roleOrganization, remarks: '选择部门组件 - 获取初始组织树数据'},
  {
    url: /\/system\/organization\/get-child-organization-form/,
    method: 'get',
    target: simpleTree.getChildRoleOrganization,
    remarks: '选择部门组件 - 获取子节点树数据'
  },

]

export default registerList;

