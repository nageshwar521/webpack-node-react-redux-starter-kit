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

class FormPersonalDetails extends Component {
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
                <br />
                <FormControl className={classes.formControl}>
                <InputLabel id="heightFeet-label">Height</InputLabel>
                <Select
                    labelId="heightFeet-label"
                    id="heightFeet-select"
                    value={values.heightFeet}
                    onChange={handleChange('heightFeet')}
                    >
                    <MenuItem value='2'>2'</MenuItem>
                    <MenuItem value='3'>3'</MenuItem>
                    <MenuItem value='4'>4'</MenuItem>
                    <MenuItem value='5'>5'</MenuItem>
                    <MenuItem value='6'>6'</MenuItem>
                    <MenuItem value='7'>7'</MenuItem>
                </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                <InputLabel id="heightInches-label"></InputLabel>
                <Select
                    id="heightInches-select"
                    value={values.heightInches}
                    onChange={handleChange('heightInches')}
                    >
                    <MenuItem value='1'>1"</MenuItem>
                    <MenuItem value='2'>2"</MenuItem>
                    <MenuItem value='3'>3"</MenuItem>
                    <MenuItem value='4'>4"</MenuItem>
                    <MenuItem value='5'>5"</MenuItem>
                    <MenuItem value='6'>6"</MenuItem>
                    <MenuItem value='7'>7"</MenuItem>
                    <MenuItem value='8'>8"</MenuItem>
                    <MenuItem value='9'>9"</MenuItem>
                    <MenuItem value='10'>10"</MenuItem>
                    <MenuItem value='11'>11"</MenuItem>
                </Select>
                </FormControl>
                <br />
                <FormControl className={classes.formControl}>
                    <InputLabel id="hairColor-label">Hair Color</InputLabel>
                    <Select
                        labelId="hairColor-label"
                        id="hairColor-select"
                        value={values.hairColor}
                        onChange={handleChange('hairColor')}
                        >
                        <MenuItem value='Black'>Black</MenuItem>
                        <MenuItem value='Brown'>Brown</MenuItem>
                        <MenuItem value='Blonde'>Blonde</MenuItem>
                        <MenuItem value='Red'>Red</MenuItem>
                        <MenuItem value='Gray'>Gray</MenuItem>
                        <MenuItem value='Bald'>Bald</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <FormControl className={classes.formControl}>
                    <InputLabel id="shirtSize-label">Shirt Size</InputLabel>
                    <Select
                        labelId="shirtSize-label"
                        id="shirtSize-select"
                        value={values.shirtSize}
                        onChange={handleChange('shirtSize')}
                        >
                        <MenuItem value='XS'>Extra Small</MenuItem>
                        <MenuItem value='S'>Small</MenuItem>
                        <MenuItem value='M'>Medium</MenuItem>
                        <MenuItem value='L'>Large</MenuItem>
                        <MenuItem value='XL'>Extra Large</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <FormControl className={classes.formControl}>
                <TextField
                    required
                    label="Pant Size"
                    onChange={handleChange('pantSize')}
                    defaultValue={values.pantSize}
                />
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
export default withStyles(useStyles)(FormPersonalDetails);