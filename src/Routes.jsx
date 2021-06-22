import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routerConstants } from './constants/routes';
import Home from './screens/Home/Home';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routerConstants.HOME} component={Home} />
      <Route exact path={routerConstants.ADMIN_SIGN_IN} component={}
    </Switch>
  </BrowserRouter>
);

export default Router;
