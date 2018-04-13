import {isEmpty, arrContainObj} from '../../../../utils/index'

/**
 * create init model and add status for data
 * @param vm                Vue components
 * @param options           option list
 * @param modelData         modelData
 */
export function createInitModel(vm, options, modelData) {
  const RCB_Key = vm.$former.keyRefer["roleCheckBtn"];
  const firstKeyRefer = RCB_Key.firstLevel;//指代属性字段值 一级
  const secondKeyRefer = RCB_Key.secondLevel;//指代属性字段值 二级
  const modelKeyRefer = RCB_Key.modelKey;//指代属性字段值 modelData

  let initData;
  //判断此控件在表单modelData中，初始值是否存在，且不为数组。若不符合要求，直接抛出空数组
  if (!modelData || isEmpty(modelData)) {
    console.log('功能菜单按钮的modelData值不存在，格式不正确（非数组），或者为空数组,其值如下：', +JSON.stringify(modelData, null, 4));
    initData = [];
  }
  else {
    initData = modelData;
  }
  /**
   * set init selected button for init-modelData in roleFnBtn components
   * @param initData          init-modelData in auto-form
   * @param firstID
   * @param secondID
   * @returns {Array}
   * @private
   */
  let _addSelectList = (initData, firstID, secondID) => {
    //筛选出一级ID值（jeCoreMenuId）相同的对象数据
    const firstFilter = initData.filter((item) => {
      return item[modelKeyRefer['firstID']] === firstID;
    })
    //若一级循环对象的长度是否为1，即只筛选出唯一的对象值，则为正确结果，继续下一步，否则给出错误提示，并抛出空数组
    if (firstFilter.length > 1) {
      console.log(firstFilter);
      throw('用户的功能菜单按钮的modelData值中，其数组中，一级循环对象中，存在2个相同ID (字段为：jeCoreMenuId)的对象，请检查后台数据库');
      return [];
    }
    else if (firstFilter.length < 1) {
      return {
        [modelKeyRefer['btnItems']]: [],
        [modelKeyRefer['dataSeeModel']]: undefined
      };
    }
    else {
      const firstStore = firstFilter[0].functionVos;//获取到其对应的字段值（数组），进行二次筛选
      //筛选出二级ID值（jeCoreFuncinfoId）相同的对象数据
      const SecFilter = firstStore.filter((item) => {
        return item[modelKeyRefer['secondID']] === secondID;
      })


      //若二级循环对象的长度是否为1，即只筛选出唯一的对象值，则为正确结果，继续下一步，否则给出错误提示，并抛出空数组
      if (SecFilter.length > 1) {
        console.log(SecFilter);
        throw('用户的功能菜单按钮的modelData值中，其数组中，二级循环对象中，存在2个相同ID (字段为：jeCoreFuncinfoId)的对象，请检查后台数据库');
        return [];
      }
      //没有选中项
      else if (SecFilter.length < 1) {
        return {
          [modelKeyRefer['btnItems']]: [],
          [modelKeyRefer['dataSeeModel']]: undefined
        };
      }
      //有选中项
      else {
        return {
          [modelKeyRefer['btnItems']]: SecFilter[0][modelKeyRefer['btnItems']],
          [modelKeyRefer['dataSeeModel']]: SecFilter[0][modelKeyRefer['dataSeeModel']],
        }
      }
    }
  }
  //circulatory operation for options data
  options.forEach((firstItem, firstIndex) => {
    vm.$set(firstItem, firstKeyRefer['checkSW'], false);    //add checkbox - sw into second leval
    vm.$set(firstItem, firstKeyRefer['indeterminate'], false);    //add checkbox - indeterminate into first leval
    // const firstItem = vm.options[firstIndex];                   //一级 item
    const firstID = firstItem[firstKeyRefer["menu-id"]];     //一级分类ID
    //create first leval model data
    vm.initModelData.push({[modelKeyRefer['firstID']]: firstID, [modelKeyRefer['infoVo']]: []})
    //firstItem => children ( 一级分类子数组 )
    const children = firstItem[firstKeyRefer.children];
    children.map((secondItem, secondIndex) => {
      const infoVo = secondItem[secondKeyRefer["infoVo"]];   //secondItem => funcinfoVo ( 二级分类 infoVo )
      const secondID = infoVo[secondKeyRefer["menu-id"]];    //二级分类ID
      const match = _addSelectList(initData, firstID, secondID);//获取匹配值
      //create second leval model data
      vm.initModelData[firstIndex][modelKeyRefer['infoVo']].push({
          [modelKeyRefer['secondID']]: secondID,
          [modelKeyRefer['btnItems']]: match[modelKeyRefer['btnItems']],
          [modelKeyRefer['dataSeeModel']]: match[modelKeyRefer['dataSeeModel']],
        }
      );
      //add status for data ( 增加状态控制开关 （全选/选中 标识）)
      vm.$set(infoVo, secondKeyRefer['checkSW'], false);   //add checkbox - sw into second leval
      vm.$set(firstItem, secondKeyRefer['indeterminate'], false);    //add checkbox - indeterminate into first leval
    })
  });
}


