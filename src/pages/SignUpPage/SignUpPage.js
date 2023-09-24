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
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link, useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const PurpleButton = styled(Button)({
    backgroundColor: '#673ab7',
    fontWeight: 'bold',
    textTransform: 'none',
    fontSize: '16px',
    color: 'white',
    '&:hover': {
        backgroundColor: '#8561c5',
        color: 'white'
    },
    borderRadius: '30px'
})

export default function SignUpPage() {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn, setOnSignInPage] = useOutletContext();
    setOnSignInPage(true);

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

    const handleSignUp = () => {
        navigate('/preferences');
        setLoggedIn(true);
        setOnSignInPage(false);
      };

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <Avatar style={{ margin: 8, backgroundColor: '#8A2BE2' }}>
                <AssignmentIcon />
            </Avatar>
            <h2 style={{ marginTop: '5px', marginBottom: '15px'}}>Sign up</h2>
            <form style={{ display: 'flex', flexDirection: 'Column', width: '100%', marginTop: 8, alignItems: 'center' }} onSubmit={handleSubmit}>
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    value={formData.email}
                    onChange={handleChange}
                    style={{ marginBottom: '16px', width: '300px' }}
                />
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{ marginBottom: '16px', width: '300px' }}

                />
                <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    style={{ marginBottom: '16px', width: '300px' }}

                />
                <PurpleButton
                    onClick = {handleSignUp}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    style={{width: '300px', marginBottom: '16px' }}
                >
                    Sign Up
                </PurpleButton>
            </form>
            <p style={{margin: '0px'}}>Already have an account? <Link to="/login" style={{ color: 'rgb(0, 122, 255)' }}>Log in</Link></p>
        </div>
    );
}
