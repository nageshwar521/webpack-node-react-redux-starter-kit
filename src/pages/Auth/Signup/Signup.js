import React from 'react';
import styled from 'styled-components';
import {
  makeStyles,
  Grid,
  Checkbox,
  Link,
  FormControlLabel,
  TextField,
  Button,
  Container,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { Link as RouterLink, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import AlertMessage from '@components/AlertMessage';
import ErrorContainer from '@pages/Auth/ErrorContainer';
import CircularProgress from '@material-ui/core/CircularProgress';

import AuthHeader from '../_common/AuthHeader';
import EmailField from '@components/Form/EmailField';
import PasswordField from '@components/Form/PasswordField';
import InputField from '@components/Form/InputField';
import { validateForm } from '../utils';

export default function SignUp() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const { status, createUserSuccess, createUserError } = useSelector((store) => store.auth);
  const currentUser = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const labels = {
    name: 'Name',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm Password',
  };
  // const [isFormValid, setIsFormValid] = React.useState(false);
  const [errors, setErrors] = React.useState(currentUser);
  const [user, setUser] = React.useState(currentUser);
  const handleChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };
  // console.log('createUserSuccess');
  // console.log(createUserSuccess);

  const handleSubmit = () => {
    const { isFormValid, errors } = validateForm(user, labels);
    console.log('errors');
    console.log(errors);
    if (!isFormValid) {
      setErrors(errors);
      return false;
    }
    setErrors(currentUser);
    dispatch(register(user));
  };

  React.useEffect(() => {
    if (createUserSuccess) {
      history.push('/auth/login');
    }
  }, [createUserSuccess, history]);

  return (
    <Container>
      <AuthHeader title={'Sign Up'} />
      <ErrorContainer>
        {errors && Object.values(errors).find(Boolean) ? (
          <AlertMessage type="error" onReset={() => setErrors(currentUser)}>
            {Object.values(errors).filter(Boolean)[0]}
          </AlertMessage>
        ) : null}
        {createUserError ? (
          <AlertMessage
            reduxField="createUserError"
            type="error"
            onReset={() => setErrors(currentUser)}
          >
            {createUserError}
          </AlertMessage>
        ) : null}
        {createUserSuccess ? (
          <AlertMessage
            reduxField="createUserSuccess"
            type="success"
            onReset={() => setErrors(currentUser)}
          >
            {createUserSuccess}
          </AlertMessage>
        ) : null}
      </ErrorContainer>
      <div className={classes.form}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <InputField
              field="name"
              label={labels.name}
              value={user.name}
              onChange={handleChange}
            />
          </Grid>
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
          <Grid item xs={12}>
            <PasswordField
              field="confirmPassword"
              label={labels.confirmPassword}
              value={user.confirmPassword}
              onChange={handleChange}
            />
          </Grid>
          {/* <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
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
          {status === 'loading' ? <CircularProgress color="primary" /> : 'Sign Up'}
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link component={RouterLink} to="/auth/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
