import React from 'react';
import { connect } from 'dva';
import { NavBar, Icon } from 'antd-mobile';



class koubei extends React.Component {
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
			<div>
			<NavBar
			mode="dark"
			icon={<Icon type="left" />}
			onLeftClick={() => console.log('onLeftClick')}
			rightContent={[
				<Icon key="0" type="search" style={{ marginRight: '16px' }} />,
				<Icon key="1" type="ellipsis" />,
				]}
			>东浦IOT</NavBar>


			</div>
		)
	}
}





// export default Products;
export default connect()(koubei);
