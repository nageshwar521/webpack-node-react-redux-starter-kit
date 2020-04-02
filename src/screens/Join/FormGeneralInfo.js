import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      },
});

class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        const { classes } = this.props;

        return (
            <React.Fragment>
                <FormControl className={classes.formControl}>
                <TextField
                    required
                    label="First Name"
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                />
                </FormControl>
                <br />
                <FormControl className={classes.formControl}>
                <TextField
                    required
                    label="Last Name"
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                />
                </FormControl>
                <br />
                <FormControl className={classes.formControl}>
                <TextField
                    required
                    label="Email Address"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                />
                </FormControl>
                <br />
                <FormControl className={classes.formControl}>
                <TextField
                    required
                    label="Zip Code"
                    onChange={handleChange('zip')}
                    defaultValue={values.zip}
                />
                </FormControl>
                <br />
                <FormControl className={classes.formControl}>
                    <InputLabel id="gender-label">Gender</InputLabel>
                    <Select
                        labelId="gender-label"
                        id="gender-select"
                        value={values.gender}
                        onChange={handleChange('gender')}
                        >
                        <MenuItem value='female'>Female</MenuItem>
                        <MenuItem value='male'>Male</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <FormControl className={classes.formControl}>
                    <InputLabel id="ethnicity-label">Ethnicity</InputLabel>
                    <Select
                        labelId="ethnicity-label"
                        id="ethnicity-select"
                        value={values.ethnicity}
                        onChange={handleChange('ethnicity')}
                        style={{width: '200px'}}
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
                <br />
                <Button color="primary" variant="contained" onClick={this.continue}>
                    Continue
                </Button>
            </React.Fragment>
        )
        }
}
export default withStyles(useStyles)(FormUserDetails);