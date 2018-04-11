<template>
  <!--select-->
  <div class="cx-area-linkage" :style="{ width: width+'px', height: height+'px'}"
       v-loading="loading" element-loading-text="加载中"
  >
    <el-select v-for="(selectPart,index) in select_info" :index="index" :key="index" class="cx-select area-link-part fl" v-if="isRendered"
               v-model="areaLinkageStroe[selectPart.modelKey]" :disabled="selectPart.disabled" :clearable="clearable"
               :placeholder="selectPart.placeholder" @visible-change="visibleChange(index)" @change="change(index)"
               :style="{width: selectPart.width+'px' ,height: selectPart.height,
               'margin-right':selectPart.index === select_info.length? 0:areaGap+'px' }">
      <el-option v-for="item in items[selectPart.type]" :key="item.value" :label="item.label" :value="item.value"
                 :disabled="item.disabled"></el-option>
    </el-select>
  </div>
</template>
<script>
  import {initAreaLinkage} from '../../../../api/area-linkage/area-linkage';
  import {getsSelectOption} from '../../../../api/select/select';

  export default {
    name: "default-area-linkage",
    data() {
      return {
        childAreaLinkage: '',
        areaLinkageStroe: '',
        loading: false,//loding
        isRendered: false, //is rendered ( request init data )
        areaGap: 20,//The gap between the select
        items: {provinces: [], cities: [], districts: [], streets: []}, //init items
      }
    },
    computed: {
      //base width
      basewidth() {
        const num = this.judgeAreaNum();
        const a = parseInt((this.width - (num - 1) * this.areaGap) / (num * 2 - 1));
        return a;
      },
      baseHeight() {
        return this.$Utils.convertUnits(this.height, 'height');
      },
      //select - information
      select_info() {
        const selectInfo = [
          {
            index: 1,
            modelKey: 'province',
            type: 'provinces',
            aboveModelKey: null,
            placeholder: '省',
            width: this.basewidth,
            height: this.baseHeight,
            areaLevel: '1',
            requestSwitch: true,        //request switch
            disabled: false,
            clearable: true,
          },
          {
            index: 2,
            modelKey: 'city',
            type: 'cities',
            aboveModelKey: 'province',
            placeholder: '市',
            width: this.basewidth * 2,
            height: this.baseHeight,
            areaLevel: '2',
            requestSwitch: true,
            disabled: false,
            clearable: true,
          },
          {
            index: 3,
            modelKey: 'district',
            type: 'districts',
            aboveModelKey: 'city',
            placeholder: '区',
            width: this.basewidth * 2,
            height: this.baseHeight,
            areaLevel: '3',
            requestSwitch: true,
            disabled: false,
            clearable: true,
          },
          {
            index: 4,
            modelKey: 'street',
            type: 'streets',
            aboveModelKey: 'district',
            placeholder: '街道',
            width: this.basewidth * 2,
            height: this.baseHeight,
            areaLevel: '4',
            requestSwitch: true,
            disabled: false,
            clearable: true,
          }
        ];
        return selectInfo.slice(0, this.judgeAreaNum());
      },
    },
    created() {
      //init require
      this.initRequire(this.dynamicUrl, this.dynamicQuery);
      this.areaLinkageStroe = this.fatherAreaLinkage;
    },
    methods: {
      /**
       * request init data in area-linkage component 初始化数据加载（有初始数据显示的需要）
       * @param url
       * @param query
       */
      initRequire(url, query) {
        if (url && query) {
          this.loading = true;
          initAreaLinkage(url, {queryParam: query})
            .then(response => {
                //when res is null/[]/{}, avoid destroying data formats.
                if (response.resultData) {
                  this.items = response.resultData;
                }
                this.isRendered = true;
                this.loading = false;
              }
            ).catch(err => {
            return Promise.reject(err);
          })
        }
        else {
          this.isRendered = true;
        }
      },
      //request data when click
      visibleChange(index) {
        const selectPart = this.select_info[index]; //one of area-select information
        const type = this.select_info[index].type;   //one of area-select area-type
        //when request switch is open ， request item-data for area-select
        if (selectPart.requestSwitch) {
          const areaLevel = selectPart.areaLevel;
          const areaCode = this.areaLinkageStroe[selectPart.aboveModelKey];
          console.log('请求 "' + selectPart.type + '" 数据：')
          const query = areaLevel === '1' ? {areaLevel: areaLevel} : {areaLevel: areaLevel, areaCode: areaCode}
          getsSelectOption(this.dynamicUrl, query)
            .then(response => {
                this.items[type] = response.resultData[type];
                this.select_info[index].requestSwitch = false;
              }
            ).catch(err => {
            return Promise.reject(err);
          })
        }
      },
      change(index) {
        //When one of these changes, the model-value whitch is behind should be empty ,and open it'area-linkage request switch
        for (let i = index + 1; i < this.judgeAreaNum(); i++) {
          const modelKey = this.select_info[i].modelKey;    //one of v-model key
          const itemKey = this.select_info[i].type;       //one of area-select area-type
          this.areaLinkageStroe[modelKey] = '';         //empty model-value
          this.items[itemKey] = [];                    //clera items
          this.select_info[i].requestSwitch = true; //open request-switch
        }
      },
      //judge the number of area-linkage package
      judgeAreaNum() {
        return this.type === 'area' ? 3 :
          this.$Utils.strContainPlace(this.type, 'area-', 0) ?
            parseInt(this.$Utils.delsubstr(this.type, 'area-')) : 0
      },
      getlastSelKey() {
        return this.select_info[this.select_info.length - 1].modelKey;
      }
    },
    props: {
      fatherAreaLinkage: [String, Object],
      /*  =======================  获取下拉菜单内容  =======================  */
      //1、动态获取select-option下拉菜单内容
      dynamicUrl: {type: String, default: null},
      dynamicQuery: {type: [Object, String, Array], default: null},
      /*  ==================================================================  */
      type: {type: String, default: 'area'},
      width: {type: [String, Number], default: '100%'},
      height: {type: [String, Number], default: '32px'},
      clearable: {type: Boolean, default: true},//单选时是否可以清空选项
    },
    model: {
      prop: 'fatherAreaLinkage',
      event: 'change'
    },
    watch: {
      //只有在选择完最后一级下拉框的时候，才会赋值给 childAreaLinkage
      areaLinkageStroe: {
        handler: function (val, oldVal) {
//          if (val) {
//            if (val.hasOwnProperty(this.getlastSelKey())) {
//              if (val[this.getlastSelKey()]) {
//                this.childAreaLinkage = val ? this.areaLinkageStroe : null;
//                return;
//              }
//            }
//          }
//          this.childAreaLinkage = null;
        },
        deep: true
      },
      childAreaLinkage() {
        this.$emit('change', this.childAreaLinkage);
      },
      fatherAreaLinkage() {
        this.childAreaLinkage = this.fatherAreaLinkage;
      }
    },
  }
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
