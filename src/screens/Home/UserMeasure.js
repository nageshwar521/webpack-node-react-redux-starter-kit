import React from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const UserMeasure = (props) => {
    const { classes, user, handleChange } = props;
    console.log('our user', user);
    if (!user)
        return <></>;
    const { heightfeet, heightinches, shirtsize, haircolor, pantsize } = user;
    const Capitalize = str => {
        if (!str) return '';
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <Card className={classes.root} >
            <CardHeader
                avatar={
                    <Avatar alt="You" variant="rounded" src="https://img.icons8.com/ios/96/000000/tape-measure-sewing.png" />
                }
                title="Measure me!"
            />
            <CardContent>
                <FormControl className={classes.formControl}>
                    <InputLabel id="heightFeet-label">Height</InputLabel>
                    <Select
                        labelId="heightFeet-label"
                        id="heightFeet-select"
                        value={heightfeet}
                        
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
                        value={heightinches}
                        
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
                <FormControl className={classes.formControl}>
                    <InputLabel id="hairColor-label">Hair Color</InputLabel>
                    <Select
                        labelId="hairColor-label"
                        id="hairColor-select"
                        value={Capitalize(haircolor)}
                        
                    >
                        <MenuItem value='Black'>Black</MenuItem>
                        <MenuItem value='Brown'>Brown</MenuItem>
                        <MenuItem value='Blonde'>Blonde</MenuItem>
                        <MenuItem value='Red'>Red</MenuItem>
                        <MenuItem value='Gray'>Gray</MenuItem>
                        <MenuItem value='Bald'>Bald</MenuItem>
                    </Select>
                </FormControl>
                <FormControl className={classes.formControl}>
                    <InputLabel id="shirtSize-label">Shirt Size</InputLabel>
                    <Select
                        labelId="shirtSize-label"
                        id="shirtSize-select"
                        value={shirtsize}
                        
                    >
                        <MenuItem value='XS'>Extra Small</MenuItem>
                        <MenuItem value='S'>Small</MenuItem>
                        <MenuItem value='M'>Medium</MenuItem>
                        <MenuItem value='L'>Large</MenuItem>
                        <MenuItem value='XL'>Extra Large</MenuItem>
                    </Select>
                </FormControl>
                <TextField
                    required
                    label="Pant Size"
                    
                    defaultValue={pantsize}
                />
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>

    )
}

export default UserMeasure;