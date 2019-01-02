
import React from 'react';
import { connect } from 'dva';
import { Flex, List, InputItem, WhiteSpace,WingBlank,Button } from 'antd-mobile';
import { createForm } from 'rc-form';

import style from './index.css'

class login extends  React.Component {
  ComponentDidMonut(){

  }
  handleClick = (inputValue) => {
    //把用户名和密码传进modal（login）里面
    this.props.dispatch({
      type:"login/updateState",
      payload:inputValue
    })
    //
    this.props.dispatch({
      type:'login/post'
    })
  }
  render(){
    const { getFieldProps,getFieldsValue } = this.props.form;
    const PlaceHolder = ({ className = '', ...restProps }) => (
        <div className={`${className} placeholder`} {...restProps}>Block</div>
      );
    const myHeader= ()=>{
      return(
        <Flex>
          <Flex.Item style={{textAlign:"center"}}>登录</Flex.Item>
        </Flex>
        )
    }
    return(

        <div style={{paddingTop:"200px"}}>
          <List renderHeader={myHeader}>
            <InputItem
                  {...getFieldProps('username')}
                  placeholder="请输入用户名"
                  
            >用户名
            </InputItem>
            <InputItem
                  {...getFieldProps('password')}
                  type="password"
                  placeholder="请输入密码"
            >密码
            </InputItem>
            <WhiteSpace />
            <WingBlank>
                <Button type="primary"  onClick={()=>this.handleClick(getFieldsValue())}>登录</Button>
                <WhiteSpace />
                <Flex justify="end">
                  <div className={style.register}>注册</div>
                </Flex>
               

            </WingBlank>
          </List>
        </div>

      )
  }
}





// 把form注入到组件的props里面
const loginWrapper = createForm()(login);





export default connect(({login})=>({login}))(loginWrapper)


