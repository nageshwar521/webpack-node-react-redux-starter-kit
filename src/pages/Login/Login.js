import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField, Button } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userLogin } from "../../redux/actions/actions";
import Card from "../../components/Card/Card";
import PasswordField from "../../components/Form/PasswordField";
import Loading from "../../components/Loading/Loading";

const useStyles = makeStyles({
  flexGrow: {
    flexGrow: 1,
  },
  cardContent: {
    padding: 20,
    borderTop: "1px solid #ddd",
  },
  footer: {
    padding: 10,
  },
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LoginComponent = ({
  userLogin,
  isLoggedIn,
  loginErrorMessage,
  isLoginLoading,
}) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const submitForm = () => {
    if (email === "" || password === "") {
      setError("Fields are required");
      return;
    }
    userLogin({ email, password });
  };

  const getFooter = () => {
    return (
      <div className={classes.footer}>
        <Button variant="contained" color="primary" onClick={submitForm}>
          Login
        </Button>
        <Button color="secondary" component={Link} to="/join">
          Register
        </Button>
      </div>
    );
  };

  return (
    <React.Fragment>
      <Card
        title="Login"
        cardContentClass={classes.cardContent}
        getFooter={getFooter}
      >
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          className="form-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <PasswordField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {(loginErrorMessage || error) && (
          <Alert severity="error" onClick={() => setError(null)}>
            {loginErrorMessage || error}
          </Alert>
        )}
      </Card>
      <Loading open={isLoginLoading} />
    </React.Fragment>
  );
};

const Login = connect(
  ({ isLoggedIn, loginErrorMessage, isLoginLoading }) => ({
    isLoggedIn,
    loginErrorMessage,
    isLoginLoading,
  }),
  (dispatch) => ({ ...bindActionCreators({ userLogin }, dispatch) })
)(LoginComponent);

export default Login;
