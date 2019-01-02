import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import TabBar from './routes/IndexPage';
import dynamic from 'dva/dynamic'





function RouterConfig({ history,app }) {

  const routes=[
    {
      path:'/',
      models:()=>[],
      component:()=>import('./routes/life')
    },
    {
      path:'/koubei',
      models:()=>[],
      component:()=>import('./routes/koubei')
    },
    {
      path:'/firend',
      models:()=>[],
      component:()=>import('./routes/firend')
    },
    {
      path:'/my',
      models:()=>[],
      component:()=>import('./routes/my')
    },
    {
      path:'/login',
      models:()=>[import('./models/login'),],
      component:()=>import('./routes/login')
    }
  ]

  return (
    <Router history={history}>
    <TabBar>
      <Switch>

        {routes.map(
          ({path,models,component},key)=>{
            return(
              <Route
                path={path} 
                exact
                key={key}
                component={
                  dynamic({
                    app,
                    models,
                    component
                  })
                }
              /> 
            )}
        )}

      </Switch>
    </TabBar>
    </Router>
  );
}

export default RouterConfig;
