import Cookies from 'js-cookie';
import ns from "@/utils/nsQuery/nsQuery";

const Search = {
  state: {
    customerSearchInfo: null,
  },

  mutations: {
    //设置 请求表头字段"interpreter" 对应值
    CUSTOMERSEARCHINFO: (state, data) => {
      const type = data.type
      switch (type) {
        case 'set':
          state.customerSearchInfo = data.query;
          break;
        case 'empty':
          state.customerSearchInfo = null;
          break;
        default:
          break;
      }
    },
  },
  actions: {
    //设置 请求表头字段"interpreter" 对应值
    customerSearchInfo({commit}, data) {
      commit('CUSTOMERSEARCHINFO', data);
    },

  }
};

export default Search;
