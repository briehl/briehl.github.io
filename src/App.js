import React, { Component } from 'react';
import logo from './logo.svg';
import './css/App.css';
import NavBar from './components/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <NavBar />
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to My Webpage of sorta doom.</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;