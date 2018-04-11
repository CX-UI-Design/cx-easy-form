const test = {
  state: {
    test: 12321321312,
  },

  mutations: {
    //设置 请求表头字段"interpreter" 对应值
    CUSTOMERSEARCHINFO: (state, data) => {
      console.log('test22222222222')

    },
  },
  actions: {
    //设置 请求表头字段"interpreter" 对应值
    customerSearchInfo({commit}, data) {
      console.log('test1111111' + data)
    },

  }
};

export default test;
