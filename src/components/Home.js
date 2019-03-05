import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import logo from '../media/logo.svg';

class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant="display1" color="inherit" className="App-title">Welcome to My Webpage of sorta doom.</Typography>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default Home;
