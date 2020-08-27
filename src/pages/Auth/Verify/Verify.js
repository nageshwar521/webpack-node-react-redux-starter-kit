/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { verifyUser } from '@redux/actions/authActions';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { getTokenFromUrl } from '../utils';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vh;
`;

const StyledText = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Verify = () => {
  const [seconds, setSeconds] = React.useState(5);
  const history = useHistory();
  const dispatch = useDispatch();
  const { status, verificationUserSuccess, verificationUserError } = useSelector(
    (store) => store.auth,
  );
  const token = getTokenFromUrl();
  React.useEffect(() => {
    localStorage.setItem('verify-token', token);
    if (token) {
      dispatch(verifyUser({ token }));
    }
  }, [token]);
  React.useEffect(() => {
    localStorage.setItem('verificationUserSuccess', verificationUserSuccess);
    if (verificationUserError) {
      let interval = null;
      if (!interval) {
        interval = setInterval(() => {
          setSeconds((seconds) => seconds - 1);
        }, seconds * 500);
      }
      if (seconds === 0) {
        clearInterval(interval);
        // history.push('/#/auth/login');
      }
      return () => clearInterval(interval);
    } else if (verificationUserSuccess) {
      // history.push('/#/auth/login');
    }
  }, [seconds, verificationUserSuccess, verificationUserError]);
  const message =
    status === 'loading' || status === 'initial'
      ? 'Verifying User'
      : verificationUserSuccess || verificationUserError;
  return (
    <StyledContainer>
      {status === 'loading' || status === 'initial' ? <CircularProgress color="primary" /> : null}
      <div className="loading-text">{message}</div>
      {verificationUserSuccess || verificationUserError ? (
        <StyledText>
          You will automatically redirect to login page in {seconds} seconds. If not, click here to
          go to{' '}
          {
            <Button variant="text" color="primary" href="/auth/login">
              login
            </Button>
          }{' '}
          page
        </StyledText>
      ) : null}
    </StyledContainer>
  );
};

export default Verify;