//satus handle and loop template
class satusHandle {
  /**
   * get lenList ( store every modules parts length which are checked )
   * 获取第三级，各个模块中选中的个数
   * @param list                handle list
   * @returns {Array}
   */
  getLenList(vm, list) {
    const modelKeyRefer = vm.$former.keyRefer["roleCheckBtn"].modelKey;//指代属性字段值 modelData
    let lenList = []
    list.forEach((firstItem) => {
      firstItem[modelKeyRefer['infoVo']].forEach((secondItem) => {
        lenList.push(secondItem[modelKeyRefer['btnItems']].length);
      })
    })
    return lenList;
  }

  /**
   * get allCheckNum
   * 获取当前3级按钮数据，各个可选按钮的总个数（对显示有分类，但属于同一级，具体参考数据格式）
   * @param vm
   * @param list
   * @returns {number}
   */
  allCheckNum(vm, list) {
    const thirdKeyRefer = vm.$former.keyRefer["roleCheckBtn"].thirdLevel;//指代属性字段值 三级
    let Num = 0;
    list.forEach((item) => {
      Num = Num + item[thirdKeyRefer['children']].length;
    })
    return Num;
  }

  /**
   * 设置三级循环体状态值
   * @param lenList
   * @param allCheckNum
   * @param index
   * @param funcinfoVo
   */
  satusChange(lenList, allCheckNum, index, funcinfoVo) {
    //设置状态值
    let _setSatus = (sw_C, sw_I) => {
      const Vo = funcinfoVo;
      Vo.checkSW = sw_C;
      Vo.indeterminate = sw_I;
    }
    //至少有一个被选中
    if (lenList[index] > 0) {
      //当前模块被全选
      if (allCheckNum === lenList[index]) {
        _setSatus(true, false);//设置三级循环体状态值
      }
      //当前模块部分被选中
      else {
        _setSatus(false, true);
      }
    }
    //没有一个被选中
    else {
      _setSatus(false, false);
    }
  }


  /**
   * loop Temp (循环模板函数)
   * @param vm            vue
   * @param type          type （ first / second ）
   * @param list          loop list
   * @param index         index
   * @param fatherOBj     father object which we should control status data on it
   * @param cb            callback
   */
  loopTemp(vm, type, list, index, fatherOBj, cb) {
    const secondKeyRefer = vm.$former.keyRefer["roleCheckBtn"].secondLevel;//指代属性字段值 二级
    const allCheckKey = 'AllCheck-' + type + '-' + index;
    const allIndeterminate = 'allIndeterminate-' + type + '-' + index;
    //当前序列循环体数据下，设置状态开关
    let status = {
      [allCheckKey]: true,//当前序列循环体数据下，是否全选
      [allIndeterminate]: false//当前序列循环体数据下，是否有选定值
    }
    //第一次循环计算
    list.forEach((item, i) => {
      //callback function
      cb(item, i);
      const childObj = type === 'first' ? item : item[secondKeyRefer['infoVo']];//内层子数组对象赋值
      //只要有一个不是全选的，isSecAllCheck 就为false
      if (!childObj.checkSW) {
        status[allCheckKey] = false;
      }
      //只要有一个是有选中的，indeterminate 就为 true
      if (childObj.indeterminate || childObj.checkSW) {
        status[allIndeterminate] = true;
      }
    })
    //设置 最外层（第一级）状态开关 属性值
    fatherOBj.checkSW = status[allCheckKey];
    fatherOBj.indeterminate = status[allIndeterminate] && !status[allCheckKey];
  }
}

/**
 * watch child Model
 * @param vm
 * @param val
 */
