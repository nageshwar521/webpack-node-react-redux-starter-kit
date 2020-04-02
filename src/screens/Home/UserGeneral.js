import React from 'react';
import { Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
//import MenuAppBar from '../components/MenuAppBar';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import { useForm } from '../../utils/validator';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';


const UserGeneral = (props) => {
  const { classes, user, onChange } = props;
  const { firstname, lastname, email, zip, gender, ethnicity } = user;
  const { values, useInput, isValid, isDirty } = useForm({
      user
  });

  const handleChange = (fieldName, event) => {
      if (onChange) {
        onChange(fieldName, event);
      }
  }

  return (
    <Card className={classes.root} >
      <CardHeader
        avatar={
          <Avatar alt="You" variant="rounded" src="https://img.icons8.com/ios/96/000000/gender-neutral-user.png" />
        }
        title="Who Am I?"
      />
      <CardContent>
        <TextValidator
          label="First Name"
          onChange={handleChange.bind(this, 'firstname')}
          value={user['firstname']}
          validators={['required']}
          errorMessages={['First name is required']}
        />
        <TextValidator
          label="Last Name"
          onChange={handleChange.bind(this, 'lastname')}
          value={user['lastname']}
          requiredError="is required"
          validators={['required']}
          errorMessages={['Last name is required']}
        />
        <TextValidator
          fullWidth
          label="Email"
          onChange={handleChange.bind(this, 'email')}
          value={user['email']}
          validators={['required', 'isEmail']}
          errorMessages={['Email is required', 'Invalid email']}
        />
       <TextValidator
          label="Zip Code"
          onChange={handleChange.bind(this, 'zip')}
          value={user['zip']}
          validators={['required', 'matchRegexp:^(\d{5}(?:\-\d{4})?)$']}
          errorMessages={['Zip code is required', 'Invalid zip code']}
        />
       
        <FormControl className={classes.formControl}>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            labelId="gender-label"
            name="gender"
            id="gender-select"
            value={gender}
            onChange={onChange}
          >
            <MenuItem value='female'>Female</MenuItem>
            <MenuItem value='male'>Male</MenuItem>
          </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="ethnicity-label">Ethnicity</InputLabel>
          <Select
            labelId="ethnicity-label"
            name="ethnicity"
            id="ethnicity-select"
            value={ethnicity}
            onChange={onChange}
            style={{ width: '200px' }}
          >
            <MenuItem value='american_indian'>American Indian</MenuItem>
            <MenuItem value='asian'>Asian</MenuItem>
            <MenuItem value='african_american'>African American</MenuItem>
            <MenuItem value='alaskan'>Alaskan</MenuItem>
            <MenuItem value='hawaiian'>Hawaiian</MenuItem>
            <MenuItem value='hispanic'>Hispanic / Latino</MenuItem>
            <MenuItem value='indian'>Indian</MenuItem>
            <MenuItem value='caucasian'>Caucasain</MenuItem>
          </Select>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

  )
}

export default UserGeneral;