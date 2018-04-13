<!--role-Authorizer（ 新增授权人 ）-->
<template>
  <el-transfer class="cx-role-authorizer" v-loading="loading" element-loading-text="加载中"
               v-model="childAuthorizer" :data="transferList" :titles="titList" filterable
               :filter-method="filterMethod" filter-placeholder="输入关键字，快速筛选员工"
               :style="{width: checkbox_width ,height: 'auto'}">
  </el-transfer>
</template>
<script>
  import {getAuthorizerList} from '../../../../api/role-components/role-authorizer'

  export default {
    name: 'default-role-authorizer',
    data() {
      return {
        childAuthorizer: [],
        loading: true,//loding
        titList: ['待选', '已选'],//transfer - title
        transferList: [],
        keyRefer: this.$former.keyRefer['role-authorizer']
      };
    },
    computed: {
      checkbox_width() {
        return this.$Utils.convertUnits(this.width, 'width', '100%');
      },
    },
    created() {
      this.childAuthorizer = this.fatherAuthorizer;
      //get Authorizer list (获取某个组织下的所有员工（授权人）列表)
      this.getAuthorizerList();
    },
    methods: {
      /**
       * get Authorizer list (获取某个组织下的所有员工（授权人）列表)
       */
      getAuthorizerList() {
        this.loading = true;
        getAuthorizerList({organizationId: this.dynamicQuery})
          .then(response => {
              this.transferList = this.createNewList(response.resultData);
              this.loading = false;
            }
          ).catch(err => {
          return Promise.reject(err);
        })
      },
      createNewList(list) {
        const newList = [];
        list.forEach((item, index) => {
          newList.push({
            label: item[this.keyRefer.label],
            value: item[this.keyRefer.value],
            account: item[this.keyRefer.account],
            mobile: item[this.keyRefer.mobile],
            key: item[this.keyRefer.key],
          });
        });
        return newList;
      },
      //filter method
      filterMethod(query, item) {
        let filterList = ['label', 'account', 'mobile'];//filter list config
        for (let i of filterList) {
          if (item[i].toString().indexOf(query) > -1) {
            return true
          }
          continue;
        }
      }
    },
    props: {
      fatherAuthorizer: Array,
      width: {type: [String, Number]},//表单控件宽度
      height: {type: [String, Number]},//表单控件高度
      type: {type: String, default: 'normal'},//checkbox 类型
      min: {type: Number, default: 0}, //可被勾选的 checkbox 的最小数量
      max: {type: Number}, //可被勾选的 checkbox 的最大数量
      dynamicUrl: {type: String, default: null},
      dynamicQuery: {type: [String, Number], default: null},//外部传入请求参数
    },
    model: {
      prop: 'fatherAuthorizer',
      event: 'change'
    },
    watch: {
      childAuthorizer() {
        this.$emit('change', this.childAuthorizer);
      },
      fatherAuthorizer() {
        this.childAuthorizer = this.fatherAuthorizer;
      },
    }
  };
</script>
<style rel="stylesheet/scss" lang="scss">

</style>