export function watchModel(vm, val) {
  const RCB_Key = vm.$former.keyRefer["roleCheckBtn"];
  const firstKeyRefer = RCB_Key.firstLevel;//指代属性字段值 一级
  const secondKeyRefer = RCB_Key.secondLevel;//指代属性字段值 二级
  //get optons data ( 功能权限按钮组件-渲染数组数据 )
  const opts = vm.options;
  //create new class object
  let SH = new satusHandle();
  //get lenList (store every modules parts length)
  let lenList = SH.getLenList(vm, val);

  // console.log('options 的值，构件组件显示数据如下');
  // console.info(opts);
  // console.log('childRoleCheckBtn 的值如下');
  // console.info(val);
  // console.log('获取各2级分类项长度 数组 如下：');
  // console.log(lenList);

  //set up the initial count（ 0 =>........ ）
  let index = 0;
  //first cycles calculation ( 第一次循环计算 )
  SH.loopTemp(vm, 'first', opts, index, vm.firstStatus, (firstItem, i) => {
    //second cycles calculation ( 第二次循环计算 )
    SH.loopTemp(vm, 'second', firstItem[firstKeyRefer['children']], index, firstItem, (secondItem, j) => {
      //funcinfoVo proptype
      const Vo = secondItem[secondKeyRefer['infoVo']];
      //获取当前3级按钮数据，各个可选按钮的总个数（对显示有分类，但属于同一级，具体参考数据格式）
      const allCheckNum = SH.allCheckNum(vm, Vo[secondKeyRefer['btnItems']]);
      // console.log('！！=====================================！！');
      // console.log(i, j)
      // console.log('当前循环序列：' + index);
      // console.log('标题：' + Vo.funcinfoFuncname);
      // console.log('当前2级分类项个数如下：' + allCheckNum);
      // console.log('当前选中的个数如下：' + lenList[index]);
      // console.log('！！=====================================！！');
      //set the state value of the third level loop ( 设置三级循环体状态值 )
      SH.satusChange(lenList, allCheckNum, index, Vo);
      index++;
    })
  })

}

//check handle methods
export class checkAllMethods {
  /**
   *  check all (checkbox)  ( 在第一级，选中所有的checkbox )
   *  @param param            Object
   *  ===========   vm                   Vue component
   *  ===========   value                check model value
   */
  checkAllChange(param) {
    for (let firstIndex = 0; firstIndex < param.vm.options.length; firstIndex++) {
      this.checkAllModulesChange(
        {
          vm: param.vm,
          value: param.value ? true : false,
          firstItem: param.vm.options[firstIndex],
          firstIndex: firstIndex
        }
      );//check all modules (checkbox)
    }
  }

  /**
   *  check all modules (checkbox)  ( 在第二级，选中所有的checkbox )
   *  @param param            Object
   *  ===========   vm                   Vue component
   *  ===========   value                check model value
   *  ===========   firstItem            first item
   *  ===========   firstIndex           first index
   */
  checkAllModulesChange(param) {
    if (!param || isEmpty(param)) {
      return;
    }
    const RCB_Key = param.vm.$former.keyRefer["roleCheckBtn"];
    const firstKeyRefer = RCB_Key.firstLevel;//指代属性字段值 一级
    const secondKeyRefer = RCB_Key.secondLevel;//指代属性字段值 二级
    const children = param.firstItem[firstKeyRefer.children];  //second items => it'area-linkage children list
    //change first checkbox model value ( true <=> false )
    param.firstItem[secondKeyRefer['checkSW']] = param.value;
    //run check all second checkbox in second modules
    for (let secondIndex = 0; secondIndex < children.length; secondIndex++) {
      this.checkAllItemsChange({
          vm: param.vm,
          value: param.value ? true : false,
          secondItem: children[secondIndex],
          firstIndex: param.firstIndex,
          secondIndex: secondIndex
        }
      );//check all items (checkbox)
    }
  }

  /**
   *  check all items (checkbox)  ( 在第三级，选中所有的checkbox )
   *  @param param            Object
   *  ===========   vm                   Vue component
   *  ===========   value                check model value
   *  ===========   secondItem           second item
   *  ===========   firstIndex           first index
   *  ===========   secondIndex          second index
   */
  checkAllItemsChange(param) {
    if (!param || isEmpty(param)) {
      return;
    }
    const RCB_Key = param.vm.$former.keyRefer["roleCheckBtn"];
    const secondKeyRefer = RCB_Key.secondLevel;//指代属性字段值 二级
    const thirdKeyRefer = RCB_Key.thirdLevel;//指代属性字段值 三级
    const modelKeyRefer = RCB_Key.modelKey;//指代属性字段值 modelData

    const infoVo = param.secondItem[secondKeyRefer["infoVo"]]; //二级分类 infoVo
    const btnList = infoVo[secondKeyRefer["btnItems"]]; //二级分类 - 按钮信息列表
    const valList = param.vm.childRoleCheckBtn[param.firstIndex][modelKeyRefer['infoVo']][param.secondIndex][modelKeyRefer['btnItems']]; //model value list

    //change second checkbox model value ( true <=> false )
    infoVo[secondKeyRefer['checkSW']] = param.value;

    //btn list handle <=> btn model data
    btnList.map((typeItem, thirdIndex) => {
      typeItem[thirdKeyRefer['children']].map((btnItem, j) => {
        const val = btnItem[thirdKeyRefer["value"]];
        //check all => true
        if (param.value) {
          if (!arrContainObj(valList, val)) {
            valList.push(val);    //push into
          }
        }
        //uncheck all => false
        else {
          valList.splice(0, valList.length);//empty list
        }
      })
    });
  }
}
