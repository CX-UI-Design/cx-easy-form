<template>
  <div class="cx-auto-form">
    <!--dialog - auto-form response check infomation-->
    <component :is="$SN+'dialog'" class="res-check-dialog" title="自动表单数据检测" :visible.sync="dialogVisible" width="900px">
      <p class="win-tit res-check-tit" v-if="dataCheckResult.length>0"><span>▌</span>&nbsp;表单数据错误信息</p>
      <!--res-check-table-->
      <cx-res-check-table :tableData="dataCheckResult" border v-if="dataCheckResult.length>0"></cx-res-check-table>
      <p class="win-tit"><span>▌</span>&nbsp;表单数据详细信息</p>
      <!--data details-->
      <cx-info-table-show v-model="formDataShow" :tableHead="dataListHead" border></cx-info-table-show>
    </component>
    <!--auto-form-->
    <el-form :ref="autoFormID" :model="formData.modelData" class="cx-auto-form-container clear" :inline="true"
             v-loading="loading" element-loading-text="拼命加载中" :style="{width: autoFormWidth+'px'}" :validate-on-rule-change="true"
             v-if="formData && fullRender"
    >
      <!--content - 表单内容部分 -->
      <div class="cx-autoForm-content fl">
        <div v-for="(firstItem,firstIndex) in formData.fields" :index="firstIndex" :key="firstIndex" :class="['fl','auto-form-part-'+firstIndex ]">
          <!--group 分组部分-->
          <!--占位区域-->
          <div v-if="firstItem[fieldsRefer['item-type']] === 'group'" class="cx-group-item clear" v-show="!firstItem[fieldsRefer['hidden']]"
               :style="{width: colmax * firstItem[fieldsRefer['colspan']]+ 'px'}">
            <!--实际范围区域-->
            <div :style="{ height: firstItem[fieldsRefer['height']]||firstItem[fieldsRefer['height']]===0?firstItem[fieldsRefer['height']]+'px':'auto',
              width: firstItem[fieldsRefer['width']]+'px'}" class="cx-group fl clear">
              <!--内容循环-->
              <div v-for="(secondItem,secondIndex) in firstItem[fieldsRefer['children']]" :index="secondIndex" :key="secondIndex"
                   :class="['cx-group-part','group-part-'+secondIndex,'fl' ]">
                <!--repeat-item 控件主体部分-->
                <component :is="$SN+'total-muster-item'" repeatItemType="groupItem" :formData="formData" :coverData="coverData" :formItem="secondItem"
                           :formItemFather="firstItem[fieldsRefer['children']]" :firstIndex="firstIndex" :secondIndex="secondIndex"
                           :cueType="cueType" :maxColWidth="groupBaseColWidth(firstItem)" v-if="itemsRender">
                </component>
              </div>
            </div>
          </div>
          <!--normal 常规部分-->
          <component :is="$SN+'total-muster-item'" :formData="formData" :coverData="coverData" :formItem="firstItem" :formItemFather="formData.fields"
                     :maxColWidth="colmax" :firstIndex="firstIndex" :secondIndex="null" :cueType="cueType"
                     v-if="firstItem[fieldsRefer['item-type']] !== 'group'&& itemsRender" repeatItemType="normalItem"
          >
          </component>
        </div>
      </div>
      <!--handle 操作按钮部分-->
      <el-form-item :is="$SN+'auto-form-operation'" :class="handleModulesClass" :style="handleModulesStyle" v-if="submitRender&&buttonInfo">
        <component :autoFormID="autoFormID" :buttonInfo="buttonInfo"></component>
        <!--<ns-Button v-for="(btnItem,index) in buttonInfo" :index="index" :key="index" :type="btnItem.style" :size="btnItem.size" :plain="btnItem.plain"-->
        <!--:round="btnItem.round" :disabled="btnItem.disabled" :roleInfo="btnRoleInfo(btnItem)" @click="buttonEvent(btnItem,autoFormID)">-->
        <!--</ns-Button>-->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  /*
  自动表单参数赋值解释：
  1、dynamicUrl（动态交互获取下拉数据，请求后端地址）：
        第一选择：'coverData' 中对应地属性对应字段值
        第二选择：'表单循环数据' 中对应地属性对应字段值
  2、dynamicQuery（动态交互获取下拉数据，请求后端参数）：
        第一选择：'coverData' 中对应地属性对应字段值
        第二选择：'表单循环数据' 中对应地属性对应字段值
  3、tableHead（表单内表格-表头数据）：
        第一选择：'coverData' 中对应地属性对应字段值，注意：在此项目中，因为后端字段配置问题，不能提供表头数据，故，一般为前端提供静态表头数据以配合业务。
        第二选择：'表单循环数据' 中对应地属性对应字段值
  4、scale（表单元素（图片），宽度高度比例（ 宽度 / 高度 ),设置scale后，宽度值失效）：
        第一选择：'coverData' 中对应地属性对应字段值
        第二选择：'表单循环数据' 中对应地属性对应字段值
  5、itemHeight（form-item 高度值）：
        控件类型为'span'时，高度为 height * row
        控件类型为'checkbox / radio '时，无总体高度（如果单选个体多，且宽度确定的情况下会上下分为好几行），以基础行高和单个选项本身的高度替代。
        控件类型为'textere'时，高度为 。。。。。。。。。。。。
        控件类型为其他时，高度为对应字段值
   */
  import {cxResCheckTable, cxInfoTableShow} from '../../../Auto-form-check/index';//data check vue template
  import LoadingData from './dataHandle';//require data (remote/local) methods

  export default {
    name: 'default-auto-form',
    components: {
      cxResCheckTable,
      cxInfoTableShow,
    },
    props: {
      autoFormID: {type: String},//自动表单唯一ID值（根据业务自定义）
      cueType: {type: String, default: 'normal'},//cueType - 表单验证提示展现类型（normal / all / only-error / only-error-hover）
      coverData: {type: Object},//覆盖写入数据
      isLocal: {type: Boolean, default: false},//is loading local Data - formData
      isFreeSubmit: {type: Boolean, default: false},//is custom submit model data
      localData: {type: Object, default: null},//local Data - formData (not {} / [] / null /undefined / false .......)
      requestUrl: {type: String},//request url
      submitUrl: {type: String},//submit url
      isCheck: {type: Boolean, default: false},//is check auto-form data
      //request query
      query: {
        type: [Object, String, Number], default: function () {
          return {}
        }
      },
      buttonPosition: {type: String, default: 'right'}, //auto-form Button postion
      /*
      * auto-form Button information
      * type:  'submit','reset','custom'
      * style: primary,success,warning,danger,info,text
      */
      buttonInfo: {type: Array},
    },
    data() {
      return {
        fieldsRefer: this.$former.keyRefer["auto-form"].fields,//keyRefer list
        infoRefer: this.$former.keyRefer["auto-form"].info,//keyRefer list
        loading: true,//loding
        itemsRender: false,//items start render
        formData: null,//form data
        customModelData: {},//submit model data
        itemsGap: 0,
        submitRender: false, //submit operation module render
        noLabelList: ['separator'],//no-label list （ form-component ）
        formDataShow: {},
        dataCheckResult: [], //the table-data of auto-form data list show
        dialogVisible: {visible: false}, //dialog-visible
        dataListHead: this[this.$CXFnName].getTableHead('autoFormTest_DataList'),//the table-head of auto-form data list show
      }
    },
    computed: {
      //the max-width of col (最大基础列宽)
      colmax() {
        if (this.itemsRender) {
          return this.formColMax(this.formData)
        }
        else {
          return 0
        }
      },
      //autoForm - Width (自动表单整体宽度)
      autoFormWidth() {
        if (this.itemsRender) {
          const info = this.formData.info;
          const wsKey = this.infoRefer["width-supply"];
          let supplyW = info.hasOwnProperty(wsKey) ? info[wsKey] : 0;//自动表单宽度补足值
          supplyW = supplyW ? parseInt(supplyW) : 0;
          if (info) {
            return (this.colmax + this.itemsGap) * parseInt(info[this.infoRefer["form-cols"]]) + supplyW;
          }
          else {
            throw "info'data in auto-form is error or null，please find it"
          }
        }
        else {
          return 0;
        }
      },
      //item - handle Modules class （ 操作模块Class类名集合 ）
      handleModulesClass() {
        /*
        * == 根据 props - buttonPosition 属性判断 => 生成模块Class类名,共有4种类型：==
        * 1、f-left = >'txtL':常规表单，按钮模块位置居左，处在表单内部.
        * 2、f-right = >'txtR':常规表单，按钮模块位置居右，处在表单内部.
        * 3、e-left = >'e-left':弹窗表单，按钮模块位置居左，处在表单外部，弹窗左下角.
        * 4、e-right = >'e-right':弹窗表单，按钮模块位置居右，处在表单外部，弹窗右下角.
        */
        const bp = this.buttonPosition; //Button position sign ( 按钮位置标识 )
        /**
         * _judge string
         * @param str
         * @param index
         * @returns {boolean}
         * @private
         */
        function _judgeStr(str, index) {
          return bp.includes(str, index)
        }

        return [
          'ns-autoForm-handle', 'fl', {'txtC': bp === 'center'}, {'txtL': _judgeStr('-left', 1)},
          {'txtR': _judgeStr('-right', 1)}, {'e-left': bp === 'e-left'}, {'e-right': bp === 'e-right'},
          {'f-left': bp === 'f-left'}, {'f-right': bp === 'f-right'}
        ];
      },
      //item - handle modules style （ 操作模块样式集合 ）
      handleModulesStyle() {
        const handleModulesTopGap = 20;//submit-handle 上间隙  （ 关系到验证提示信息的位置显示空间 ）
        const handleModulesBottomGap = 20;//submit-handle 下间隙 （ 关系到验证提示信息的位置显示空间 ）
        return {
          width: this.autoFormWidth + 'px',
          'margin-top': this.cueType !== 'normal' ? handleModulesTopGap + 'px' : null,
          'margin-bottom': this.cueType === 'normal' ? handleModulesBottomGap + 'px' : null,
          'padding-left': this.buttonPosition.includes('e-', 0) || this.buttonPosition === 'center' ? null : parseInt(this.formData.info[this.infoRefer['label-width']]) + 'px',
        };
      },
      //full-fullRender (整体渲染开关)
      fullRender() {
        const showKey = 'show';//在表单控制数据中，控制显示的字段名
        const ID = this.autoFormID;
        const controllerList = this.$store.state.Form.control.formController; //表单控制数组
        return this.isShowinControl(controllerList, ID, showKey);
      }
    },
    watch: {
      // if fullRender (this auto-form ID is not in createList in Vuex) change,empty form-data and request again
      fullRender() {
        this.formData = null;
        this.LoadData();//loading auto-form data
      },
    },
    created() {
      this.LoadData();//loading auto-form data
    },
    mounted() {
      //submit operation module render
      this.submitRender = true;
    },
    updated: function () {

    },
    filters: {},
    methods: {
      /**
       * Load data for auto-form (local / request)
       */
      LoadData() {
        //full-fullRender (整体渲染开关是否开启)
        if (this.fullRender) {
          //加载获取 表单数据
          LoadingData(this);
        }
      },
      /**
       * set max-base-colWidth in auto-form
       * @param formData          data-form from back-sql
       * @returns {number}
       */
      formColMax(formData) {
        const formFields = formData.fields;  //form-fields infomation
        const info = formData.info; //form-info infomation
        if (info && this.itemsRender) {
          let max = 0;
          let a;
          const formCol = parseInt(info[this.infoRefer['form-cols']]);//form-colspan;
          formFields.map((val, index) => {
            const itemId = val[this.fieldsRefer['model-key']] + '-' + val[this.fieldsRefer['item-type']] + '-' + index;// get items-ID
            const fieldCols = parseInt(val[this.fieldsRefer['colspan']]); // get fields-colspan
            const w = val[this.fieldsRefer['width']];// get fields-width
            //check the number of form-cols and field-cols
            if (fieldCols > formCol) {
              throw "The error index: " + index + " , item_ID: " + itemId + ", In your auto-formData configuration list ,the value of field-Col" +
              " is larger than form-col of form , you should change form-col more large or change field-Col more small, find it again.";
            }
            if (w === null || typeof w === 'undefined') {
              a = 0
            }
            else {
              a = (parseInt(w)) / fieldCols;
              max <= a ? max = a : max = max;
            }
          });
          console.log('最大单位宽度：');
          console.log(max);
          return max;
        }
      },

      /**
       * Button event distribute
       * @param btnItem       Button information
       * @param formName      form name
       */
      buttonEvent(btnItem, formName) {
        const type = btnItem.funcType;
        const event = btnItem.event;
        if (type === 'submit') {
          this.submitForm(formName);
        }
        else if (type === 'reset') {
          this.resetForm(formName);
        }
        else {
          this.$emit(event, {
            vm: this,                               //vue
            info: btnItem,                          // Button information
            formData: this.formData,                //formData
            formName: formName                      //form name
          });
        }
      },
      /**
       * auto form submit
       * @param formName      form name
       */
      submitForm(formName) {
        console.log('提交数据如下：');
        console.log(this.formData.modelData);
        const params = {
          vm: this,                               //vue
          formData: this.formData,                //formData
          formName: formName                      //form name
        }
        //before validate handle
        this.$emit('validate-before', params);
        this.$refs[formName].$refs['form'].validate((valid) => {
          //表单提交添加'all-check' 标识到checkList中，开启第一级验证开关（即对所有自定义验证的表单进行验证）。
          this.$store.dispatch('setCustomCheck', 'all-check');   //多张表单 存在bug
          //before submit callback
          this.$emit('submit-before', params);
          //validate right
          if (valid && this.$Utils.form.checkRange('.ns-form')) {
            //sure quert for auto-form submit
            const query = this.isFreeSubmit ? this.customModelData : this.formData.modelData;
            console.log(query);
            //submit request
            this.autoForm.submit(this.submitUrl, query, () => {
              //submit success callback
              this.$emit('submit-success', params);
            })
          } else {
            //submit error callback
            this.$emit('validate-error', params);
            return false;
          }
        });
      },

      /**
       * auto form reset
       * @param formName
       */
      resetForm(formName) {
        const params = {
          vm: this,                               //vue
          formData: this.formData,                //formData
          formName: formName                      //form name
        }
        //element base reset function
        this.elResetForm(formName);
        this.$store.dispatch('setCustomCheck', 'no-check');
        //附加重置方法
        this.$emit('reset', params);
      },

      /**
       * element base reset function
       * @param formName
       */
      elResetForm(formName) {
        this.$refs[formName].$refs['form'].resetFields();
      },

      /**
       * judge this auto form is show or not by parameter form formController - vuex （ 判断表单整体是否触发显示 ）
       * @param list        formController List
       * @param ID          auto-form-ID
       * @param key         show-key （在表单控制数据中，控制显示的字段名）
       * @returns {boolean}
       */
      isShowinControl(list, ID, key) {
        return list.some((item, index) => {
          if (item.hasOwnProperty(ID)) {
            const switchVal = item[ID][key];
            return this.$Utils.isXType('boolean', switchVal) && switchVal;
          }
        })
      },
      /**
       * groupBaseColWidth
       * @param formItem
       * @returns {number}
       */
      groupBaseColWidth(formItem) {
        const baseColWidth = parseInt(formItem[this.fieldsRefer['width']]);
        const groupCols = parseInt(formItem[this.fieldsRefer['groupMaxColspan']]);
        return baseColWidth / groupCols;
      },
      /**
       * Button role information ( 按钮权限信息 )
       * @param info            role information (Object)
       * @returns {{code, name, nameEn, areaType, index, btnType, coerciveShow: (*|boolean)}}
       */
      btnRoleInfo(info) {
        return {
          code: info.code,//按钮编码
          name: info.name, //按钮名称
          nameEn: info.nameEn,//按钮英文名称
          areaType: info.areaType,//按钮区域类型
          index: info.index,//排序号
          btnType: info.btnType,//按钮类型 （single / dropDown）
          coerciveShow: info.coerciveShow,//按钮是否强制显示
        };
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "../../../Form-style/index";


</style>
