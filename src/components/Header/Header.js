import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const style = {
  flexGrow: 1,
  justifyContent: "flex-start"
};
const HeaderComponent = ({ isLoggedIn = false }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Button style={style} component={Link} to="/" color="inherit">
            React App
          </Button>
          <Button component={Link} to="/login" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

const Header = connect(({ isLoggedIn }) => ({ isLoggedIn }))(HeaderComponent);

export default Header;
