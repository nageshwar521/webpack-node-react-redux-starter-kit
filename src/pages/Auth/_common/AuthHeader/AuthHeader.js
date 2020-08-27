import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles, Typography } from '@material-ui/core';
import BaseLogo from '@common/BaseLogo';

const AuthHeader = ({ title = '' }) => {
  const classes = useStyles();

  return (
    <Typography classes={{ root: classes.root }} component="h1" variant="h4">
      <div>
        <BaseLogo size={100} className={classes.logo} />
      </div>
      <div>{title}</div>
    </Typography>
  );
};

AuthHeader.propTypes = {
  title: PropTypes.string,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '20px',
  },
  logo: {
    color: theme.palette.primary.main,
    position: 'relative',
    top: '1px',
  },
}));

export default AuthHeader;
