<template>
  <div class="cx-manage__range" v-model="childManageRange" :style="{width: manageRange_width ,height: manageRange_height}">
    <a @click="openChiose">{{interText}}</a>
    <!--弹窗-->
    <component :is="$SN+'dialog'" class="manage-range__dialog" width="300px"
               :visible.sync="dialogVisible" :close-on-click-modal="true"
               :show-close="false"
    >
      <!--内容部分-->
      <div class="manage-range__container">
        <!--常规选择-->
        <el-radio-group v-model="normalChiose">
          <el-radio v-for="(item,index) in radioGroup" :key="index" :index="index" :label="item.value" :disabled="item.disabled">
            {{item.label}}
          </el-radio>
        </el-radio-group>
        <!--特定选择-->
        <el-checkbox v-model="specialSwitch">特定部门</el-checkbox>
        <!--select （ 请选择所属部门树状数据 ） -->
        <component :is="$SN+'simple-tree-select'" v-model="treeSelectModel" bizType="role-organizationList"
                   width="200px" height="auto" size="small" placeholder="请选择" :disabled="false" :clearable="true"
                   :multiple="true" v-show="specialSwitch">
        </component>
      </div>
    </component>
  </div>

</template>
<script>
  export default {
    name: 'default-manage-range',
    data() {
      return {
        dialogVisible: {visible: false}, //dialog-visible
        interText: '设置管理范围',
        childManageRange: {},
        radioGroup: [
          {label: '本集团', value: 4, disabled: false},
          {label: '本公司', value: 3, disabled: false},
          {label: '本部门', value: 2, disabled: false},
          {label: '本人', value: 1, disabled: false},
        ],
        normalChiose: '',//radio data
        specialSwitch: false,//checkbox data
        treeSelectModel: [],//tree-select model data

      }
    },
    created() {

    },
    methods: {
      initDataReady() {
        this.childManageRange = !this.fatherManageRange || this.fatherManageRange === {} ? {
          [this.keyRefer['normalChiose']]: '',
          [this.keyRefer['specialChiose']]: []
        } : this.fatherManageRange;

        this.normalChiose = this.childManageRange[this.keyRefer['normalChiose']];
        this.treeSelectModel = this.childManageRange[this.keyRefer['specialChiose']];


        if (this.treeSelectModel.length > 0) {
          this.specialSwitch = true;
        }
      },
      change() {
        this.$emit('change');
      },
      openChiose() {
        this.initDataReady();
        this.dialogVisible.visible = true; //dialog-visible
      },

    },
    watch: {
      normalChiose() {
        this.childManageRange[this.keyRefer['normalChiose']] = this.normalChiose;
      },
      treeSelectModel() {
        this.childManageRange[this.keyRefer['specialChiose']] = this.treeSelectModel;
      },
      childManageRange() {
        this.$emit('change', this.childManageRange)
      },
      fatherManageRange() {
        this.childManageRange = this.fatherManageRange;
      }
    },
    computed: {
      manageRange_width() {
        return this.$Utils.convertUnits(this.width, 'width', '100%');
      },
      manageRange_height() {
        return this.$Utils.convertUnits(this.height, 'height');
      },
    },
    model: {
      prop: 'fatherManageRange',
      event: 'change'
    },
    props: {
      fatherManageRange: {type: Object},
      width: {type: [String, Number], default: '100%'},
      height: {type: [String, Number], default: '32px'},
      keyRefer: {
        type: Object, default: function () {
          return this.$former.keyRefer["role-manage-range"];
        }
      },//指代属性
    },
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .cx-manage__range {
    display: block;
    a {
      cursor: pointer;
    }
  }

  .manage-range__dialog {
    .el-dialog__header, .el-dialog__footer {
      display: none;
    }
    .manage-range__container {
      .el-radio-group {
        display: block;
        .el-radio {
          display: block;
          margin: 15px 0;
        }
      }
      .el-checkbox {
        margin-bottom: 15px;
      }
    }
  }
</style>
