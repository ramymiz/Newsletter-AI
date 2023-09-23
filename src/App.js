import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

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

    </div>
  );
}

export default App;
