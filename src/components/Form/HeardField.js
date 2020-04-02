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

const HeardField = ({
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
          <MenuItem value="Craigslist">Craigslist</MenuItem>
          <MenuItem value="Facebook">Facebook</MenuItem>
          <MenuItem value="MySpace">MySpace</MenuItem>
          <MenuItem value="Twitter">Twitter</MenuItem>
          <MenuItem value="Business Card">Business Card</MenuItem>
          <MenuItem value="Word of Mouth">Word of Mouth</MenuItem>
          <MenuItem value="Google">Google</MenuItem>
          <MenuItem value="Email">Email</MenuItem>
        </Select>
        <FormHelperText error={error}>{helperText}</FormHelperText>
      </FormControl>
    </div>
  );
};

export default HeardField;
