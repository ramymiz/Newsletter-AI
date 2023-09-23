// Login.js
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
export default function LoginPage() {
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

  return (
    <div>
      <h2>Login</h2>
      <form>
        <div>
          <label>Username:</label>
          <TextField id="standard-basic" label="" variant="standard" />
        </div>
        <div>
          <label>Password:</label>
          <TextField id="standard-basic" label="" variant="standard" />
          </div>
          <Button variant="outlined">Submit</Button>


      </form>
    </div>
  );
}


