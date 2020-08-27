import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector } from 'react-redux';

const LoadingContainer = styled.div`
  background-color: rgba(255, 255, 255, ${({ opacity = 1 }) => opacity});
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const LoadingPanel = ({ message, children, showLoading = true }) => {
  const status = useSelector((store) => store.status);
  const text = message ? message : status;
  return (
    <LoadingContainer>
      {showLoading ? <CircularProgress color="primary" /> : null}
      <div className="loading-text">{text}</div>
      {children}
    </LoadingContainer>
  );
};

export default LoadingPanel;
