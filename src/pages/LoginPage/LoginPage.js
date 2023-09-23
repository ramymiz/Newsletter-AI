import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

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
    // Implement your login logic here, e.g., make an API request
  };

  const handleSubmit = () => {
    navigate('/articles');
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2>Login</h2>
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
        <Button variant="outlined" onClick={handleSubmit} style={{ width: '300px' }}>
          Submit
        </Button>
      </form>
    </div>
  );
}
