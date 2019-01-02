
export default {

  namespace: 'app',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen((location) => {
        // console.log(location)   //这里可以获取当前变化的history路径以及参数，hash所有值，这样就可以在路由地址变化后做处理
        if(!window.localStorage.getItem("isLogin")){
          window.location.href='/#/login'
        }
        // dispatch({
        //   type:'checkState'
        // })
      })

    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    updateState(state, action) {
      return { ...state, ...action.payload };
    },
    checkState(state) {
      if(!state.isLogin){
        window.location.href='/#/login'
      }
      return {...state}
    }
  },

};
