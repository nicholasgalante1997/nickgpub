import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routerConstants } from './constants/routes';
import Home from './screens/Home/Home';
import AuthContainer from './screens/Admin/Verification/AuthContainer';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routerConstants.HOME} component={Home} />
      <Route exact path={routerConstants.ADMIN_SIGN_IN} component={AuthContainer} />
    </Switch>
  </BrowserRouter>
);

export default Router;
