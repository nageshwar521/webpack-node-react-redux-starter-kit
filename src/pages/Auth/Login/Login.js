import React from 'react';
import {
  makeStyles,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
} from '@material-ui/core';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import AuthHeader from '../_common/AuthHeader';
import AuthContent from '../_common/AuthContent';
import EmailField from '@components/Form/EmailField';
import PasswordField from '@components/Form/PasswordField';
import ErrorContainer from '@pages/Auth/ErrorContainer';
import AlertMessage from '@components/AlertMessage';

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { status, loginSuccess, loginError, createUserSuccess, verificationUserSuccess } =
    useSelector((store) => store.auth);
  const currentUser = {
    email: '',
    password: '',
  };
  const labels = {
    email: 'Email',
    password: 'Password',
  };
  // const [isFormValid, setIsFormValid] = React.useState(false);
  const [errors, setErrors] = React.useState(currentUser);
  const [user, setUser] = React.useState(currentUser);
  const handleChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };
  const handleSubmit = () => {
    console.log('handleSubmit user');
    console.log(user);
    if (!user.email) {
      setErrors({ email: 'Please enter your email' });
      return false;
    } else if (!user.password) {
      setErrors({ password: 'Please enter your password' });
      return false;
    }
    setErrors(currentUser);
    dispatch(login(user));
  };

  React.useEffect(() => {
    if (loginSuccess) {
      history.push('/');
    }
  }, [history, loginSuccess]);

  React.useEffect(() => {
    if (loginError) {
      const timeout = setTimeout(() => {
        dispatch(resetState({ loginError: null }));
      }, 5000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [dispatch, loginError]);

  return (
    <AuthContent>
      <AuthHeader title={'Sign In'} />
      <ErrorContainer>
        {errors && Object.values(errors).find(Boolean) ? (
          <AlertMessage type="error" onReset={() => setErrors(currentUser)}>
            {Object.values(errors).filter(Boolean)[0]}
          </AlertMessage>
        ) : null}
        {loginError ? (
          <AlertMessage reduxField="loginError" type="error" onReset={() => setErrors(currentUser)}>
            {loginError}
          </AlertMessage>
        ) : null}
        {loginSuccess ? (
          <AlertMessage
            reduxField="loginSuccess"
            type="success"
            onReset={() => setErrors(currentUser)}
          >
            {loginSuccess}
          </AlertMessage>
        ) : null}
        {createUserSuccess ? (
          <AlertMessage reduxField="createUserSuccess" type="success">
            {createUserSuccess}
          </AlertMessage>
        ) : null}
        {verificationUserSuccess ? (
          <AlertMessage reduxField="verificationUserSuccess" type="success">
            {verificationUserSuccess}
          </AlertMessage>
        ) : null}
      </ErrorContainer>
      <div className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <EmailField
              field="email"
              label={labels.email}
              value={user.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordField
              field="password"
              label={labels.password}
              value={user.password}
              onChange={handleChange}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
          </Grid> */}
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? <CircularProgress color="primary" /> : 'Sign IN'}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link component={RouterLink} to="/auth/recover" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link component={RouterLink} to="/auth/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </div>
    </AuthContent>
  );
}

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
