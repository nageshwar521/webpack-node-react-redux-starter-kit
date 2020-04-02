import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import {List, ListItem } from '@material-ui/core';
import ListItemText from '@material-ui/core/ListItemText';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        //PROCESS  FORM SEND DATA TO API //
        alert('submit here.');
        this.props.nextStep();
    }
    
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values: { firstName, lastName, email, zip, gender, heightFeet, heightInches, hairColor, shirtSize, pantSize, ethnicity, homePhone, cellPhone, heard} } = this.props;

        return (
                <React.Fragment>
                    <List>
                        <ListItem>
                            <ListItemText primary="First Name"
                            secondary={ firstName } />
                        </ListItem> 
                        <ListItem>
                            <ListItemText primary="Last Name"
                            secondary={ lastName } />
                        </ListItem> 
                        <ListItem>
                            <ListItemText primary="Email"
                            secondary={ email } />
                        </ListItem> 
                        <ListItem>
                            <ListItemText primary="Zip Code"
                            secondary={ zip } />
                        </ListItem> 
                        <ListItem>
                            <ListItemText primary="Gender"
                            secondary={ gender } />
                        </ListItem> 
                        <ListItem>
                            <ListItemText primary="Height"
                            secondary={ heightFeet + " feet " + heightInches + " inches" }  />
                        </ListItem> 
                        <ListItem>
                            <ListItemText primary="Hair Color"
                            secondary={ hairColor } />
                        </ListItem> 
                        <ListItem>
                            <ListItemText primary="Shirt Size"
                            secondary={ shirtSize } />
                        </ListItem> 
                        <ListItem>
                            <ListItemText primary="Pant Size"
                            secondary={ pantSize } />
                        </ListItem> 
                        <ListItem>
                            <ListItemText primary="Ethnicity"
                            secondary={ ethnicity } />
                        </ListItem> 
                        <ListItem>
                            <ListItemText primary="Home Phone"
                            secondary={ homePhone } />
                        </ListItem> 
                        <ListItem>
                            <ListItemText primary="Cell Phone"
                            secondary={ cellPhone } />
                        </ListItem> 
                    </List>
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
export default FormUserDetails;