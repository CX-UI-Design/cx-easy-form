<template>
  <el-button :type="type" :size="size" :plain="plain" :loading="loading" :disabled="disabled" :icon="icon" :autofocus="autofocus"
             :native-type="nativeType" v-if="isPermissioned" @click="click">
    <slot></slot>
  </el-button>
</template>
<script>
  export default {
    name: 'default-role-button',
    data() {
      return {
//        roleButtonList: store.roleButtonList.get(),
      }
    },
    computed: {
      isPermissioned() {
        let status = this.roleButtonList.some(item => {
          return (item.code === this.roleInfo.code && item.areaType === this.roleInfo.areaType && item.btnType === this.roleInfo.btnType);
        })
        return status || this.roleInfo.coerciveShow;
      },
    },
    created() {
    },
    props: {
      size: {type: String, default: 'medium'}, //尺寸可选 medium,small,mini
      type: {type: String},//类型 primary,success,warning,danger,info,text
      plain: {type: Boolean, default: false},//是否朴素按钮
      round: {type: Boolean, default: false},//是否为原型按钮
      loading: {type: Boolean, default: false},//是否加载中状态
      disabled: {type: Boolean, default: false},//是否禁用状态
      icon: {type: String,},//图标，已有的图标库中的图标名
      autofocus: {type: Boolean, default: false},//是否默认聚焦
      'native-type': {type: String, default: 'button'},//原生 type 属性  Button,submit,reset
      coerciveShow: {type: Boolean, default: false},//是否强制显示按钮
      roleButtonList: {
        type: Array, default: function () {
          return [];
        }
      },//按钮权限信息对照列表
      //按钮权限信息
      roleInfo: {
        type: Object, default: function () {
          return {
            code: '',//按钮编码
            name: '',//按钮名称
            nameEn: '',//按钮英文名称
            type: '',//按钮类型
            index: '',//排序号
            btnType: '',//按钮类型 （single / dropDown）
          }
        }
      },
    },
    methods: {
      //click时触发的事件
      click() {
        this.$emit('click');
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
