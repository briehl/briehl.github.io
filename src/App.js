import React, { Component } from 'react';
import './css/App.css';
import 'typeface-roboto';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

class App extends Component {
  render() {
    return (
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
          <NavBar />
          <Home />
          <Projects />
          <Resume />
          <Contact />
        </div>
      </Router>
    );
  }
}

export default App;
