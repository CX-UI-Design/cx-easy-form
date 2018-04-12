export let config = {
  //trigger-blur list （ form-component ）
  blurList: ['date',],

  //trigger-change && blur list （ form-component ）
  blurAndChangeList: [ 'input','datepicker', 'timepicker'],

  //no-rules list （ form-component ）
  noValidateList: ['baseTable', 'separator', 'avatar'],

  //no-label list （ form-component ）
  noLabelList: ['separator'],

  //no-height list （ form-component ）
  noHeightList: [
    {firstType: 'baseTable', secondType: null, thirdType: null},
    {firstType: 'checkbox', secondType: null, thirdType: null},
    {firstType: 'radio', secondType: null, thirdType: null},
    {firstType: 'select', secondType: 'role-employee', thirdType: null},
    // {firstType: 'select', secondType: 'role-organization', thirdType: null},
  ],

  //no-line-height list （ form-component ）
  noLineHeightList: [
    {firstType: 'baseTable', secondType: null, thirdType: null},
    {firstType: 'radio', secondType: null, thirdType: null},
    {firstType: 'upload', secondType: null, thirdType: null},
    {firstType: 'select', secondType: 'role-employee', thirdType: null},
    {firstType: 'select', secondType: 'role-organization', thirdType: null},
  ],

  mockBlockList: [
    {firstType: 'select', secondType: 'customer-info-linkage', thirdType: null},
  ],


  typeDistribution: [

    {firstType: 'select', sexondType: 'normal', transform: 'select'},
    {firstType: 'select', sexondType: 'remote', transform: 'select-remote'},

    {firstType: 'select', sexondType: 'role-group', transform: 'role-group'},
    {firstType: 'select', sexondType: 'role-employee', transform: 'role-employee'},
    {firstType: 'select', sexondType: 'simple-tree-select', transform: 'simple-tree-select'},

    {firstType: 'select', sexondType: 'customer-info-linkage', transform: 'customer-info-linkage'},
    {firstType: 'select', sexondType: 'customer-info-single', transform: 'customer-info-single'},

    {firstType: 'select', sexondType: 'area', transform: 'area-linkage'},
    {firstType: 'select', sexondType: 'area-1', transform: 'area-linkage'},
    {firstType: 'select', sexondType: 'area-2', transform: 'area-linkage'},
    {firstType: 'select', sexondType: 'area-3', transform: 'area-linkage'},
    {firstType: 'select', sexondType: 'area-4', transform: 'area-linkage'},

    {firstType: 'checkbox', sexondType: 'roleCheckBtn', transform: 'role-check-btn'},



    {firstType: 'date', sexondType: 'interval', transform: 'time-interval'},

    {firstType: 'other', sexondType: 'manage-range', transform: 'manage-range'},




  ]

}



