import React, { useState, useEffect } from 'react';

import { withStyles } from '@material-ui/core/styles';
import UserGeneral from './UserGeneral';
import UserMeasure from './UserMeasure'
import UserPhone from './UserPhone';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

const useStyles = theme => ({
  formControl: {
    margin: theme.spacing(1),
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    '& .email .MuiTextField-root': {
      width: 300
    },
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      minWidth: 100,
    },
    minWidth: 325,
    maxWidth: 450,
    margin: 20,
  },
  email: {
    width: 300
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const UserForm = (props) => {
  const { classes } = props;
  //const { user } = props;
  
  const [ user , setUser] = React.useState(props.user);

  const { register, handleSubmit, watch, errors, formState } = useForm();
  const onSubmit = data => {console.log(formState);}
  const handleChange = (fieldName, event) => {
      console.log(fieldName, event.target.value);
      const value = event.target.value;
      const newUser = Object.assign({}, user, {[fieldName]:value});
      setUser(newUser);
  }

  //console.log('our props.user =>', props.user);
  //console.log('our user =>', user);
  return (
    <ValidatorForm className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      
      <UserGeneral user={user} classes={classes} onChange={handleChange}/>
            
      <Button type="submit"
        color="primary"
        className={classes.marginTop}
        disabled={JSON.stringify(props.user) === JSON.stringify(user)}
        variant="contained">
          
        Submit
      </Button>
      
    </ValidatorForm>
  )
}

export default withStyles(useStyles)(UserForm);
