import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import SimpleButton from './SimpleButton';
import LoginPage from './pages/LoginPage/LoginPage';
function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  }   

  const handleCountChange = useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className="App">
      <SimpleButton handleClick={handleClick}/>
      <LoginPage /> {/* Render the Login component here */}

    </div>
  );
}

export default App;
