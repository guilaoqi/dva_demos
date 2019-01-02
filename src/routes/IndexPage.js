import React from 'react';
import { connect } from 'dva';
import { TabBar } from 'antd-mobile';
import {routerRedux,withRouter} from 'dva/router'
import './IndexPage.css'


class TabBarDown extends React.Component {
  componentDidMount(){
    this.props.dispatch({
      type:"app/updateState",
      payload:{
        selectedTab: 'LifeTab',
        hidden: false,
        fullScreen: true
      }
    })
  }


  render() {
    const {children,app}=this.props
    return (
      <div style={app.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={app.hidden}
        >
          <TabBar.Item
            title="Life"
            key="Life"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
            />
            }
            selected={app.selectedTab === 'LifeTab'}
            badge={1}
            onPress={() => {
              this.props.dispatch(routerRedux.push({pathname:"/"}))
              this.props.dispatch({
                type:'app/updateState',
                payload:{ selectedTab: 'LifeTab'}
              })
            }}
            data-seed="logId"
          >
            {children}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Koubei"
            key="Koubei"
            badge={'new'}
            selected={app.selectedTab === 'KoubeiTab'}
            onPress={() => {
              this.props.dispatch(routerRedux.push({pathname:"/koubei"}))
              this.props.dispatch({
                type:'app/updateState',
                payload:{ selectedTab: 'KoubeiTab'}
              })
            }}
            data-seed="logId1"
          >
            {children}
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
              />
            }
            title="Friend"
            key="Friend"
            dot
            selected={app.selectedTab === 'FriendTab'}
            onPress={() => {
              this.props.dispatch(routerRedux.push({pathname:"/friend"}))
              this.props.dispatch({
                type:'app/updateState',
                payload:{ selectedTab: 'FriendTab'}
              })
            }}
          >
            {children}
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
            title="My"
            key="my"
            selected={app.selectedTab === 'MyTab'}
            onPress={() => {
              this.props.dispatch(routerRedux.push({pathname:"/my"}))
              this.props.dispatch({
                type:'app/updateState',
                payload:{ selectedTab: 'MyTab'}
              })
            }}
          >
            {children}
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}




export default withRouter(connect(({app})=>({app}))(TabBarDown));
