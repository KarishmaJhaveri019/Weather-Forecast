import logo from './logo.svg';
import './App.css';
import Weathercard from './Components/Weathercard0';
import Temp from "./Components/temp"
import React, { useState, useEffect } from 'react';

function App() {
  const [dark, setMode] = useState(false)
  return (
    <>
      <div className={dark ? 'App dark-mode' : 'App'}>
        <center>

          <header className="App-header">
            <h1>5 Day Weather Forecast</h1>
          </header>
          <Temp  {...dark}/>
          <br />
          <br />
          <br />
          <br />

          <div className='switch'>
            <input type="checkbox" onChange={() => setMode(!dark)} />
            Dark Mode
          </div>
          <h4 className='by'>Karishma Jhaveri</h4>
        </center>
      </div>
    </>
  );
}

export default App;