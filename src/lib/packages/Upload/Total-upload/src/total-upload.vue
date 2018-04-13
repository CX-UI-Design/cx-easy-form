<template>
  <div class="cx-upload" v-model="childUpload" :style="{width: upload_width}">
    <!--点击上传（多张）-->
    <el-upload v-if="type === 'picture-click'"
               class="upload-demo"
               :action="actionUrl"
               :headers="requestHead"
               :with-credentials="true"
               :on-preview="onPreview"
               :on-remove="onRemove"
               :file-list="fileList">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>

    <!--用户头像上传（单张）-->
    <div v-if="type === 'picture-single'"
         :style="{width: upload_width ,height: upload_height}">
      <el-upload class="avatar-uploader"
                 :action="actionUrl"
                 :headers="requestHead"
                 :with-credentials="true"
                 :show-file-list="false"
                 :on-success="onSuccess"
                 :before-upload="beforeAvatarUpload"
                 :style="{'line-height': upload_width}"
      >
        <img v-if="picSingleUrl" :src="picSingleUrl" class="avatar">
        <component :is="$SN+'icon-svg'" icon-class="add" :class="['avatar-uploader-icon']"
                   :style="{'font-size': parseInt(upload_width)*0.14+'px'}">
        </component>
      </el-upload>
    </div>

    <!--照片墙上传（多张）-->
    <div v-if="type === 'picture-card'">
      <el-upload class="picture-card"
                 list-type="picture-card"
                 :action="actionUrl"
                 :headers="requestHead"
                 :with-credentials="true"
                 :on-preview="onPreview"
                 :on-remove="onRemove"
                 :on-success="onSuccess"
                 :file-list="fileList"
                 :before-upload="beforeAvatarUpload">
        <div>
          <component :is="$SN+'icon-svg'" icon-class="add" :class="['avatar-uploader-icon']"
                     :style="{'font-size': parseInt(upload_width)*0.14+'px'}">
          </component>
        </div>
      </el-upload>
      <el-dialog v-model="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div>
  </div>

</template>
<script>
  export default {
    name: 'default-total-upload',
    props: {
      fatherUpload: {
        type: [Array], default: function () {
          return [];
        }
      },
      //upload packages type
      uploadData: {
        type: Array, default: function () {
          return [];
        }
      },
      type: {type: String, default: 'normal'},//upload packages type
      action: {type: String},//request url
      dynamicQuery: {type: [Object, String, Array, Number, Boolean]},//前后台交互 请求参数
      width: {type: [String, Number], default: '100%'},
      height: {type: [String, Number], default: 'auto'},
      max: {type: Number, default: 4},//max upload number
      scale: {type: [Number, String]},  // the value of width / height
      //allowed format for uploading
      fileType: {
        type: Array, default: function () {
          return ['jpeg', 'png'];
        }
      },
    },
    data() {
      return {
        childUpload: '',
        uploadRefer: this.$former.keyRefer["auto-form"].components.upload,//上传控件upload指代属性集合
        picSingleUrl: '',   //单张图片上传控件-图片地址
//        requestHead: store.requestHead.get(),
        requestHead: this[this.$CXFnName].requestHead.get(),
        dialogImageUrl: '',
        dialogVisible: false,
        fileList: [],
        fileTypeIn: [],
        uploadNum: 0,//当前上传的个数
      };
    },
    computed: {
      upload_width() {
        /* when you set property - 'scale', 'width' is disabled,
          'scale' means: the value of width / height （the ratio of width to height）*/
        return this.scale ?
          parseInt(this.$Utils.convertUnits(this.height, 'height')) * parseInt(this.scale) + 'px' :
          this.$Utils.convertUnits(this.width, 'width');
      },
      upload_height() {
        return this.$Utils.convertUnits(this.height, 'height');
      },
      actionUrl() {
        const env = require('../../../../../../config/dev.env');
        return this.action ? this.action : env.API_ROOT.toString() + '/fastdfs/fastdfs/uploadFile';
      }
    },
    created() {
      this.childUpload = this.fatherUpload;
      /**
       * judge the format of the data：
       1、if data is Array and has length => set img url
       2、if data is Array and has no length => set img url  = ''
       3、the format of the data is error  => throw error
       **/
      this.judgeHasProperty(this.childUpload, this.uploadRefer['url']) ?
        this.picSingleUrl = this.childUpload[0][this.uploadRefer['url']] :
        this.childUpload.length < 1 ? this.picSingleUrl = '' :
          this.$Utils.error.throw('The format of the data is error in upload-packages，example： [\n' +
            '{"fileName": "xxx-picture.jpg", "fileUrl": "https://xxxx.xxxxx.com/xxx-picture.jpg"}\n' +
            ']');
    },
    methods: {
      //判断是否有这个属性
      judgeHasProperty(obj, name) {
        let sw = false;
        if (obj) {
          if (obj.length > 0) {
            if (obj[0].hasOwnProperty(name)) {
              sw = true;
            }
          }
        }
        return sw;
      },
      //before upload
      beforeAvatarUpload(file) {
        const a = {
          lastModified: file.lastModified,
          lastModifiedDate: file.lastModifiedDate,
          fileName: file.name,
          fileSize: file.size,
          type: file.type,
          fileUrl: "",
          uid: file.uid,
          webkitRelativePath: file.webkitRelativePath,
        }
        //judge upload max number
        if (this.uploadNum < this.max) {
          this.fileTypeIn = this.fileType;
          //image-type error prompt
          const typeErrInfo = this.fileTypeIn.join(",");
          //image-type name handle (add 'image/')
          this.fileTypeIn = this.addImageType(this.fileTypeIn);
          //judge image format
          const sw = this.$Utils.arrContainObj(this.fileTypeIn, file.type);
          if (!sw) {
            this.$message.error('上传头像图片只能是 ' + typeErrInfo + ' 格式!');
          }
          else {
            this.uploadNum++;
            return sw;
          }
        }
        else {
          this.$message.error('最多只能上传 ' + this.max + ' 张图片!');
        }
      },
      //upload success (文件上传成功)
      onSuccess(response, file, fileList) {
        console.log('文件上传成功');
        console.log(file);
        console.log(response);
        console.log(JSON.stringify(response));
        if (this.type === 'picture-single') {
          this.childUpload = response.resultData;
          this.picSingleUrl = this.childUpload[0][this.uploadRefer['url']];
        }
        if (this.type === 'picture-card') {
          this.childUpload.push(response.resultData[0]);
//          this.picSingleUrl = this.childUpload[0][this.uploadRefer['url']];
        }
      },
      //拖拽上传
      handleChange(file, fileList) {
        this.fileList3 = fileList.slice(-3);
      },
      //文件列表移除文件时的钩子
      onRemove(file, fileList) {
        console.log(file, fileList);
      },
      //点击已上传的文件链接
      onPreview(file) {
        console.log(file);
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      /**
       * image-type name handle (add 'image/')
       * @param arr
       * @returns {Array}
       */
      addImageType(arr) {
        const n = [];
        arr.map((item, index) => {
          n.push('image/' + item);
        })
        return n;
      },
    },
    model: {
      prop: 'fatherUpload',
      event: 'input'
    },
    watch: {
      childUpload() {
        this.$emit('input', this.childUpload)
      },
      fatherUpload() {
        this.childUpload = this.fatherUpload;
      }
    },
  }
</script>


<style rel="stylesheet/scss" lang="scss">
  @import "total-upload";
</style>
