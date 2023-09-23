import React, { useState } from 'react';
import {
  Typography, 
  TextField, 
  Button, 
  CssBaseline,
  Avatar,
  Container,
  styled
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const PurpleButton = styled(Button)({
    backgroundColor: '#673ab7',
    color: 'white',
    '&:hover': {
      backgroundColor: '#8561c5' ,
      color: 'white'
    },
    borderRadius: '30px'
})

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically validate the form data and send it to your backend
    console.log(formData);
  };

  return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Avatar style={{ margin: 8, backgroundColor: '#8A2BE2' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <form style={{ display:'flex', flexDirection: 'Column' ,width: '100%', marginTop: 8 ,alignItems:'center'}} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={formData.email}
            onChange={handleChange}
            style={{width:'300px'}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={formData.password}
            onChange={handleChange}
            style={{width:'300px'}}

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            id="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            style={{width:'300px'}}

          />
          <PurpleButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ margin: '24px 0 16px', width: '300px' }}
          >
            Sign Up
          </PurpleButton>
        </form>
      </div>
  );
}
