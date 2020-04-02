import React from "react";
import { Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Join from "../pages/Join/JoinForm";
import PrivateRoute from "./PrivateRoute";

const useStyles = makeStyles(theme => ({
  container: {
    padding: 50
  }
}));

const Routes = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" classes={{ root: classes.container }}>
      <Switch>
        <PrivateRoute path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/join" component={Join} />
      </Switch>
    </Container>
  );
};

export default Routes;
