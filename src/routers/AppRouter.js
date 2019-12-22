import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import HomePage from '../pages/HomePage';

const AppRouter = () => (
  <BrowserRouter>
    <Fragment>
      <Switch>
        <Route path="/" component={HomePage} exact={true} />
        <Redirect to="/" />
      </Switch>
    </Fragment>
  </BrowserRouter>
);

export default AppRouter;