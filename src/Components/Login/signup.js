import React, {useState} from 'react'
import Axios from "axios";
import { Grid, Paper, Avatar, Typography, TextField, Button } from '@material-ui/core'
//import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
//import Radio from '@material-ui/core/Radio';
//import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormControl from '@material-ui/core/FormControl';
//import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';



const Signup = () => {
    const paperStyle = { padding: '30px 20px', width: 300, margin: "20px auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    const [userNameReg, setUserNameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [emailReg, setEmailReg] = useState("");
    const [phoneReg, setPhoneReg] = useState("");
    const [countryReg, setCountryReg] = useState("");


    const register = (e) => {
        e.preventDefault();
    Axios.post('/register', {
        CustomerName: userNameReg,
        CustomerEmail: emailReg,
        CustomerCountry: countryReg,
        CustomerPhone: phoneReg,
        CustomerPassword: passwordReg,
    }).then((response) => {
        console.log(response);
    })
};

    return (
        <Grid>
            <Paper elevation={20} style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        {/*<AddCircleOutlineOutlinedIcon />*/}
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                    <TextField fullWidth label='Name' placeholder="Enter your name" onChange={(e) => {
                        setUserNameReg(e.target.value);
                    }} />
                    <TextField fullWidth label='Email' placeholder="Enter your email" onChange={(e) => {
                        setEmailReg(e.target.value);
                    }} />

                    <TextField fullWidth label='Country' placeholder="Enter your Country" onChange={(e) => {
                        setCountryReg(e.target.value);
                    }} />
                   
                   
                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" onChange={(e) => {
                        setPhoneReg(e.target.value);
                    }} />
                    <TextField fullWidth label='Password' placeholder="Enter your password" onChange={(e) => {
                        setPasswordReg(e.target.value);
                    }}/>
                    
                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />
                    <Button type='submit' variant='contained' color='primary' onClick={register}>Sign up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup;