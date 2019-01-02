import modelExtend from 'dva-model-extend'
import example from './example'
import {login} from '../services/login'


export default modelExtend(example,{

  namespace: 'login',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
    *post({ action,state }, { call, put }) {
      let res=yield login(state);
      console.log(res)
    }
  },

  reducers: {
    save (state, action) {
      return { ...state, ...action.payload };
    },
    post (state) {

      return{...state}
    }
  },

})
