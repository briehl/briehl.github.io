import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import logo from '../media/logo.svg';

class Home extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <Typography variant="h3" color="inherit" className="App-title">[ Splash screen goes here ]</Typography>
          <Typography variant="h6" color="inherit">This is a website. This is just the splash part. Stuff'll go here, like a picture. Then other things below.</Typography>
        </header>
      </div>
    );
  }
}

export default Home;
