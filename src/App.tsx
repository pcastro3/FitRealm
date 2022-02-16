import React from 'react';
import Button from '@mui/material/Button';
import './SASS/App.scss';
import HomePage from './Components/HomePage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <Button variant='contained'>Click Me!</Button>
    </div>
  );
}

export default App;
