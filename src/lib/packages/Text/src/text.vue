<template>
  <div class="cx-text" :style="{width: span_width ,height: span_height,padding:'0 '+ gap + 'px'}">
     <span class="cx-text-span" v-if="type === 'span'"
           :style="{'-webkit-line-clamp': rows}" @click="click(cont)">{{cont | allToString}}
     </span>
    <a class="cx-text-link" v-if="type === 'link'"
       :style="{'-webkit-line-clamp': rows}" :href="dynamicSrc">{{cont | allToString}}
    </a>
  </div>
</template>
<script>
  export default {
    name: 'default-text',
    data() {
      return {}
    },
    computed: {
      cont() {
        if (this.$Utils.judgeType(this.content) === 'object') {
          if (this.secondModelKey) {
            return this.content[this.secondModelKey];
          }
        }
        else {
          return this.content;
        }
      },
      span_width() {
        return this.$Utils.convertUnits(this.width, 'width')
      },
      span_height() {
        return parseInt(this.$Utils.convertUnits(this.height, 'height')) * this.rows + 'px';
      }
    },
    created() {

    },
    props: {
      type: {type: String, default: 'span'},//text - type （ span / link ）
      content: {type: [Array, String, Object, Number, Boolean, Date]},//content
      width: {type: [String, Number], default: '100%'},
      height: {type: [String, Number], default: '32px'},  //高度不能为百分数
      rows: {type: Number, default: 1},//text - row
      dynamicSrc: {type: String, default: 'javascript:void(0)'}, //text-link link src
      gap: {type: Number, default: 0},  //text left/right padding
      secondModelKey: {type: String}, //second model-key  ( 二级表单model字段名称 )
    },
    methods: {
      click(val) {
        this.$emit('click', val);
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
 @import "./text";
</style>
