<!--role-group （ 角色组操作组件 ）-->
<template>
  <el-select class="cx-select cx-role-group"
             v-model="childRoleGroup" :disabled="disabled" :clearable="clearable" size="small"
             @change="change" @visible-change="visibleChange" :placeholder="placeholder"
             :style="{width: select_width ,height: select_height }">
    <el-option
      v-for="(item,index) in options"
      :key="item[keyRefer.value]"
      :label="item[keyRefer.label]"
      :value="item[keyRefer.value]"
      :disabled="item[keyRefer.disabled]"
      class="role-group-option"
      :style="{width: select_width }"
    >
      <!--显示文字-->
      <span class="role-group-text oneline-ellipsis" v-show="!iptshowToggle(index)"> {{ item[keyRefer.label] }}</span>
      <!--编辑输入框-->
      <el-input class="role-group-input" v-model="iptModel" placeholder="请输入内容" v-show="iptshowToggle(index)" size="small"></el-input>
      <!--操作模块-->
      <div class="handle-modules fr">
        <!--图标 - 编辑 / 删除-->
        <div class="handle-modules-action fl" v-show="!iptshowToggle(index)&&!lock">
          <!--svg - 编辑-->
          <el-button size="mini" class="handle-svg-btn edit-btn" :disabled="lock" @click.prevent.stop="editHandle(index)">
            <component :is="$SN+'icon-svg'" icon-class="bianji-"></component>
          </el-button>
          <!--svg - 删除-->
          <el-button size="mini" class="handle-svg-btn del-btn" :disabled="lock" @click.prevent.stop="delHandle(index)">
            <component :is="$SN+'icon-svg'" icon-class="shanchu-"></component>
          </el-button>
        </div>
        <!--编辑状态下操作按钮 - 确定 / 取消-->
        <div class="handle-modules-btn fl" v-show="iptshowToggle(index)">
          <el-button size="mini" class="handle-svg-btn" @click.prevent.stop="editSubmit(index)">
            <component class="right" :is="$SN+'icon-svg'" icon-class="check-circle"></component>
          </el-button>
          <el-button size="mini" class="handle-svg-btn" @click.prevent.stop="cancel(index)">
            <component class="cancel" :is="$SN+'icon-svg'" icon-class="CombinedShapeCopy"></component>
          </el-button>
        </div>
      </div>
      <!--<span class="fr customtemplate" v-if="custom">{{ item[keyRefer.value] }}</span>-->
    </el-option>
    <el-option class="role-group-option add-group" value="" :disabled="true">
      <el-button size="mini" class="handle-svg-btn add-btn" :disabled="addBtnSw" @click.prevent.stop="addGroup()">
        <component :is="$SN+'icon-svg'" icon-class="add" :style="{cursor: addBtnSw?'not-allowed':'pointer'}"></component>
        新增角色组
      </el-button>
    </el-option>
  </el-select>
