import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

const StoreSelector = () => {
  const classes = useStyles();
  return (
    <FormControl className={classes.formControl}>
      <Select
        value={age}
        onChange={handleChange}
        displayEmpty
        className={classes.selectEmpty}
        inputProps={{ 'aria-label': 'Without label' }}
      >
        <MenuItem value="" disabled>
          Select Store
        </MenuItem>
        <MenuItem value={10}>Store 1</MenuItem>
        <MenuItem value={20}>Store 2</MenuItem>
        <MenuItem value={30}>Store 3</MenuItem>
      </Select>
      <FormHelperText>Placeholder</FormHelperText>
    </FormControl>
  );
};

const useStyles = makeStyles((theme) => ({}));

export default StoreSelector;
