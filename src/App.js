import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './shared_components/Header/Header';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div>
      <Header loggedIn={loggedIn} />
      <Outlet context={[loggedIn, setLoggedIn]}/>
    </div>
  );
}

export default App;