</template>
<script>
  import keyRefer from './keyRefer'
  import {editAddRoleGroup, delRoleGroup, roleGroupList, roleGroupInfo} from '../../../../api/role-components/role-group'

  export default {
    name: "default-role-group",
    data() {
      return {
        childRoleGroup: '',
        keyRefer: keyRefer,//指代属性字段值
        iptModel: '',//edit/add input model-value
        iptIndex: null,//编辑输入所在 索引值
        isInputing: false,//是否处于输入编辑状态
        canAddNew: true,//是否可以新增
        addBtnSw: false,//新增按钮 禁用状态
        lock: false,//锁止开关
        requsetSW: true,//单次请求操作开关（避免重复提交）
        isAdd: false,
        isEdit: false,
        //error message
        errorMsg: {
          submitErr: {msg: '新增/编辑失败', type: 'error'},
          delErr: {msg: '删除失败', type: 'error'},
          processing: {msg: '正在处理操作中，请稍后再试', type: 'error'},
          isEmpty: {msg: '角色组编辑内容不能为空', type: 'error'},
          isRepeat: {msg: '角色组已存在', type: 'error'},
          isErrfresh: {msg: '刷新列表失败', type: 'error'},
        },
        //下拉数据
        options: [],
      }
    },
    computed: {
      select_width() {
        return this.$Utils.convertUnits(this.width, 'width')
      },
      select_height() {
        return this.$Utils.convertUnits(this.height, 'height');
      },
    },
    created() {
      //refresh list ( 获取刷新下拉列表 )
      this.refreshList({organizationId: this.dynamicQuery}, res => {
        this.options = res;
      })
      this.childRoleGroup = this.fatherRoleGroup;
    },
    methods: {
      /**
       * is input show
       * @param index
       * @returns {Boolean}
       */
      iptshowToggle(index) {
        return this.iptIndex === index && this.isInputing;
      },

      /**
       * repeat set (相关重复设置操作)
       * @param index
       * @returns {Boolean}
       */
      repeatSet(index, disabled, isInputing, lock) {
        this.iptIndex = index;//设置编辑输入所在的索引值
        this.options[index][keyRefer.disabled] = disabled;//当前行禁用状态 （在编辑状态中不可选中）
        this.isInputing = isInputing;//打开编辑输入开关
        this.lock = lock;
        this.addBtnSw = true;//新增按钮 禁用
      },
      /**
       * edit handle (编辑操作)
       * @param index
       */
      editHandle(index) {
        //如果编辑当前选中项
//        if (this.childRoleGroup === this.options[index][keyRefer.value]) {
//          this.childRoleGroup = '';
//        }
        //相关设置操作
        this.repeatSet(index, true, true, true);
        //设置输入框model值为当前索引的label值
        this.iptModel = this.options[index][keyRefer.label];
      },

      /**
       * edit submit (编辑提交)
       * @param index
       */
      editSubmit(index) {
        //input has value
        if (this.iptModel) {
          //requset switch is opened
          if (this.requsetSW) {
            //judge model-value is repeat
            if (this.judgeRepeat(this.options, this.iptModel)) {
              //处于编辑状态的情况下，点击编辑提交，不对重复性做提示和拦截
              if (this.canAddNew) {
                //相关设置操作
                this.repeatSet(index, false, false, false);
                //close add new option status switch
                this.addBtnSw = false;
                //开启可以新增
                this.canAddNew = true;
                //open equest switch
                this.requsetSW = true;
              }
              else {
                this.throwErrorMsg('isRepeat');
              }
            }
            else {
              //close request switch
              this.requsetSW = false;
              //设置当前索引的label值为输入框model值
              this.options[index][keyRefer.label] = this.iptModel;
              //get value
              const val = this.options[index][keyRefer.value];
              //get this role-value
              const roleVal = val ? val : 0;
              //set query for request
              const query = {organizationId: this.dynamicQuery, rolecategoryId: roleVal, rolecategoryName: this.iptModel}
              //add and edit request handle
              editAddRoleGroup(query)
                .then(response => {
                    if (response.resultData) {
                      console.log('新增/编辑成功！！！');
                      console.log(response.resultData);
                      //相关设置操作
                      this.repeatSet(index, false, false, false);
                      //close add new option status switch
                      this.addBtnSw = false;
                      //开启可以新增
                      this.canAddNew = true;
                      //refresh list ( 获取刷新下拉列表 )
                      this.refreshList({organizationId: this.dynamicQuery}, res => {
                        if (!this.childRoleGroup) {
                          this.childRoleGroup = null;
                        }
//                        //不存在的情况下且为模拟环境下随机模拟一个信息
//                        if (!res[index] && sw['local-debug']) {
//                          res[index] = {
//                            rolecategoryId: Math.floor(Math.random()) * 100,
//                            rolecategoryName: this.iptModel
//                          }
//                        }
//
//                        //存在新增加/编辑的元素的信息
//                        this.options[index] = res[index];
//                        this.options[index][keyRefer.value] = res[index][keyRefer.value];
//
//
//                        console.log(this.options);
//                        console.log(this.options[index]);
                      })
                      //open equest switch
                      this.requsetSW = true;
                    }
                    else {
                      this.throwErrorMsg('submitErr');
                    }
                  }
                ).catch(err => {
                //open equest switch
                this.requsetSW = true;
                this.throwErrorMsg('submitErr');
                return Promise.reject(err);
              })
            }
          }
          else {
            this.throwErrorMsg('processing');
          }
        }
        else {
          this.throwErrorMsg('isEmpty');
        }
      },

      /**
       * get current option information ( 获取当前option的信息 )
       * @param query
       * @param index
       */
      getOptionInfo(query, index) {
        roleGroupInfo(query)
          .then(response => {
              this.options[index] = response.resultData;
            }
          ).catch(err => {
          this.throwErrorMsg('submitErr');
          return Promise.reject(err);
        })
      },

      /**
       * refresh list ( 刷新下拉列表 )
       * @param query
       * @param cb            callback fn
       */
      refreshList(query, cb) {
        roleGroupList(query)
          .then(response => {
//            //不存在的情况下且为模拟环境下随机模拟一个信息
//            if (!res[index] && sw['local-debug']) {
//              res[index] = {
//                rolecategoryId: Math.floor(Math.random()) * 100,
//                rolecategoryName: this.iptModel
//              }
//            }
              //存在新增加/编辑的元素的信息
              this.options = response.resultData;
              cb(response.resultData);
            }
          ).catch(err => {
          this.throwErrorMsg('isErrfresh');
          return Promise.reject(err);
        })
      },
      /**
       * cancel (编辑取消)
       * @param index
       */
      cancel(index) {
        //相关设置操作
        this.repeatSet(index, false, false, false);
        //判断是否可以新增，如果不可以新增，说明处于新增处理状态（点击），此时点击取消，则需要清空之前新增的提哦啊慕
        if (!this.canAddNew) {
          this.options.splice(this.options.length - 1, 1);//删除末尾
        }
        //开启可以新增
        this.canAddNew = true;
        //close add new option status switch
        this.addBtnSw = false;
        //open equest switch
        this.requsetSW = true;
      },
      /**
       * delete Handle (删除操作)
       * @param index
       */
      delHandle(index) {
        const roleVal = this.options[index][keyRefer.value];
        //requset switch is opened
        if (this.requsetSW) {
          //delete request handle
          delRoleGroup({rolecategoryId: roleVal})
            .then(response => {
                if (response.resultData) {
                  console.log('删除成功！！！');
                  console.log(response.resultData);
                  console.log(this.childRoleGroup);
                  console.log(roleVal)
                  if (this.childRoleGroup === roleVal) {
                    this.childRoleGroup = null;
                  }
                  //前端列表无刷新 删除
                  this.options.splice(index, 1);
                }
                else {
                  this.throwErrorMsg('delErr');
                }
                //open equest switch
                this.requsetSW = true;
              }
            ).catch(err => {
            //open equest switch
            this.requsetSW = true;
            return Promise.reject(err);
          })
        }
        else {
          this.throwErrorMsg('processing');
        }
      },
      /**
       * add group (新增分组)
       * @param index
       */
      addGroup() {
        if (this.canAddNew) {
          //关闭新增
          this.canAddNew = false;
//          //开启新增状态
//          this.isAdd = true;
          //下拉数组中新增空白条目
          this.options.push({
            [keyRefer.value]: '',
            [keyRefer.label]: '',
            [keyRefer.disabled]: false
          });
          //开启编辑操作
          this.editHandle(this.options.length - 1);
          this.lock = true;//上锁
          //open add new option status switch
          this.addBtnSw = true;//禁用按钮
        }
        else {
          return false;
        }
      },

      /**
       * judge repeat (ipt model value)
       * @param options       option array
       * @param val           ipt model value
       */
      judgeRepeat(options, val) {
        return options.some((item, index) => {
          return item[keyRefer.label] === val;
        })
      },
      /**
       * error message
       * @param name
       */
      throwErrorMsg(name) {
        this.$message({message: this.errorMsg[name].msg, type: this.errorMsg[name].type});
      },
      //visible-Change （ 点击下拉菜单 ）
      visibleChange() {
        //refresh list ( 获取刷新下拉列表 )
        this.refreshList({organizationId: this.dynamicQuery}, () => {

        })
        this.$emit('visible-change');
      },
      //change
      change(val) {
        this.$emit('change', val);
      }
    },
    props: {
      fatherRoleGroup: [Array, String, Number],
      width: {type: [String, Number], default: '100%'},
      height: {type: [String, Number], default: '32px'},
      placeholder: {type: String, default: null},
      disabled: {type: Boolean, default: false},//是否禁用
      clearable: {type: Boolean, default: true},//单选时是否可以清空选项
      dynamicUrl: {type: String, default: null},
      dynamicQuery: {type: [String, Number], default: null},//外部传入请求参数
    },
    model: {
      prop: 'fatherRoleGroup',
      event: 'roleGroupChange'
    },
    watch: {
      childRoleGroup() {
        if (!this.childRoleGroup && this.childRoleGroup !== 0) {
          this.childRoleGroup = null;
        }
        this.$emit('roleGroupChange', this.childRoleGroup)
      },
      fatherRoleGroup() {
        this.childRoleGroup = this.fatherRoleGroup;
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  @import "role-group";
</style>
