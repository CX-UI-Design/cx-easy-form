<template>
  <div class="cx-separator"
       :style="{width: separator_width  + '!important',height: separator_height  + '!important'}">
    <div class="cx-separator-content">
      <label class="separator-tit-more" v-if="type==='more'" :style="{'line-height':separator_height}" @click="click">
        <component :is="$SN+'icon-svg'" :icon-class="Switch?'PathCopy':'PathCopy1'"></component>
        <span :style="{padding: '0 '+pd+'px','font-size':fs+'px'}" ref="cx-separator-tit">{{label}}</span>
      </label>
      <label v-if="type!=='more'" class="separator-tit">
        <component :is="$SN+'icon-svg'" :icon-class="icon" v-if="type==='custom'"></component>
        <span :style="{padding: '0 '+pd+'px','font-size':fs+'px'}" ref="cx-separator-tit">{{label}}</span>
      </label>
      <div class="line fr" :style="{width: 'calc(100% - '+ lableWidth +'px)',
          'margin-top': separator_mt + '!important'}" v-if="type!=='simple'"></div>
      <div class="line fr" :style="{width: 'calc(100% - '+ lableWidth_simple +'px)',
          'margin-top': separator_mt + '!important'}" v-if="type==='simple'"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'default-separator',
    data() {
      return {
        sh: 0,
        Switch: this.onOff.sw,
        lableWidth: 111,        //in normal model , lable-width
        lableWidth_simple: 111, //in simple model , lable-width
        pd: 8,                  //default font-padding
        fs: 16,                 //default icon-fontsize
        is: 26,                 //default icon-size (width)
      }
    },
    props: {
      type: {type: String, default: 'simple'},    // simple / more / custom ( you can add icon )
      label: {type: String, default: '详细信息'},
      width: {type: [Number, String], default: '100%'},
      height: {type: [Number, String], default: '32px'},
      icon: {type: String, default: null},
      onOff: {
        type: [Object, Boolean], default: function () {
          return {
            sw: false
          }
        }
      }
    },
    created() {
      this.lableWidth = this.count(this.is + 5);
      this.lableWidth_simple = this.count(5);
    },
    computed: {
      separator_width() {
        return this.$Utils.convertUnits(this.width, 'width')
      },
      separator_height() {
        this.sh = this.$Utils.convertUnits(this.height, 'height');
        return this.sh;
      },
      separator_mt() {
        return parseInt(this.sh) / 2 + 'px';
      }
    },
    methods: {
      count(x) {
        return this.label.length * this.fs + this.pd * 2 + x;
      },
      click(val) {
        this.Switch = this.$Utils.invert(this.Switch);
        this.$emit('click', val);
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "./separator";
</style>
