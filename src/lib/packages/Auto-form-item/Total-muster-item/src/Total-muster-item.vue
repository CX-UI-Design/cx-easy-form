<template>
  <!-- auto-muster-item -->
  <muster-item style="box-sizing: border-box"
               v-show="!dataSources(formItem,'hidden')"
               :itemId="dataSources(formItem,'model-key')+'-'+dataSources(formItem,'item-type')+'-'+index"
               v-model="formData.modelData[dataSources(formItem,'model-key')]"
               :modelKey="dataSources(formItem,'model-key')"
               :secondModelKey="dataSources(formItem,'secondModelKey')"

               :prop="dataSources(formItem,'model-key')"
               :required="dataSources(formItem,'required')"
               :require-msg="dataSources(formItem,'require-msg')"
               :rules-regulation="dataSources(formItem,'rules-regulation')"
               :rules-type="dataSources(formItem,'rules-type')"

               :item-type="dataSources(formItem,'item-type')"
               :type="dataSources(formItem,'second-type')"
               :bizType="dataSources(formItem,'third-type')"

               :width="componentWidth(formItem)"
               :height="dataSources(formItem,'height')"
               :label="dataSources(formItem,'label')"
               :labelWidth="dataSources(formItem,'label-width')||dataSources(formItem,'label-width')=== 0 ?
                                 dataSources(formItem,'label-width'):0"


               :infoLabelWidth="formData.info[infoRefer['label-width']]"
               :itemWidth="maxColWidth*parseInt(dataSources(formItem,'colspan'))"
               :itemHeight="dataSources(formItem,'item-type') === 'span'?
                                 parseInt(dataSources(formItem,'height'))*parseInt(dataSources(formItem,'rowspan')):
                                 dataSources(formItem,'height')"

               :freedom="dataSources(formItem,'freedom')"
               :placeholder="dataSources(formItem,'placeholder')"
               :disabled="dataSources(formItem,'disabled')"
               :readonly="dataSources(formItem,'readonly')"
               :rows="dataSources[formItem,'rowspan']"
               :max="dataSources(formItem,'max')"
               :min="dataSources(formItem,'min')"
               :step="dataSources(formItem,'step')"
               :icon="dataSources(formItem,'icon')"
               :editable="dataSources(formItem,'editable')"
               :clearable="dataSources(formItem,'clearable')"
               :multiple="dataSources(formItem,'multiple')"

               :items="dataSources(formItem,'items')"
               :initItems="dataSources(formItem,'initItems')"


               :dynamicUrl="dataSources(formItem,'dynamicUrl')"
               :dynamicQuery="dataSources(formItem,'dynamicQuery')"
               :dynamicSrc="dataSources(formItem,'item-type') === 'avatar'?formData.modelData[dataSources(formItem,'model-key')]:
                                 dataSources(formItem,'dynamicSrc')"


               :range="dataSources(formItem,'range')"
               :on-off="{sw:false}"
               :scale="dataSources(formItem,'scale')"
               :tableHead="dataSources(formItem,'tableHead')"
               :tableItems="formData.tableItems"

               :format="dataSources(formItem,'format')"
               :value-format="dataSources(formItem,'value-format')"
               :pickerOptions="dataSources(formItem,'pickerOptions')"
               :cueType="dataSources(formItem,'cueType')?dataSources(formItem,'cueType'):cueType"

               :style="{'margin-right':(itemRightGap * formItem[fieldsRefer['colspan']]) +'px',
                           'margin-left':(itemLeftGap * formItem[fieldsRefer['colspan']]) +'px',
                           'margin-top':cueType !=='normal'?itemTopGap +'px':0,
                           'margin-bottom':cueType ==='normal'?itemBottomGap +'px':0}"

               @change="autoFormFunc('change',formItem,index)"
               @click="autoFormFunc('click',formItem,index)"
               @visible-change="autoFormFunc('visibleChange',formItem,index)"
  >
  </muster-item>
