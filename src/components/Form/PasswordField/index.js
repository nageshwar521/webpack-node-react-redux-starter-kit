/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import TextField from '@material-ui/core/TextField';

const PasswordField = ({
  variant = 'outlined',
  required = true,
  fullWidth = true,
  onChange,
  field,
  ...otherProps
}) => {
  return (
    <TextField
      type="password"
      variant={variant}
      required={required}
      fullWidth={fullWidth}
      onChange={(e) => onChange(field, e.target.value, e)}
      {...otherProps}
    />
  );
};

export default PasswordField;
