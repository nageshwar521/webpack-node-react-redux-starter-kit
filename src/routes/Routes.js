import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import PrivateRoute from './PrivateRoute';
import { Loading } from '@components/Loading';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: 50,
  },
}));

const HomeComponent = React.lazy(() => import('@pages/Home'));
const LoginComponent = React.lazy(() => import('@pages/Auth/Login'));
const SignupComponent = React.lazy(() => import('@pages/Auth/Signup'));
const RecoverComponent = React.lazy(() => import('@pages/Auth/Recover'));
const ResetComponent = React.lazy(() => import('@pages/Auth/Reset'));
const VerifyComponent = React.lazy(() => import('@pages/Auth/Verify'));

const Routes = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.container}>
      <Suspense fallback={<Loading />}>
        <Switch>
          <PrivateRoute path="/" exact component={HomeComponent} />
          <Route path="/auth/login" component={LoginComponent} />
          <Route path="/auth/signup" component={SignupComponent} />
          <Route path="/auth/recover" component={RecoverComponent} />
          <Route path="/auth/reset(/:token)" component={ResetComponent} />
          <Route path="/auth/verify(/:token)" component={VerifyComponent} />
        </Switch>
      </Suspense>
    </Container>
  );
};

export default Routes;
