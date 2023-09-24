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
  const [onSignInPage, setOnSignInPage] = useState(false);
  const [useArticle2, setUseArticle2] = useState(true);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} onSignInPage={onSignInPage} setOnSignInPage={setOnSignInPage} setUseArticle2={setUseArticle2}/>
        <Outlet context={[loggedIn, setLoggedIn, setOnSignInPage, useArticle2, setUseArticle2]}/>
      </ThemeProvider>      
    </div>
  );
}

export default App;
