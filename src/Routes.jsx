import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routerConstants } from './constants/routes';
import Home from './screens/Home/Home';
import AuthContainer from './screens/Admin/Verification/AuthContainer';
import Anthologies from './screens/Anthology';
import About from './screens/About';
import Contribute from './screens/Contributions';
import Developer from './screens/Developer';
import Mantras from './screens/Mantras';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path={routerConstants.ABOUT} component={About} />
      <Route exact path={routerConstants.ADMIN_SIGN_IN} component={AuthContainer} />
      <Route exact path={routerConstants.ANTHOLOGIES} component={Anthologies} />
      <Route exact path={routerConstants.CONTRIBUTIONS} component={Contribute} />
      <Route exact path={routerConstants.DEVELOPER} component={Developer} />
      <Route exact path={routerConstants.HOME} component={Home} />
      <Route exact path={routerConstants.MANTRAS} component={Mantras} />
    </Switch>
  </BrowserRouter>
);

export default Router;
