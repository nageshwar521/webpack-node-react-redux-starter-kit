import React from "react";
import {
  TextField,
  Typography,
  LinearProgress,
  Button
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { makeStyles } from "@material-ui/styles";
import Field from "./Field";

const useStyles = makeStyles({
  progressContainer: {
    display: "flex",
    flexDirection: "row"
  },
  progress: {
    alignSelf: "flex-start",
    height: 5,
    flex: 1,
    marginTop: 8,
    marginRight: 8
  },
  progressActive: {
    background: props => colors[props.strength]
  },
  label: {
    color: props => colors[props.strength],
    alignSelf: "flex-end"
  }
});

const colors = {
  tooshort: "#ff3d00",
  weak: "#ff9100",
  medium: "#ffd600",
  strong: "#cddc39",
  verystrong: "#00b0ff"
};

const labels = {
  tooshort: "Too Short",
  weak: "Weak",
  medium: "Medium",
  strong: "Strong",
  verystrong: "Very Strong"
};

const values = {
  tooshort: 20,
  weak: 40,
  medium: 60,
  strong: 80,
  verystrong: 100
};

const getStrength = password => {
  const rank = {
    TOO_SHORT: "tooshort",
    WEAK: "weak",
    MEDIUM: "medium",
    STRONG: "strong",
    VERY_STRONG: "verystrong"
  };

  let upper = /[A-Z]/,
    lower = /[a-z]/,
    number = /[0-9]/,
    special = /[^A-Za-z0-9]/,
    minLength = 8,
    score = 0;

  if (password.length < minLength) {
    return rank.TOO_SHORT; // End early
  }

  // Increment the score for each of these conditions
  if (upper.test(password)) score++;
  if (lower.test(password)) score++;
  if (number.test(password)) score++;
  if (special.test(password)) score++;

  // Penalize if there aren't at least three char types
  if (score < 3) score--;

  if (password.length > minLength) {
    // Increment the score for every 2 chars longer than the minimum
    score += Math.floor((password.length - minLength) / 2);
  }

  // Return a ranking based on the calculated score
  if (score < 3) return rank.WEAK; // score is 2 or lower
  if (score < 4) return rank.MEDIUM; // score is 3
  if (score < 6) return rank.STRONG; // score is 4 or 5
  return rank.VERY_STRONG; // score is 6 or higher
};

const StrengthMeter = props => {
  const strength = getStrength(props.password);
  const classes = useStyles({ strength });
  return (
    <div className={classes.progressContainer}>
      <LinearProgress
        classes={{
          root: classes.progress,
          barColorPrimary: classes.progressActive
        }}
        variant="determinate"
        value={values[strength]}
      />
      <Typography
        align="right"
        variant="caption"
        classes={{ root: classes.label }}
      >
        {labels[strength]}
      </Typography>
    </div>
  );
};

const TogglePasswordButton = props => {
  return (
    <IconButton onClick={props.onClick}>
      {props.showPassword ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  );
};

const PasswordField = ({ value, showStrength = false, ...restProps }) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  let InputProps = {};
  if (value && value.length > 0) {
    InputProps = {
      endAdornment: (
        <TogglePasswordButton
          showPassword={showPassword}
          onClick={handlePasswordToggle}
        />
      )
    };
  }
  return (
    <div>
      <Field
        value={value}
        type={showPassword ? "text" : "password"}
        InputProps={InputProps}
        {...restProps}
      />
      {showStrength && value && value.length > 0 ? (
        <StrengthMeter password={value} />
      ) : null}
    </div>
  );
};

export default PasswordField;
