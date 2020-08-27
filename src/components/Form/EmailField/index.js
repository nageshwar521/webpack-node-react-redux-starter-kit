import React from 'react';
import TextField from '@material-ui/core/TextField';

const EmailField = ({
  variant = 'outlined',
  required = true,
  fullWidth = true,
  value,
  onChange,
  field,
  ...otherProps
}) => {
  return (
    <TextField
      variant={variant}
      required={required}
      fullWidth={fullWidth}
      onChange={(e) => onChange(field, e.target.value, e)}
      {...otherProps}
    />
  );
};

export default EmailField;
