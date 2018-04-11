<template>
  <el-dialog
    class="cx-dialog" :width="width" :title="title" :visible.sync="visible.visible"
    :top="top" :modal="modal" :modal-append-to-body="modalAppendToBody" append-to-body
    :lock-scroll="lockScroll" :custom-class="customClass" :close-on-click-modal="closeOnClickModal"
    :close-on-press-escape="closeOnPressEscape" :show-close="showClose" :before-close="beforeClose"
    @close="close" @open="open"
  >
    <slot></slot>
    <span slot="footer" class="dialog-footer">
	    <slot name="footer"></slot>
	  </span>
  </el-dialog>
</template>
<script>
  export default {
    name: 'default-dialog',
    props: {
      //是否显示 Dialog，支持 .sync 修饰符
      visible: {
        type: Object,
        default: function () {
          return {
            visible: false
          }
        }
      },
      width: {type: String, default: '650px'},//宽度值
      title: {type: String}, //Dialog 的标题，也可通过具名 slot （见下表）传入
      top: {type: String, default: '7%'},//	Dialog CSS 中的 top 值（仅在 size 不为 full 时有效）
      modal: {type: Boolean, default: true}, //是否需要遮罩层
      'modal-append-to-body': {type: Boolean, default: true}, //遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上
      'lock-scroll': {type: Boolean, default: false},//是否在 Dialog 出现时将 body 滚动锁定
      'custom-class': {type: String,},//Dialog 的自定义类名
      'close-on-click-modal': {type: Boolean, default: false},//是否可以通过点击 modal 关闭 Dialog
      'close-on-press-escape': {type: Boolean, default: true},  //是否可以通过按下 ESC 关闭 Dialog
      'show-close': {type: Boolean, default: true}, //是否显示关闭按钮
      'before-close': {type: Function}, //关闭前的回调，会暂停 Dialog 的关闭
      /*
     * auto-form button information
     * type:  'submit','reset','custom'
     * style: primary,success,warning,danger,info,text
     */
      buttonInfo: {type: Array},
    },
    created() {
    },
    methods: {
      //Dialog 关闭的回调
      close() {
        this.$emit('close')
      },
      //Dialog 打开的回调
      open() {
        this.$emit('open')
      },
    }
  }
</script>
<style scoped="">
</style>
