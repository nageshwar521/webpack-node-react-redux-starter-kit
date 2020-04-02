import React, { useState } from "react";
import { TextField, Typography, Button } from "@material-ui/core";
import { connect } from "react-redux";
import { login } from "../../actions/auth";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default connect(({ isLoading }) => ({ isLoading }), { login })(props => {
  const [email, setEmail] = useState("jarrod_deboy@yahoo.com");
  const [password, setPassword] = useState("abc123");
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
        Login
      </Typography>
      <TextField
        label="Email"
        className="form-input"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        className="form-input"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        className="form-input"
        size="large"
        onClick={submitForm}
      >
        Login
      </Button>

      {(props.error || error) && (
        <Alert severity="error" onClick={() => setError(null)}>
          {props.error || error}
        </Alert>
      )}
    </form>
  );
});