import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

export class Success extends Component {
    render() {

        return (
            <React.Fragment>
                <h1>Thank you for your submission</h1>
                <p> you will get an email with further instructions. </p>
                
            </React.Fragment>
        )
    }
}

export default Success;