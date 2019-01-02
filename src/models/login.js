import modelExtend from 'dva-model-extend'
import example from './example'
import {login} from '../services/login'
import { Toast } from 'antd-mobile';


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
    //发送登录请求
    *post( action , { call, put ,select}) {
      const usermessage=yield select(state => state.login.usermessage)
      console.log(usermessage)
      let res=yield login(usermessage);
      console.log(res.data);
      switch(res.data.status){
        case 100:
          Toast.fail('用户名不存在')
          break;
        case 101:
          Toast.fail('密码错误')
          break;
        case 200:
          Toast.success('登录成功')
          yield put({
            type:'updateState',
            payload:{
              isLogin:true
            }
          })
          yield window.localStorage.setItem("isLogin",true)
          yield put({
                  type:'app/updateState',
                  payload:{
                  isLogin:true
                }
          })
          //跳转到首页
          yield put({
            type:'goPage',
            payload:{
              type:'push',
              pathname:'/'
            }
          })
          break;
      }

    }
  },

  reducers: {
    save (state, action) {
      return { ...state, ...action.payload };
    },

  },

})
