import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {AppTitle} from '@locale/keys'
import labels from '@locale/labels'

const Header = () => {
  const classes = useStyles();
  return (
    <div>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Button component={Link} to="/" color="inherit">
            {labels.get(AppTitle)}
          </Button>
          <div className={classes.flexGrow} />
          <Button component={Link} to="/auth/login" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  header: {
    background: theme.header.background.primary,
    color: theme.header.color.primary,
    boxShadow: 'none',
  },
  toolbar: {},
  menuButton: {},
  actions: {
    marginLeft: 'auto',
    alignItems: 'center',
    display: 'flex',
  },
  notificationsButton: {
    marginRight: 23,
  },
  flexGrow: {
    flexGrow: 1,
  },
}))

export default Header;
