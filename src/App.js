import React from 'react';
import './App.css';
import Clicker from './components/Clicker';
import MapClicker from './components/MapClicker';


function App() {

  return (
    <div className="App">
      <header className="App-header">
      Chasing Clicks
      </header>
      <Clicker />
      <MapClicker />
    </div>
  );
}

export default App;
