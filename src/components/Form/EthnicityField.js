import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles(theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2)
  },
  formControl: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    minWidth: 120
  }
}));

const EthnicityField = ({
  required = false,
  className,
  label,
  value,
  onChange,
  error,
  helperText,
  ...restProps
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <FormControl
        required={required}
        margin="normal"
        fullWidth
        className={classes.formControl}
        {...restProps}
      >
        <InputLabel id="ethnicity-label">{label}</InputLabel>
        <Select
          labelId="ethnicity-label"
          id="ethnicity-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          onChange={onChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="american_indian">American Indian</MenuItem>
          <MenuItem value="asian">Asian</MenuItem>
          <MenuItem value="african_american">African American</MenuItem>
          <MenuItem value="alaskan">Alaskan</MenuItem>
          <MenuItem value="hawaiian">Hawaiian</MenuItem>
          <MenuItem value="hispanic">Hispanic / Latino</MenuItem>
          <MenuItem value="indian">Indian</MenuItem>
          <MenuItem value="caucasian">Caucasain</MenuItem>
        </Select>
        <FormHelperText error={error}>{helperText}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default EthnicityField;
