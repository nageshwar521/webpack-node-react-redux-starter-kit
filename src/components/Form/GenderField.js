import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormHelperText from "@material-ui/core/FormHelperText";

const GenderField = ({
  required = false,
  className,
  label,
  value,
  onChange,
  error,
  helperText,
  ...restProps
}) => {
  return (
    <FormControl
      required={required}
      fullWidth
      margin="normal"
      className={["form-input", className ? className : null].join(" ")}
      component="fieldset"
      {...restProps}
    >
      <FormLabel error={error} component="legend">
        {label}
      </FormLabel>
      <RadioGroup row value={value} onChange={onChange}>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
      </RadioGroup>
      <FormHelperText error={error}>{helperText}</FormHelperText>
    </FormControl>
  );
};

export default GenderField;
