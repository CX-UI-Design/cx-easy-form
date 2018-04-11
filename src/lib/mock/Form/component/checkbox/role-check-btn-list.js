const roleMap = {
  roleCheckBtnList: {
    "resultCode": "200",
    "resultMsg": "操作成功。",
    "resultData": [
      //系统管理
      {
        jeCoreMenuId: "1",//菜单id
        menuMenuname: "系统管理",//菜单名称
        menuNodeinfo: "xtgl",
        menuNodeinfotype: "MENU",//菜单类型
        funcinfoVo: null,//菜单所对应的功能（menuNodeinfotype:"MENU" 的菜单木有对应的功能）
        //二级菜单
        childMenus: [
          //部门员工
          {
            jeCoreMenuId: "1-1",
            menuMenuname: "部门员工",
            menuNodeinfo: "department-staff",
            menuNodeinfotype: "DS",
            //二级菜单所对应的功能,（menuNodeinfotype:"MT" 的菜单有对应的功能）
            funcinfoVo: {
              jeCoreFuncinfoId: "1-1",//功能id
              funcinfoFunccode: "dede",//功能code
              funcinfoFuncname: "部门员工",//功能名称
              checkNum: 10,
              resourcebuttons: [
                {
                  buttonType: '分类1',
                  buttons: [
                    {
                      jeCoreResourcebuttonId: "search1",//按钮id
                      resourcebuttonFuncinfoId: "search",//功能id
                      resourcebuttonCode: "search-btn",//按钮code
                      resourcebuttonName: "查询",//按钮名称
                      resourcebuttonNameEn: "search"//按钮英文
                    },
                    {
                      jeCoreResourcebuttonId: "edit1",
                      resourcebuttonFuncinfoId: "edit",
                      resourcebuttonCode: "edit-btn",
                      resourcebuttonName: "编辑",
                      resourcebuttonNameEn: "edit"
                    },
                    {
                      jeCoreResourcebuttonId: "delete1",//按钮id
                      resourcebuttonFuncinfoId: "delete",//功能id
                      resourcebuttonCode: "delete-btn",//按钮code
                      resourcebuttonName: "删除",//按钮名称
                      resourcebuttonNameEn: "delete"//按钮英文
                    },
                    {
                      jeCoreResourcebuttonId: "onload1",//按钮id
                      resourcebuttonFuncinfoId: "onload",//功能id
                      resourcebuttonCode: "onload-btn",//按钮code
                      resourcebuttonName: "导入",//按钮名称
                      resourcebuttonNameEn: "onload"//按钮英文
                    },
                    {
                      jeCoreResourcebuttonId: "add1",//按钮id
                      resourcebuttonFuncinfoId: "add",//功能id
                      resourcebuttonCode: "add-btn",//按钮code
                      resourcebuttonName: "新增",//按钮名称
                      resourcebuttonNameEn: "add"//按钮英文
                    },
                  ]
                },
                {
                  buttonType: '分类2',
                  buttons: [
                    {
                      jeCoreResourcebuttonId: "search2",//按钮id
                      resourcebuttonFuncinfoId: "search",//功能id
                      resourcebuttonCode: "search-btn",//按钮code
                      resourcebuttonName: "查询",//按钮名称
                      resourcebuttonNameEn: "search"//按钮英文
                    },
                    {
                      jeCoreResourcebuttonId: "edit2",
                      resourcebuttonFuncinfoId: "edit",
                      resourcebuttonCode: "edit-btn",
                      resourcebuttonName: "编辑",
                      resourcebuttonNameEn: "edit"
                    },
                    {
                      jeCoreResourcebuttonId: "delete2",//按钮id
                      resourcebuttonFuncinfoId: "delete",//功能id
                      resourcebuttonCode: "delete-btn",//按钮code
                      resourcebuttonName: "删除",//按钮名称
                      resourcebuttonNameEn: "delete"//按钮英文
                    },
                    {
                      jeCoreResourcebuttonId: "onload2",//按钮id
                      resourcebuttonFuncinfoId: "onload",//功能id
                      resourcebuttonCode: "onload-btn",//按钮code
                      resourcebuttonName: "导入",//按钮名称
                      resourcebuttonNameEn: "onload"//按钮英文
                    },
                    {
                      jeCoreResourcebuttonId: "add",//按钮id
                      resourcebuttonFuncinfoId: "add",//功能id
                      resourcebuttonCode: "add-btn",//按钮code
                      resourcebuttonName: "新增",//按钮名称
                      resourcebuttonNameEn: "add"//按钮英文
                    },
                  ]
                },
              ]
            },
            childMenus: []
          },
          //角色权限
          {
            jeCoreMenuId: "1-2",
            menuMenuname: "角色权限",
            menuNodeinfo: "role-authority",
            menuNodeinfotype: "RA",
            //二级菜单所对应的功能,（menuNodeinfotype:"MT" 的菜单有对应的功能）
            funcinfoVo: {
              jeCoreFuncinfoId: "1-2",//功能id
              funcinfoFunccode: "dede",//功能code
              funcinfoFuncname: "角色权限",//功能名称
              checkNum: 5,
              resourcebuttons: [
                {
                  buttonType: '分类1',
                  buttons: [
                    {
                      jeCoreResourcebuttonId: "search",//按钮id
                      resourcebuttonFuncinfoId: "search",//功能id
                      resourcebuttonCode: "search-btn",//按钮code
                      resourcebuttonName: "查询",//按钮名称
                      resourcebuttonNameEn: "search"//按钮英文
                    },
                    {
                      jeCoreResourcebuttonId: "edit",
                      resourcebuttonFuncinfoId: "edit",
                      resourcebuttonCode: "edit-btn",
                      resourcebuttonName: "编辑",
                      resourcebuttonNameEn: "edit"
                    },
                    {
                      jeCoreResourcebuttonId: "delete",//按钮id
                      resourcebuttonFuncinfoId: "delete",//功能id
                      resourcebuttonCode: "delete-btn",//按钮code
                      resourcebuttonName: "删除",//按钮名称
                      resourcebuttonNameEn: "delete"//按钮英文
                    },
                    {
                      jeCoreResourcebuttonId: "onload",//按钮id
                      resourcebuttonFuncinfoId: "onload",//功能id
                      resourcebuttonCode: "onload-btn",//按钮code
                      resourcebuttonName: "导入",//按钮名称
                      resourcebuttonNameEn: "onload"//按钮英文
                    },
                    {
                      jeCoreResourcebuttonId: "add",//按钮id
                      resourcebuttonFuncinfoId: "add",//功能id
                      resourcebuttonCode: "add-btn",//按钮code
                      resourcebuttonName: "新增",//按钮名称
                      resourcebuttonNameEn: "add"//按钮英文
                    },
                  ]
                },
              ]
            },
            childMenus: []
          },
        ]
      },
      //业户管理
      {
        jeCoreMenuId: "2",//菜单id
        menuMenuname: "业户管理",//菜单名称
        menuNodeinfo: "yhgl",
        menuNodeinfotype: "MENU",//菜单类型
        funcinfoVo: null,//菜单所对应的功能（menuNodeinfotype:"MENU" 的菜单木有对应的功能）
        //二级菜单
        childMenus: [
          //新增收房
          {
            jeCoreMenuId: "2-1",
            menuMenuname: "新增收房",
            menuNodeinfo: "xzsf",
            menuNodeinfotype: "XZSF",
            //二级菜单所对应的功能,（menuNodeinfotype:"MT" 的菜单有对应的功能）
            funcinfoVo: {
              jeCoreFuncinfoId: "2-1",//功能id
              funcinfoFunccode: "dede",//功能code
              funcinfoFuncname: "新增收房",//功能名称
              checkNum: 5,
              resourcebuttons: [
                {
                  buttonType: '分类1',
                  buttons: [
                    {
                      jeCoreResourcebuttonId: "search",//按钮id
                      resourcebuttonFuncinfoId: "search",//功能id
                      resourcebuttonCode: "search-btn",//按钮code
                      resourcebuttonName: "查询",//按钮名称
                      resourcebuttonNameEn: "search"//按钮英文
                    },
                    {
                      jeCoreResourcebuttonId: "edit",
                      resourcebuttonFuncinfoId: "edit",
                      resourcebuttonCode: "edit-btn",
                      resourcebuttonName: "编辑",
                      resourcebuttonNameEn: "edit"
                    },
                    {
                      jeCoreResourcebuttonId: "delete",//按钮id
                      resourcebuttonFuncinfoId: "delete",//功能id
                      resourcebuttonCode: "delete-btn",//按钮code
                      resourcebuttonName: "删除",//按钮名称
                      resourcebuttonNameEn: "delete"//按钮英文
                    },
                    {
                      jeCoreResourcebuttonId: "onload",//按钮id
                      resourcebuttonFuncinfoId: "onload",//功能id
                      resourcebuttonCode: "onload-btn",//按钮code
                      resourcebuttonName: "导入",//按钮名称
                      resourcebuttonNameEn: "onload"//按钮英文
                    },
                    {
                      jeCoreResourcebuttonId: "add",//按钮id
                      resourcebuttonFuncinfoId: "add",//功能id
                      resourcebuttonCode: "add-btn",//按钮code
                      resourcebuttonName: "新增",//按钮名称
                      resourcebuttonNameEn: "add"//按钮英文
                    },
                  ]
                },
              ]
            },
            childMenus: []
          },
          //新增入住
          {
            jeCoreMenuId: "2-2",
            menuMenuname: "新增入住",
            menuNodeinfo: "xzrz",
            menuNodeinfotype: "XZRZ",
            //二级菜单所对应的功能,（menuNodeinfotype:"MT" 的菜单有对应的功能）
            funcinfoVo: {
              jeCoreFuncinfoId: "2-2",//功能id
              funcinfoFunccode: "dede",//功能code
              funcinfoFuncname: "新增入住",//功能名称
              checkNum: 5,
              resourcebuttons: [
                {
                  buttonType: '分类1',
                  buttons: [
                    {
                      jeCoreResourcebuttonId: "search",//按钮id
                      resourcebuttonFuncinfoId: "search",//功能id
                      resourcebuttonCode: "search-btn",//按钮code
                      resourcebuttonName: "查询",//按钮名称
                      resourcebuttonNameEn: "search"//按钮英文
                    },
                    {
                      jeCoreResourcebuttonId: "edit",
                      resourcebuttonFuncinfoId: "edit",
                      resourcebuttonCode: "edit-btn",
                      resourcebuttonName: "编辑",
                      resourcebuttonNameEn: "edit"
                    },
                    {
                      jeCoreResourcebuttonId: "delete",//按钮id
                      resourcebuttonFuncinfoId: "delete",//功能id
                      resourcebuttonCode: "delete-btn",//按钮code
                      resourcebuttonName: "删除",//按钮名称
                      resourcebuttonNameEn: "delete"//按钮英文
                    },
                    {
                      jeCoreResourcebuttonId: "onload",//按钮id
                      resourcebuttonFuncinfoId: "onload",//功能id
                      resourcebuttonCode: "onload-btn",//按钮code
                      resourcebuttonName: "导入",//按钮名称
                      resourcebuttonNameEn: "onload"//按钮英文
                    },
                    {
                      jeCoreResourcebuttonId: "add",//按钮id
                      resourcebuttonFuncinfoId: "add",//功能id
                      resourcebuttonCode: "add-btn",//按钮code
                      resourcebuttonName: "新增",//按钮名称
                      resourcebuttonNameEn: "add"//按钮英文
                    },
                  ]
                },
              ]
            },
            childMenus: []
          },
        ]
      },
      //其他
      {
        jeCoreMenuId: "3",//菜单id
        menuMenuname: "其他",//菜单名称
        menuNodeinfo: "other",
        menuNodeinfotype: "MENU",//菜单类型
        funcinfoVo: null,//菜单所对应的功能（menuNodeinfotype:"MENU" 的菜单木有对应的功能）
        //二级菜单
        childMenus: [
          //其他1
          {
            jeCoreMenuId: "3-1",
            menuMenuname: "其他1",
            menuNodeinfo: "other",
            menuNodeinfotype: "other",
            //二级菜单所对应的功能,（menuNodeinfotype:"MT" 的菜单有对应的功能）
            funcinfoVo: {
              jeCoreFuncinfoId: "3-1",//功能id
              funcinfoFunccode: "dede",//功能code
              funcinfoFuncname: "其他1",//功能名称
              checkNum: 5,
              resourcebuttons: [
                {
                  buttonType: '分类1',
                  buttons: [
                    {
                      jeCoreResourcebuttonId: "search",//按钮id
                      resourcebuttonFuncinfoId: "search",//功能id
                      resourcebuttonCode: "search-btn",//按钮code
                      resourcebuttonName: "查询",//按钮名称
                      resourcebuttonNameEn: "search"//按钮英文
                    },
                  ]
                },
                {
                  buttonType: '分类2',
                  buttons: [
                    {
                      jeCoreResourcebuttonId: "edit",
                      resourcebuttonFuncinfoId: "edit",
                      resourcebuttonCode: "edit-btn",
                      resourcebuttonName: "编辑",
                      resourcebuttonNameEn: "edit"
                    },
                  ]
                },
              ]
            },
            childMenus: []
          },
          //其他2
          {
            jeCoreMenuId: "3-2",
            menuMenuname: "其他2",
            menuNodeinfo: "other",
            menuNodeinfotype: "other",
            //二级菜单所对应的功能,（menuNodeinfotype:"MT" 的菜单有对应的功能）
            funcinfoVo: {
              jeCoreFuncinfoId: "3-2",//功能id
              funcinfoFunccode: "dede",//功能code
              funcinfoFuncname: "其他2",//功能名称
              checkNum: 5,
              resourcebuttons: [
                {
                  buttonType: '分类1',
                  buttons: [
                    {
                      jeCoreResourcebuttonId: "search",//按钮id
                      resourcebuttonFuncinfoId: "search",//功能id
                      resourcebuttonCode: "search-btn",//按钮code
                      resourcebuttonName: "查询",//按钮名称
                      resourcebuttonNameEn: "search"//按钮英文
                    },
                    {
                      jeCoreResourcebuttonId: "edit",
                      resourcebuttonFuncinfoId: "edit",
                      resourcebuttonCode: "edit-btn",
                      resourcebuttonName: "编辑",
                      resourcebuttonNameEn: "edit"
                    },
                    {
                      jeCoreResourcebuttonId: "delete",//按钮id
                      resourcebuttonFuncinfoId: "delete",//功能id
                      resourcebuttonCode: "delete-btn",//按钮code
                      resourcebuttonName: "删除",//按钮名称
                      resourcebuttonNameEn: "delete"//按钮英文
                    },
                    {
                      jeCoreResourcebuttonId: "onload",//按钮id
                      resourcebuttonFuncinfoId: "onload",//功能id
                      resourcebuttonCode: "onload-btn",//按钮code
                      resourcebuttonName: "导入",//按钮名称
                      resourcebuttonNameEn: "onload"//按钮英文
                    },
                    {
                      jeCoreResourcebuttonId: "add",//按钮id
                      resourcebuttonFuncinfoId: "add",//功能id
                      resourcebuttonCode: "add-btn",//按钮code
                      resourcebuttonName: "新增",//按钮名称
                      resourcebuttonNameEn: "add"//按钮英文
                    },
                  ]
                },
              ]
            },
            childMenus: []
          },
        ]
      },
    ],
  }
}
export default {
  roleCheckBtnList: config => {
    return roleMap.roleCheckBtnList;
  }
}
