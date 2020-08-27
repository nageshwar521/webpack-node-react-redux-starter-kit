import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { Session } from 'bc-react-session';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { payload } = Session.get('worklobster_session');
  const isAuthenticated = !!payload.authToken;

  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/auth/login', state: { from: props.location } }} />
        )
      }
    />
  );
};

export default PrivateRoute;
