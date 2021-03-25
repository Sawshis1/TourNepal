 import React, { useState, useEffect } from 'react';
 import Axios from "axios";
 import {Avatar, Grid, Paper, TextField, Button, Typography, Link} from '@material-ui/core';
 import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
 //import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

 const Login=()=>{


    const paperStyle={padding:20, height:'70vh', width:280, margin:'20px auto' }
    const avatarStyle={backgroundColor:'green'}
    const btnStyle={margin:'8px 0'}

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    //const [LoginStatus, setLoginStatus] = useState("");]

    Axios.defaults.withCredentials = true;

      const login = (e) => {
        e.preventDefault();
    Axios.post('/login', {
        CustomerName: userName,
        CustomerPassword: password,
    }).then((response) => {
        console.log(response);
    })
};

    useEffect(()=> {
        Axios.get('/login').then((response) => {
            console.log(response);
        })
    }, [])

     return(
         <Grid>
             <Paper elevation={10} style={paperStyle} >
                 <Grid align='center'>
                     <Avatar style={avatarStyle}>S</Avatar>
                    <h2>Sign In</h2>
                 </Grid>
                 <TextField label='Username' placeholder='Enter Username' fullWidth required 
                 onChange={(e) => {
                     setUserName(e.target.value);
                 }}
                 />
                <TextField label='Password' placeholder='Enter Password' type='password' fullWidth required
                 onChange={(e) => {
                     setPassword(e.target.value);
                 }}
                />   
                <FormControlLabel
                    control={
                         <Checkbox
                                name="checkedB"
                                color="primary"
                             />
                    }
                        label="Remember me"
                />       
                <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth 
                onClick={login}>Sign In </Button>    

                <Typography>New to the site?
                   <Link href="#">
                        Sign Up
                    </Link> 
                </Typography>
             </Paper>
         </Grid>
     )

}

export default Login;

