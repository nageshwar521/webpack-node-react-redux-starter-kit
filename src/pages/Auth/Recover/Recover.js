import React from 'react';
import styled from 'styled-components';
import { makeStyles, Button, TextField, Link, Grid } from '@material-ui/core';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';

import AuthContent from '../_common/AuthContent';
import AuthHeader from '../_common/AuthHeader';
import EmailField from '@components/Form/EmailField';
import ErrorContainer from '@pages/Auth/ErrorContainer';
import { checkEmailExist, resetState } from '@redux/actions/authActions';
import { validateForm } from '../utils';
import AlertMessage from '@components/AlertMessage';

export default function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { status, checkEmailExistSuccess, checkEmailExistError } = useSelector(
    (store) => store.auth,
  );
  const defaultEmail = {
    email: '',
  };
  const labels = {
    email: 'Email Address',
  };
  // const [isFormValid, setIsFormValid] = React.useState(false);
  const [errors, setErrors] = React.useState(defaultEmail);
  const [currentEmail, setCurrentEmail] = React.useState(defaultEmail);
  const handleChange = (field, value) => {
    setCurrentEmail({ email: value });
  };
  const handleSubmit = () => {
    const { isFormValid, errors } = validateForm(currentEmail, labels);
    console.log('isFormValid, errors');
    console.log(isFormValid, errors);
    if (!isFormValid) {
      setErrors(errors);
      return false;
    }
    setErrors(defaultEmail);
    dispatch(checkEmailExist(currentEmail));
  };

  // React.useEffect(() => {
  //   if (checkEmailExistSuccess) {
  //     history.push('/auth/reset');
  //   }
  // }, [checkEmailExistSuccess, history]);

  React.useEffect(() => {
    if (checkEmailExistError) {
      const timeout = setTimeout(() => {
        dispatch(resetState({ checkEmailExistError: null }));
      }, 5000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [checkEmailExistError, dispatch]);

  return (
    <AuthContent>
      <AuthHeader title={'Recover Password'} />
      <ErrorContainer>
        {errors && Object.values(errors).find(Boolean) ? (
          <AlertMessage type="error" onReset={() => setErrors(defaultEmail)}>
            {Object.values(errors).filter(Boolean)[0]}
          </AlertMessage>
        ) : null}
        {checkEmailExistError ? (
          <AlertMessage
            reduxField="checkEmailExistError"
            type="error"
            onReset={() => setErrors(defaultEmail)}
          >
            {checkEmailExistError}
          </AlertMessage>
        ) : null}
        {checkEmailExistSuccess ? (
          <AlertMessage
            reduxField="checkEmailExistSuccess"
            type="success"
            onReset={() => setErrors(defaultEmail)}
          >
            {checkEmailExistSuccess}
          </AlertMessage>
        ) : null}
      </ErrorContainer>
      <div className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <EmailField
              field="email"
              label={labels.email}
              value={currentEmail.email}
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
          {status === 'loading' ? <CircularProgress color="primary" /> : 'Request Password Reset'}
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
