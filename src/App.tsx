import React from 'react';
import Button from '@mui/material/Button';
import './SASS/App.scss';
import './SASS/TabBar.scss';
import HomePage from './Components/HomePage';
import FullWidthTabs from './Components/Tabs';

function App() {
  return (
    <div className="App">
      <FullWidthTabs />
      <HomePage />
      <Button variant='contained'>Click Me!</Button>
    </div>
  );
}

export default App;
