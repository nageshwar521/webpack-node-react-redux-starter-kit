import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';

const useStyles = theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
});

export class FormFinalStep extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        const { classes } = this.props;
    
        return (
            <React.Fragment>
                <FormControl className={classes.formControl}>
                <TextField
                    required
                    label="Home Phone"
                    onChange={handleChange('homePhone')}
                    defaultValue={values.homePhone}
                />
                </FormControl>
                <br />
                <FormControl className={classes.formControl}>
                <TextField
                    required
                    label="Cell Phone"
                    onChange={handleChange('cellPhone')}
                    defaultValue={values.cellPhone}
                />
                </FormControl>
                <br />
                <FormControl className={classes.formControl}>
                <TextField
                    required
                    label="Password"
                    type="password"
                    onChange={handleChange('password')}
                    defaultValue={values.password}
                />
                </FormControl>
                <br />
                <FormControl className={classes.formControl}>
                <InputLabel id="heard-label">How you heard about us</InputLabel>
                <Select
                    labelId="heard-label"
                    id="heard-select"
                    value={values.heard}
                    onChange={handleChange('heard')}
                    style={{width: '200px'}}
                    >
                    <MenuItem value='Craigslist'>Craigslist</MenuItem>
                    <MenuItem value='Facebook'>Facebook</MenuItem>
                    <MenuItem value='MySpace'>MySpace</MenuItem>
                    <MenuItem value='Twitter'>Twitter</MenuItem>
                    <MenuItem value='Business Card'>Business Card</MenuItem>
                    <MenuItem value='Word of Mouth'>Word of Mouth</MenuItem>
                    <MenuItem value='Google'>Google</MenuItem>
                    <MenuItem value='Email'>Email</MenuItem>
                </Select>
                </FormControl>
                <br />
                <Button color="secondary" variant="contained" onClick={this.back}>
                    Back
                </Button>
                <Button color="primary" variant="contained" onClick={this.continue}>
                    Continue
                </Button>
            </React.Fragment>
        )
        }
}
export default withStyles(useStyles)(FormFinalStep);