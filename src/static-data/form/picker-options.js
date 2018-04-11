const pickerOptionsMap = {
  "date-point": {
    //picker-option （ point of date day ）
    day: {
      shortcuts: [{
        text: '今天',
        onClick(picker) {
          picker.$emit('pick', new Date());
        }
      }, {
        text: '昨天',
        onClick(picker) {
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24);
          picker.$emit('pick', date);
        }
      }, {
        text: '一周前',
        onClick(picker) {
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
          picker.$emit('pick', date);
        }
      }]
    },
    //picker-option （ point of date month ）
    month: {
      shortcuts: [{
        text: '一周前',
        onClick(picker) {
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
          picker.$emit('pick', date);
        }
      }, {
        text: '一个月前',
        onClick(picker) {
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 30);
          picker.$emit('pick', date);
        }
      }, {
        text: '三个月前',
        onClick(picker) {
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 90);
          picker.$emit('pick', date);
        }
      }]
    },
    //disabled select date after today (includ today)
    beforToday: {
      disabledDate(time) {
        return time.getTime() > Date.now() - 8.64e7;
      },
    },
    //disabled select date after today (not includ today)
    beforNoToday: {
      disabledDate(time) {
        return time.getTime() > Date.now();
      }
    },
    //disabled select date befor today (includ today)
    afterToday: {
      disabledDate(time) {
        return time.getTime() < Date.now() - 8.64e7;
      }
    },
    //disabled select date befor today (not includ today)
    afterNoToday: {
      disabledDate(time) {
        return time.getTime() < Date.now();
      }
    },
    //birthday picker options ( disabled select date after today ,includ today)
    birthday: {
      disabledDate(time) {
        return time.getTime() > Date.now();
      }
    }
  },
  "date-range": {
    //picker-option （ base of intervals between some month ）
    month: {
      shortcuts: [{
        text: '最近一周',
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
          picker.$emit('pick', [start, end]);
        }
      }, {
        text: '最近一个月',
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
          picker.$emit('pick', [start, end]);
        }
      }, {
        text: '最近三个月',
        onClick(picker) {
          const end = new Date();
          const start = new Date();
          start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
          picker.$emit('pick', [start, end]);
        }
      }]
    },
  },
}

export default pickerOptionsMap
