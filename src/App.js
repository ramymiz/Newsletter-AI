import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './shared_components/Header/Header';
import theme from './theme.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header loggedIn={loggedIn} />
        <Outlet context={[loggedIn, setLoggedIn]}/>
      </ThemeProvider>      
    </div>
  );
}

export default App;
