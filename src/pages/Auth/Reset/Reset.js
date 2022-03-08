import React from 'react';
import { makeStyles, Button, TextField, Link, Grid } from '@material-ui/core';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import AuthContent from '../_common/AuthContent';
import AuthHeader from '../_common/AuthHeader';
import PasswordField from '@components/Form/PasswordField';
import ErrorContainer from '@pages/Auth/ErrorContainer';
import { validateForm, getTokenFromUrl } from '../utils';
import AlertMessage from '@components/AlertMessage';

export default function Reset() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [seconds, setSeconds] = React.useState(5);
  const { status, resetPasswordSuccess, resetPasswordError } = useSelector((store) => store.auth);
  const token = getTokenFromUrl();
  const currentPassword = {
    password: '',
    confirmPassword: '',
  };
  const labels = {
    password: 'Password',
    confirmPassword: 'Confirm Password',
  };
  if (!token) {
    history.push('/auth/recover');
  }
  // const [isFormValid, setIsFormValid] = React.useState(false);
  const [errors, setErrors] = React.useState(currentPassword);
  const [newPassword, setNewPassword] = React.useState(currentPassword);
  const handleChange = (field, value) => {
    setNewPassword({ ...newPassword, [field]: value });
  };
  const handleSubmit = () => {
    const { isFormValid, errors } = validateForm(newPassword, labels);
    console.log('errors');
    console.log(errors);
    if (!isFormValid) {
      setErrors(errors);
      return false;
    }
    setErrors(currentPassword);
    dispatch(resetPassword(newPassword));
  };

  React.useEffect(() => {
    localStorage.setItem('resetPasswordSuccess', resetPasswordSuccess);
    if (resetPasswordSuccess) {
      history.push('/auth/login');
    }
  }, [history, resetPasswordSuccess]);

  React.useEffect(() => {
    if (resetPasswordError) {
      let interval = null;
      if (!interval) {
        interval = setInterval(() => {
          setSeconds((seconds) => seconds - 1);
        }, seconds * 500);
      }
      if (seconds === 0) {
        clearInterval(interval);
        history.push('/auth/recover');
      }
      return () => clearInterval(interval);
    }
  }, [seconds, resetPasswordError, history]);

  return (
    <AuthContent>
      <AuthHeader title={'Reset Password'} />
      <ErrorContainer>
        {errors && Object.values(errors).find(Boolean) ? (
          <AlertMessage type="error" onReset={() => setErrors(currentPassword)}>
            {Object.values(errors).filter(Boolean)[0]}
          </AlertMessage>
        ) : null}
        {resetPasswordError ? (
          <AlertMessage
            reduxField="resetPasswordError"
            type="error"
            onReset={() => setErrors(currentPassword)}
          >
            {resetPasswordError}
          </AlertMessage>
        ) : null}
        {resetPasswordSuccess ? (
          <AlertMessage
            reduxField="resetPasswordSuccess"
            type="success"
            onReset={() => setErrors(currentPassword)}
          >
            {resetPasswordSuccess}
          </AlertMessage>
        ) : null}
      </ErrorContainer>
      <div className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <PasswordField
              field="password"
              label={labels.password}
              value={newPassword.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <PasswordField
              field="confirmPassword"
              label={labels.confirmPassword}
              value={newPassword.confirmPassword}
              onChange={handleChange}
            />
          </Grid>
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
          {status === 'loading' ? <CircularProgress color="primary" /> : 'Reset Password'}
        </Button>
        <Grid container>
          <Grid item xs>
            <Link component={RouterLink} to="/auth/login" variant="body2">
              Back to Login
            </Link>
          </Grid>
          <Grid item>
            <Link component={RouterLink} to="/auth/signup" variant="body2">
              Create a new account
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
