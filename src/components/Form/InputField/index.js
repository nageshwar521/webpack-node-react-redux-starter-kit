/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  makeStyles,
  Grid,
  Checkbox,
  Link,
  FormControlLabel,
  TextField,
  Button,
  Container,
} from '@material-ui/core';

const InputField = ({
  variant = 'outlined',
  required = true,
  fullWidth = true,
  onChange,
  field,
  value,
  ...otherProps
}) => {
  // console.log(value);
  const handleChange = (e) => {
    // console.log('handleChange e.target.value');
    // console.log(e.target.value);
    onChange(field, e.target.value);
  };
  return (
    <TextField
      value={value}
      variant={variant}
      required={required}
      fullWidth={fullWidth}
      onChange={handleChange}
      {...otherProps}
    />
  );
};

export default InputField;
