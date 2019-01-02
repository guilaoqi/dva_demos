import { routerRedux } from 'dva/router'
import queryString from 'query-string'

export default {

  namespace: 'example',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *goPage({ payload }, { put, select }) {
      // 路由跳转，包含普通push, 重定向replace，返回goBack, 由type控制
      const { pathname, search, type = 'push' } = payload
      if (type === 'back') {
        window.history.back()
      } else {
        yield put(routerRedux[type]({
          pathname,
          search: typeof search === 'object' && encodeURI(queryString.stringify(search)),
        }))
      }
    }
  },

  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
