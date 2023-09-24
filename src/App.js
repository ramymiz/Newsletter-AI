import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './shared_components/Header/Header';
import theme from './theme.js';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ArticleTags from './pages/ArticlePage/components/ArticleTags';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Outlet context={[loggedIn, setLoggedIn]}/>
      </ThemeProvider>      
    </div>
  );
}

export default App;
