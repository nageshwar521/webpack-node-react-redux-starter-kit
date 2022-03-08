import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useDispatch } from 'react-redux';

const AlertMessage = ({
  type = 'success',
  closeAlertTimeout = 5000,
  reduxField,
  children,
  onReset,
}) => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      if (reduxField) {
      } else {
        if (onReset) {
          onReset();
        }
      }
    }, closeAlertTimeout);
    return () => {
      clearTimeout(timeout);
    };
  }, [closeAlertTimeout, dispatch, onReset, reduxField]);
  return <Alert severity={type}>{children}</Alert>;
};

export default AlertMessage;
