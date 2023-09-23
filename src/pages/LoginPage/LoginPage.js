import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {
    Typography, 
    CssBaseline,
    Avatar,
    Container, 
    styled
  } from '@mui/material';

  const CustomButton = styled(Button)({
      backgroundColor: '#673ab7',
      color: 'white',
      '&:hover': {
        backgroundColor: '#8561c5' ,
        color: 'white'
      },
      borderRadius: '30px'
  })


export default function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    navigate('/articles');  };

  const handleSignUp = () => {
    navigate('/sign-up');
  };
  

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar style={{ margin: 8, backgroundColor: '#8A2BE2' }}>
          <MenuBookIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Welcome Back
        </Typography>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop:'16px'}}>
        <TextField
          id="outlined-Username-input"
          label="Email *"
          type="Username"
          autoComplete="current-Username"
          variant="outlined"
          style={{ marginBottom: '16px', width: '300px' }}
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          id="outlined-password-input"
          label="Password *"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          style={{ marginBottom: '16px', width: '300px' }}
          value={password}
          onChange={handlePasswordChange}
        />
        <CustomButton variant="contained" onClick={handleLogin} style={{ width: '290px' }}>
          Login
        </CustomButton>
        </form>
        <p>
        Don't have an account?{' '}
        <Link to="/sign-up" style={{ color: 'rgb(0, 122, 255)' }}>
          Sign Up
        </Link>
      </p>
      
    </div>
  );
}
