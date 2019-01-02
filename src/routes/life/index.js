import React from 'react';
import { connect } from 'dva';
import { Flex, WhiteSpace } from 'antd-mobile';
import {withRouter} from 'dva/router'
import style from './index2.less'

import './index.less'

console.log(style)
const PlaceHolder = ({ className = '', ...restProps }) => (
  <div className={`${className} placeholder`} {...restProps}>Block</div>
);


class FlexExample extends  React.Component {
  componentDidMount(){
    this.props.dispatch({
      type:"app/updateState",
      payload:{
        hidden:false
      }
    })
  }
  render(){
    return(
        <div className='flex-container'  >
    <div className="sub-title">Basic</div>
    <Flex>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
    <Flex>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />
    <Flex>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
      <Flex.Item><PlaceHolder /></Flex.Item>
    </Flex>
    <WhiteSpace size="lg" />

    <div className="sub-title">Wrap</div>
    <Flex wrap="wrap">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace size="lg" />

    <div className="sub-title">Align</div>
    <Flex justify="center">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex justify="end">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex justify="between">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline" />
    </Flex>

    <WhiteSpace />
    <Flex align="start">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline small" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex align="end">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline small" />
      <PlaceHolder className="inline" />
    </Flex>
    <WhiteSpace />
    <Flex align="baseline">
      <PlaceHolder className="inline" />
      <PlaceHolder className="inline small" />
      <PlaceHolder className="inline" />
    </Flex>
  </div>
      )
  }
}


















// export default Products;
// export default connect()(Life);
export default withRouter(connect(({app})=>({app}))(FlexExample))