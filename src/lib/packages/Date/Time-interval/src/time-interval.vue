<!--time-interval 选择时间频率-->
<template>
  <div class="cx-time-interval" v-model="childTimeInterval" :style="{width: interval_width ,height: interval_height,'line-height':interval_height }">
    <!--选择执行频率的类型 （年/月/周/日）-->
    <el-select class="cx-time-interval-part firstPart fl" v-model="childTimeInterval.type" size="small" placeholder="请选择"
               :disabled="disabled" @change="typeChange">
      <el-option v-for="item in typeOpt" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <!--联动选择-内容切换部分-->
    <div class="cx-time-interval-part secondPart fl">
      <!--选择星期-->
      <el-select v-model="childTimeInterval.week" :disabled="disabled" v-if="childTimeInterval.type ==='week'">
        <el-option v-for="item in weekOpt" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <!--选择月-->
      <el-select v-model="childTimeInterval.day" :disabled="disabled" v-if="childTimeInterval.type ==='mounth'">
        <el-option v-for="item in monthOpt" :key="item.value" :label="item.label" :value="item.value"></el-option>
      </el-select>
      <!--选择年 => onlyMMDD-Picker-->
      <component :is="$SN+'onlyMMDDPicker'" class="onlyMMDD" v-model="childTimeInterval.mounthAndDay" type="date" placeholder="选择日期"
                 v-if="childTimeInterval.type ==='year' "></component>
    </div>
    <!--选择时间点-->
    <el-time-picker class="cx-time-interval-part thirdPart fl" v-model="childTimeInterval.time"
                    placeholder="任意时间点" format="HH:mm:ss" value-format="HH:mm:ss" :disabled="disabled">
    </el-time-picker>
  </div>
</template>
<script>
  export default {
    name: 'default-time-interval',
    data() {
      return {
        //组件model
        childTimeInterval: {
          type: '',
          mounthAndDay: '',//第几个月第几号
          day: '',//当月几号号
          week: '',//星期几
          time: ''//时间
        },
        typeOpt: [
          {value: 'day', label: '每日'},
          {value: 'week', label: '每周'},
          {value: 'mounth', label: '每月'},
          {value: 'year', label: '每年'}
        ],
        weekOpt: [
          {value: 'Mon', label: '周一'},
          {value: 'Tues', label: '周二'},
          {value: 'Wed', label: '周三'},
          {value: 'Thur', label: '周四'},
          {value: 'Fri', label: '周五'},
          {value: 'Sat', label: '周六'},
          {value: 'Sun', label: '周日'},
        ],
        monthOpt: [],
      }
    },
    created() {
      this.childTimeInterval = this.fatherTimeInterval;
    },
    model: {
      prop: 'fatherTimeInterval',
      event: 'datechange'
    },
    computed: {
      interval_width() {
        return this.$Utils.convertUnits(this.width, 'width');
      },
      interval_height() {
        return this.$Utils.convertUnits(this.height, 'height');
      },
    },
    watch: {
      'childTimeInterval.type': {
        handler: function (val) {
          switch (val) {
            case 'day':
              this.delProperty(['mounthAndDay', 'day', 'week']);//delete property
              break;
            case 'week':
              this.initModel('week', 'Mon');
              this.delProperty(['mounthAndDay', 'day']);
              break;
            case 'mounth':
              this.createMonthOpt();
              this.initModel('day', 1);
              this.delProperty(['mounthAndDay', 'week']);
              break;
            case 'year':
              this.initModel('mounthAndDay', '01-01');
              this.delProperty(['day', 'week']);
              break;
            default:
              break;
          }
        },
        deep: true
      },
      childTimeInterval() {
        this.$emit('datechange', this.childTimeInterval);
      },
      fatherTimeInterval() {
        this.childTimeInterval = this.fatherTimeInterval;
      }
    },
    methods: {
      //create month - option
      createMonthOpt() {
        if (this.monthOpt.length > 0) return false;
        for (let i = 1; i < 31; i++) {
          this.monthOpt.push({value: i, label: i.toString()})
        }
      },
      /**
       * init model value
       * @param key
       * @param init      init data
       */
      initModel(key, init) {
        const val = this.childTimeInterval[key];
        if (val || val === 0) {
          return;
        }
        this.$set(this.childTimeInterval, key, init);
      },
      /**
       * delete property
       * @param proList
       */
      delProperty(proList) {
        if (this.$Utils.judgeType(proList) !== 'array') {
          return;
        }
        proList.forEach(key => {
          delete this.childTimeInterval[key];
        })
      },
      typeChange(value) {
        this.$emit('change', value);
      },
    },
    props: {
      fatherTimeInterval: [Object],
      width: {type: [String, Number], default: '100%'},
      height: {type: [String, Number], default: '32px'},
      disabled: {type: Boolean, default: false},//禁用
    },
  }
</script>
<style rel="stylesheet/scss" lang="scss">
  .cx-time-interval {
    .cx-time-interval-part {
      height: 100%;
      margin-right: 10px;
      &.firstPart {
        width: 100px;
      }
      &.thirdPart {
        width: 150px;
      }
      .el-select {
        float: left;
        width: 90px;
      }
      .cx-onlyMMDD-picker.onlyMMDD {
        float: left;
        width: 150px;
      }
    }
    .el-select, .el-input {
      height: 100%;
    }
  }
</style>
