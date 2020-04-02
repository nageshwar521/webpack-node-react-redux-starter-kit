import React, { useState } from "react";

import { connect } from "react-redux";
import MuiAlert from "@material-ui/lab/Alert";
//import * as userActions from '../../actions/apiUser';
import * as userActions from "../../actions/user";
import * as ui from "../../actions/ui";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import User from "./User";
import { bindActionCreators } from "redux";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class UserContainer extends React.Component {
  componentDidMount() {
    this.props.actions.getUser();
  }

  render() {
    const { user, isLoading } = this.props;

    if (!user)
      //return if we have no data
      return null;

    return (
      <div style={{ background: "#eee" }}>
        {isLoading ? (
          <LoadingScreen isLoading={isLoading} />
        ) : (
          <User user={user} />
        )}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return { ...state, props };
}

function mapDispatchToProps(dispatch) {
  const allActions = { ...userActions, ...ui };
  return { actions: bindActionCreators(allActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);
