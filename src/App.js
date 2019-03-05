import React, { Component } from 'react';
import './css/App.css';
import 'typeface-roboto';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
