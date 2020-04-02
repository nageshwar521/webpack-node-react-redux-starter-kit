import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default connect(({ isLoading }) => ({ isLoading }), { login })(props => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitForm = () => {
    if (email === "" || password === "") {
      setError("Fields are required");
      return;
    }
    props.login({ email, password });
  };

  return (
    <form>
      <Typography variant="h5" style={{ marginBottom: 8 }}>
        HELLO
      </Typography>
      
      {(props.error || error) && (
        <Alert severity="error" onClick={() => setError(null)}>
          {props.error || error}
        </Alert>
      )}
    </form>
  );
});