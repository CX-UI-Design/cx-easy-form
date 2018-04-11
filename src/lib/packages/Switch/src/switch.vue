<template>
  <div class="cx-switch" :style="{width: switch_width,height: switch_height}">
    <el-switch
      v-model="childSwitch" :active-text="onText" :inactive-text="offText" :active-colorr="onColor" :nactive-color="offColor"
      :active-icon-class="onIconClass" :inactive-icon-class="offIconClass" :width="switchWidth" :disabled="disabled"
      :name="name" @change="change" :active-value="onValue" :inactive-value="offValue" v-if="onValue || offValue"
    >
    </el-switch>
    <el-switch
      v-model="childSwitch" :name="name" :active-text="onText" :inactive-text="offText"
      :active-color="onColor" :nactive-color="offColor" :width="width" :disabled="disabled"
      :active-icon-class="onIconClass" :inactive-icon-class="offIconClass" @change="change" v-else
    >
    </el-switch>
  </div>
</template>
<script>
  export default {
    name:'default-switch',
    data() {
      return {
        childSwitch: false
      }
    },
    created() {
      this.childSwitch = this.fatherSwitch;
    },
    model: {
      prop: 'fatherSwitch',
      event: 'change'
    },
    watch: {
      childSwitch() {
        this.$emit('change', this.childSwitch)
      },
      //父组件model数据变化，实时变化子组件model
      fatherSwitch() {
        this.childSwitch = this.fatherSwitch;
      }
    },
    computed: {
      switch_width() {
        return this.$Utils.convertUnits(this.width, 'width');
      },
      switch_height() {
        return this.$Utils.convertUnits(this.height, 'height');
      },
    },
    props: {
      fatherSwitch: [Boolean, String, Number],
      switchWidth: {type: Number},
      width: {type: [String, Number], default: '100%'},
      height: {type: [String, Number], default: '32px'},
      onText: {type: String, default: 'ON'},
      offText: {type: String, default: 'OFF'},
      onColor: {type: String, default: '#20A0FF'},
      offColor: {type: String, default: '#C0CCDA'},
      onValue: {type: [Boolean, String, Number], default: true},
      offValue: {type: [Boolean, String, Number], default: false},
      onIconClass: {type: String, default: null},
      offIconClass: {type: String, default: null},
      disabled: {type: Boolean, default: false},
      name: {type: String, default: ''}
    },
    methods: {
      change(value) {
        this.$emit('change', value);
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>

</style>
