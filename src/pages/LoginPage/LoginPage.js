import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; // Import Link from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

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
        <LockOutlinedIcon />

      <h2>Welcome Back</h2>
      <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <TextField
          id="outlined-Username-input"
          label="Username"
          type="Username"
          autoComplete="current-Username"
          variant="outlined"
          style={{ marginBottom: '16px', width: '300px' }}
          value={username}
          onChange={handleUsernameChange}
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          style={{ marginBottom: '16px', width: '300px' }}
          value={password}
          onChange={handlePasswordChange}
        />
        <Button color='primary'variant="contained" onClick={handleLogin} style={{ width: '290px' }}>
          Login
        </Button>
        </form>
        <p>
        Don't have an account?{' '}
        <Link to="/sign-up" style={{ textDecoration: 'underline', cursor: 'pointer' }}>
          Sign Up
        </Link>
      </p>
      
    </div>
  );
}
