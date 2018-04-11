<!--选人控件-信息联动-->
<template>
  <div class="customer-info-linkage" v-model="childCustomLinkage">
    <div :class="['customer-info-linkage-item',{'cx-required':firstItem.isRequired},{'cx-notRequired':!firstItem.isRequired}]" v-for="(firstItem,firstIndex) in linkageInfo"
         :index="firstIndex" :key="firstIndex" v-if="linkageInfo">
      <!--label 部分 一 -->
      <label :for="firstItem.modelKey" :class="['cx-label fl']"
             :style="{width: labelWidth+'px'}">{{firstItem.label}}</label>
      <!--远程输入搜索部分-->
      <el-select v-if="firstIndex===0"
                 class="cx-select-remote fl"
                 v-model="firstItem.modelVal"
                 :disabled="disabled" :clearable="clearable" :placeholder="placeholder"
                 :size="size" :remote="remote" :remote-method="remoteMethod" :filterable="filterable"
                 :loading="loading" :style="{width: select_width}"
                 @change="change(firstItem.modelVal,linkageInfo)">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        >
        </el-option>
      </el-select>
      <!--信息联动部分-->
      <component :is="$SN+'input'" v-model="firstItem.modelVal" type="text" :disabled="true" size="small" :width="select_width"
                 :height="select_height" v-if="firstIndex!==0">
      </component>
    </div>
  </div>
</template>
<script>
  import linkageInfoList from './linkageInfoList'
  import {setRemoteOption, choiceRemoteMethod, customerInfo} from '../../Select-remote/src/remoteFunc'

  export default {
    name: 'default-customer-info-linkage',
    data() {
      return {
        childCustomLinkage: {},
        options: [],
        loading: false,
        remoteSW: false,
        remoteList: [],//remote request data list
        linkageInfo: [],//set label value information
      }
    },
    computed: {
      select_width() {
        return parseInt(this.width) - parseInt(this.labelWidth) + 'px';
      },
      select_height() {
        return this.$Utils.convertUnits(this.height, 'height');
      },
    },
    created() {
      this.remoteList = this.fatherCustomLinkage;
      //init data => change model-value in linkage-Info-List => change display-value in component
      this.initDataReady(this.fatherCustomLinkage, linkageInfoList);
      this.judgeSelectType();//judge select type and handle
    },
    methods: {
      initDataReady(initData, linkageInfoList) {
        const Linfo = JSON.parse(JSON.stringify(linkageInfoList));
        this.linkageInfo = this.getlinkageInfo(Linfo, this.type);
        if (this.$Utils.judgeType(initData) === 'object') {
          this.linkageInfo.forEach(item => {
            const key = item['modelKey'];
            if (initData.hasOwnProperty(key)) {
              item['modelVal'] = initData[key];
            }
          })
          this.options = setRemoteOption([initData]);//set remote option
        }
        else {
          return;
        }
      },

      /**
       * get linkage info
       * @param list          linkage - info - list
       * @param type          business type
       * @returns {object}
       */
      getlinkageInfo(list, type) {
        for (let i = 0; i < list.length; i++) {
          if (list[i].type === type) {
            return list[i].linkageItems;
          }
        }
      },

      //judge select type and handle
      judgeSelectType() {
        this.remoteSW = this.remote && this.filterable ? true : false;  // is open remote switch （ 是否开启远程搜索 ）
      },
      /**
       * remote method（ 远程搜索方法 ）
       * @param query      input value
       */
      remoteMethod(query) {
        // is remote-switch opened，have dynamicUrl（ request url ）and have request query （input value ）
        if (this.remoteSW && this.dynamicUrl && query !== '') {
          const params = {customerName: query, isDeveloper: 2}; //request remote data
          //choice one remote-method to request data (base on business)
          choiceRemoteMethod(this, 'customerSearch', this.dynamicUrl, params);
        } else {
          this.options = this.items;
        }
      },
      //chenge
      change(value, linkageInfo) {
        linkageInfo.forEach((item, index) => {
          item.modelVal = value ? this.remoteList[0][item.modelKey] : '';
        })
        this.childCustomLinkage = value ? this.remoteList[0] : null;
      }
    },
    props: {
      //验证
      required: {type: Boolean, default: false},//是否生成必填 required 红心标识
      fatherCustomLinkage: [Object],
      /*  =======================  获取下拉菜单内容  =======================  */
      //1、动态获取select-option下拉菜单内容
      dynamicUrl: {type: String, default: null},
      dynamicQuery: {type: [Object, String, Array], default: null},
      /*  ==================================================================  */
      width: {type: [String, Number], default: '100%'},
      height: {type: [String, Number], default: '32px'},
      labelWidth: {type: [String, Number], default: 150},//label - width / 验证提示信息向右偏移值
      type: {type: String, default: 'custom'},//远程搜索类型，custom-自定义（请求参数自定义）
      placeholder: {type: String, default: null},
      size: {type: String},//尺寸
      disabled: {type: Boolean, default: false},//是否禁用
      clearable: {type: Boolean, default: true},//单选时是否可以清空选项
      filterable: {type: Boolean, default: false},//是否可搜索
      remote: {type: Boolean, default: false},//是否为远程搜索
      //远程搜索的 数据
      remoteData: {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    model: {
      prop: 'fatherCustomLinkage',
      event: 'customLinkage-change'
    },
    watch: {
      type() {
        this.linkageInfo = this.getlinkageInfo(linkageInfoList, this.type);
      },
      childCustomLinkage() {
        this.$emit('customLinkage-change', this.childCustomLinkage)
      },
      fatherCustomLinkage() {
        this.childCustomLinkage = this.fatherCustomLinkage;
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "./customer-info-linkage";
</style>
