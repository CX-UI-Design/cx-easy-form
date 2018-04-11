<template>
  <div class="cx-avatar">
    <div v-if="isradius" class="cx-avatar-cont"
         :style="{height: avatar_height ,width: avatar_width }"
    >
      <img :src="dynamicSrc" alt="avatar" :style="{'border-radius': radiusNum}">
    </div>
    <div class="cx-avatar-cont" :class="{ 'avatar-round': type === 'round' }" v-else
         :style="{height: avatar_height ,width: avatar_width }"
    >
      <img :src="dynamicSrc" alt="avatar">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'default-avatar',
    data() {
      return {
        imgh: 0,
        radius: 'radius-',
      }
    },
    computed: {
      isradius() {
        return this.$Utils.strContain(this.typeto(this.type), this.radius);
      },
      radiusNum() {
        return this.$Utils.delsubstr(this.typeto(this.type), this.radius, '');
      },
      avatar_height() {
        return this.$Utils.convertUnits(this.height, 'height');
      },
      avatar_width() {
        /* when you set property - 'scale', 'width' is disabled,
          'scale' means: the value of width / height （the ratio of width to height）*/
        return this.scale ?
          parseInt(this.$Utils.convertUnits(this.height, 'height')) * parseInt(this.scale) + 'px' :
          this.$Utils.convertUnits(this.width, 'width');
      },
    },
    props: {
      type: {type: String, default: 'normal'},  // round / normal / radius-xxxx
      width: {type: [Number, String], default: '100%'},
      height: {type: [Number, String], default: '32px'},
      dynamicSrc: {type: String, default: null},
      scale: {type: [Number, String]},  // the value of width / height
    },
    methods: {
      typeto(type) {
        return type ? type : 'normal'
      }
    },
    created() {

    },
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "./avatar";
</style>
