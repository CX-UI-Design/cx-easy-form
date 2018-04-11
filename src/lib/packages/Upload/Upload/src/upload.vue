<template>
  <el-upload
    :action="action" :headers="headers"
    :multiple="multiple" :data="data"
    :name="name" :with-credentials="withCredentials"
    :show-file-list="showFileList" :drag="drag"
    :accept="accept" :on-preview="onPreview"
    :on-remove="onRemove" :on-success="onSuccess"
    :on-error="onError" :on-progress="onProgress"
    :on-change="onChange" :before-upload="beforeUpload"
    :list-type="listType" :auto-upload="autoUpload"
    :file-list="fileList" :http-request="httpRequest"
    :disabled="disabled"
  >
    <slot></slot>
  </el-upload>
</template>
<script>
  export default {
    name: 'default-upload',
    props: {
      action: {type: String},//必选参数, 上传的地址
      headers: {type: Object},//可选参数, 设置上传的请求头部
      multiple: {type: Boolean},//可选参数, 是否支持多选文件
      data: {type: Object},//可选参数, 上传时附带的额外参数
      name: {type: String},//可选参数, 上传的文件字段名
      'with-credentials': {type: Boolean, default: false},//支持发送 cookie 凭证信息
      'show-file-list': {type: Boolean, default: true},//是否显示已上传文件列表
      drag: {type: Boolean, default: false},//是否启用拖拽上传
      accept: {type: String},//可选参数, 接受上传的文件类型（thumbnail-mode 模式下此参数无效）
      'on-preview': {type: Function}, //可选参数, 点击已上传的文件链接时的钩子, 可以通过 file.response 拿到服务端返回数据
      'on-remove': {type: Function},//可选参数, 文件列表移除文件时的钩子
      'on-success': {type: Function},//可选参数, 文件上传成功时的钩子
      'on-error': {type: Function},//可选参数, 文件上传失败时的钩子
      'on-progress': {type: Function},//可选参数, 文件上传时的钩子
      'on-change': {type: Function},//可选参数, 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用
      'before-upload': {type: Function},//可选参数, 上传文件之前的钩子，参数为上传的文件，若返回 false 或者返回 Promise 且被 reject，则停止上传
      'list-type': {type: String, default: 'text'},//文件列表的类型 text/picture/picture-card
      'auto-upload': {type: Boolean, default: true},//是否在选取文件后立即进行上传
      'http-request': {type: Function},//覆盖默认的上传行为，可以自定义上传的实现
      disabled: {type: Boolean, default: false},//是否禁用
      //传的文件列表, 例如: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/webp/quality/100'}]
      'file-list': {
        type: Array,
        default: function () {
          return []
        }
      }
    },
    methods: {
      //清空已上传的文件列表（该方法不支持在 before-Upload 中调用）
      clearFiles() {
        this.$emit('clearFiles')
      },
      //取消上传请求
      abort(file) {
        this.$emit('abort', file)
      }
    }
  }
</script>
<style scoped="">

</style>
