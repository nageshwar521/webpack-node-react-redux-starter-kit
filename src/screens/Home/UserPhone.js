import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import MuiPhoneNumber from "material-ui-phone-number";

const UserPhone = (props) => {
    const { classes, user, handleChange } = props;
    console.log('our user', user);
    if (!user)
        return <></>;
    const { cellphone, homephone } = user;

    const handlePhoneChange = (value) => {
        if (value) {
          //this.setState({ phone: value });
        }
      }

    return (
        <Card className={classes.root} >
            <CardHeader
                avatar={
                    <Avatar alt="You" variant="rounded" src="https://img.icons8.com/ios/96/000000/phone.png" />
                }
                title="Contact me!"
            />
            <CardContent>
                <MuiPhoneNumber
                    name="phone"
                    label="Phone Number"
                    data-cy="user-phone"
                    defaultCountry={"us"}
                    value={ homephone}
                    onChange={handlePhoneChange}
                />
                    <MuiPhoneNumber
                    name="Home Phone"
                    label="Home Phone"
                    data-cy="user-phone"
                    defaultCountry={"us"}
                    value={ homephone }
                    onChange={handlePhoneChange('homephone')}
                />
                <MuiPhoneNumber
                    name="Cell Phone"
                    label="Cell Phone"
                    data-cy="user-phone"
                    defaultCountry={"us"}
                    value={cellphone}
                    onChange={handlePhoneChange('cellphone')}
                />
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>

    )
}

export default UserPhone;