</template>
<script>
  import musterItem from '../../Muster-item/muster-item.vue'
  import DP from '../../DP'

  export default {
    name: 'default-total-muster-item',
    components: {
      musterItem
    },
    data() {
      return {
        autoFormUpdated: false,// data and view is updated or not
        noLabelList: ['separator'],//no-label list （ form-component ）
        fieldsRefer: this.$former.keyRefer["auto-form"].fields,//keyRefer list
        infoRefer: this.$former.keyRefer["auto-form"].info,//keyRefer list
        //定位及尺寸
        itemLeftGap: 0, //item 左边间隙
        itemRightGap: 0,//item 右边间隙
        itemTopGap: 20,//item 上间隙  （ 关系到验证提示信息的位置显示空间 ）
        itemBottomGap: 20,//item 下间隙 （ 关系到验证提示信息的位置显示空间 ）
        itemsBaseHeight: 32,   //items  基础 高度
      }
    },
    props: {
      repeatItemType: {type: String},//type
      formData: {type: Object},//主数据 form data
      formItemFather: {type: Array},//formItem 的父级数据 (fields  /  fields-group)
      formItem: {type: Object},//formItem 数据 (fields-items / fields-group-childitems)
      coverData: {type: Object},//覆盖数据
      firstIndex: {type: Number},//first formItem index
      secondIndex: {type: Number},//second - formItem index
      cueType: {type: String, default: 'normal'},//cueType - 表单验证提示展现类型（normal / all / only-error / only-error-hover）
      maxColWidth: {type: [Number, String]},//max col-width  单位最大列宽
    },
    computed: {
      //group-items => second-index  /   normal-items => first-index
      index() {
        return this.secondIndex || this.secondIndex === 0 ? this.secondIndex : this.firstIndex;
      },
    },
    created() {

    },
    mounted() {
      this.$nextTick(function () {
        //auto-form updated,open randered switch (自动表单更新完成状态时候，打开组件渲染完成开关,某些操作需在渲染全部完成之后进行)
        this.autoFormUpdated = true;
      })
    },
    methods: {
      /**
       * auto-form handle-function for click/change/blur...（ 自动表单 方法绑定 集中处理 ）
       * @param type        judge click,change and blur
       * @param key         property - key
       * @param modelKey    model value - Key
       * @param formitem    each form-fields-data ( contain  form-elements attributes )
       * @param index       each form-fields-data index     (itemData, coverData, key, modelKey)
       * @param e           event
       */
      autoFormFunc(type, formitem, index, value) {

        //updated 组件渲染完成的情况下执行以下操作
        if (this.autoFormUpdated) {
          const modelKey = formitem[this.fieldsRefer['model-key']];//在field中有值对应model-data中对应的key值，
          const itemFunc = this.dataSources(formitem, 'fnList');//dataSources ( choice data( property value ) in cover-data > field-data )
          // e.currentTarget.removeEventListener("visible-change", this.visibleChange, false);
          //set params for autoForm function ( 设置参数格式 )
          const params = {
            vm: this,                                      //vue
            type: type,                                    //function-type (click,change,blur)
            formData: this.formData,                       //formData
            formItemFather: this.formItemFather,           //formItem 的父级数据 (fields  /  fields-group)
            formItem: formitem,                            //formItem 数据 (fields-items / fields-group-childitems)
            index: index,                                  //index for formItem in fields/fields-group
            modelKey: modelKey,
            groupIndex: this.firstIndex,                   //group index in fields
            keyRefer: this.$former.keyRefer["auto-form"]   //key refer
          }

          //array format （ 数组格式，直接解析，执行其中各个方法 ）;
          if (this.$Utils.judgeType(itemFunc) === 'array') {
            itemFunc.forEach((event, i) => {
              //if the father-string contains the specific string at the beginning（ 识别函数方法是否符合此方法的规范 ）
              if (event.includes(type + '-', 0)) {
                const fnname = this.$Utils.delsubstr(event, type + '-');
                //if have property 'function-name'
                if (this.$FormEvent.hasOwnProperty(fnname)) {
                  this.$FormEvent[fnname](params);  //call the ns-Query method to run
                }
                else {
                  throw 'this function-name is not be found in the local mothods，you better to find your auto-form data, ' +
                  'if the parameter "resourcefieldBindingfnList" is correct.';
                }
              }
            })
          }
          //function format，直接执行
          else if (this.$Utils.judgeType(itemFunc) === 'function') {
            itemFunc(params);//执行方法
          }
          else {
//          alert(other formate)
          }
        }
      },

      /**
       * dataSources ( choice data( property value ) in cover-data > field-data )
       * @param formitem       field data
       * @param prop           property-key in fields-refer
       * @returns {*}
       */
      dataSources(formitem, prop) {
        return DP.dataSources(this, formitem, prop);
      },

      /**
       * component-width calculation
       * @param formitem            field data
       * @returns {*}
       */
      componentWidth(formitem) {
        return DP.componentWidth(this, formitem);

      },
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
