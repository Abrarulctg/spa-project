import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './compunents/Header/Header';
import Friends from './compunents/Friends/Friends';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Header></Header>  
          <Friends></Friends>
        </div>
        
      </header>
    </div>
  );
}

export default App;
