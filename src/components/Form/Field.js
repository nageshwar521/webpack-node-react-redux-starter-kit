import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 120
  },
  asterisk: {
    color: theme.palette.error.main
  }
}));

const Field = ({
  component: FieldComponent = TextField,
  fullWidth = true,
  margin = "normal",
  className = "form-input",
  classes = {},
  ...props
}) => {
  const fieldClasses = useStyles();
  const currentClasses = {};
  const allClasses = Object.assign({}, currentClasses, classes);
  return (
    <FieldComponent
      classes={allClasses}
      fullWidth={fullWidth}
      margin={margin}
      className={className}
      {...props}
    />
  );
};

export default Field;
