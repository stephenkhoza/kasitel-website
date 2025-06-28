import React from 'react';
import './App.css';
import KasitelIntro from './components/KasitelIntro';
import logo from './assets/images/kasitel-logo.jpg';

function App() {
  return (
    <div className="App">
      <header className="site-header">
        <img src={logo} alt="Kasitel Logo" className="logo" />
      </header>
      <KasitelIntro />
    </div>
  );
}

export default App;
