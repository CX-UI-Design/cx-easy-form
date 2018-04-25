<!--auto-form-operation 自动表单-操作模块部分-->
<template>
  <div class="cx-auto-form-operation">
    <div v-if="type === 'role'">
      <component :is="$SN+'role-button'" v-for="(btnItem,index) in buttonInfo" :index="index" :key="index" :type="btnItem.style"
                 :name="btnItem.name" :size="btnItem.size" :plain="btnItem.plain" :round="btnItem.round" :disabled="btnItem.disabled"
                 :roleInfo="btnRoleInfo(btnItem)" :roleButtonList="roleButtonList" @click="btnItem.event(vm,autoFormID)">
        {{btnItem.name}}
      </component>
    </div>
    <div v-else-if="type === 'form'">
      <component :is="$SN+'form-button'" v-for="(btnItem,index) in buttonInfo" :index="index" :key="index" :type="btnItem.style"
                 :size="btnItem.size" :plain="btnItem.plain" :round="btnItem.round" :disabled="btnItem.disabled"
                 @click="btnItem.event(vm,autoFormID)">
        {{btnItem.name}}
      </component>
    </div>
    <div v-else>
      <component :is="$SN+'button'" v-for="(btnItem,index) in buttonInfo" :index="index" :key="index" :type="btnItem.style"
                 :size="btnItem.size" :plain="btnItem.plain" :round="btnItem.round" :disabled="btnItem.disabled"
                 @click="btnItem.event()">
        {{btnItem.name}}
      </component>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'default-auto-form-operation',
    data() {
      return {
        vm: this,
      }
    },
    props: {
      autoFormID: {type: String},//自动表单唯一ID值（根据业务自定义）
      type: {type: String},//自动表单唯一ID值（根据业务自定义）
      /*
      * auto-form Button information
      * type:  'submit','reset','custom'
      * style: primary,success,warning,danger,info,text
      */
      buttonInfo: {type: Array},
      roleButtonList: {type: Array},//按钮权限信息对照列表
    },
    created() {

    },
    mounted() {
//      this.vm = this.$CX.autoForm.formerVm.get(this, this.autoFormID);
    },
    methods: {
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
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
