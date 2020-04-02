import React from 'react';
import { CircularProgress } from "@material-ui/core/";
import { makeStyles } from '@material-ui/core/styles';

const LoadingScreen = (props) => {
  const { isLoading, message = 'Loading...' } = props;
  console.log('our loading', isLoading);
  const classes = useStyles();
  return <CircularProgress />;
}

const useStyles = makeStyles({
    spinnerTextStyle: {
        color: '#DDD'
      },
  });

export default LoadingScreen;