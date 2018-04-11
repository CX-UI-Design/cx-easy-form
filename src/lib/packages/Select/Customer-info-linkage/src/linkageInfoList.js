const linkageInfoList = [
  {
    type: 'vehicle',//三级分类-业务类型 （可以借此分类，此控件所对应的联动内容）
    linkageItems: [
      {modelKey: 'ownerName', modelVal: '', label: '车主名称', isRequired: true},
      {modelKey: 'certificate', modelVal: '', label: '证件号码', isRequired: false},
      {modelKey: 'mobile', modelVal: '', label: '移动电话', isRequired: false}
    ]
  }
  //...............可以新增其他联动配置项
]


export default linkageInfoList;
