import React, { Component } from 'react'
import FormGeneralInfo from './FormGeneralInfo';
import FormFinalStep from './FormFinalStep';
import FormAboutYou from './FormAboutYou';
import Confirm from './Confirm';
import Success from './Success';

export class UserForm extends Component {
    state = {
        step: 1,
        data: {
        firstName: '',
        lastName: '',
        email: '', 
        zip: '',
        gender: '', 
        heightFeet: '',
        heightInches: '',
        hairColor: '',
        shirtSize: '',
        pantSize: '',
        ethnicity: '',
        homePhone: '',
        cellPhone: '',
        heard: '',
        password: ''
        },
        disabled: false,
        submitted: false,
    }

    // Proceed to the next step 
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        })
        /*
        this.form.isFormValid(false).then((isValid) => {
            if (isValid) {
                let { step } = this.state;
                if (step < 3) {
                    step++;
                }
                this.setState({ step });
            }
        });
        */
    }

    // Go back to the prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        })
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, zip, gender, heightFeet, heightInches, hairColor, shirtSize, pantSize, ethnicity, homePhone, cellPhone, heard } = this.state;
        const values = { firstName, lastName, email, zip, gender, heightFeet, heightInches, hairColor, shirtSize, pantSize, ethnicity, homePhone, cellPhone, heard };

        switch(step) {
            case 1:
                return (
                    <FormGeneralInfo 
                        nextStep = {this.nextStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 2:
                return (
                    <FormAboutYou 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 3: 
                return (
                    <FormFinalStep 
                        nextStep = {this.nextStep}
                        prevStep = {this.prevStep}
                        handleChange = {this.handleChange}
                        values = {values}
                    />
                )
            case 4:
            return (
                <Confirm 
                    nextStep = {this.nextStep}
                    prevStep = {this.prevStep}
                    values = {values}
                />
            )
            case 5: 
                return <Success />
        }
    }
}

export default UserForm
