import React, { Component } from 'react';
import './css/App.css';
import 'typeface-roboto';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Resume from './components/Resume';

const RoutedNavBar = withRouter(props => <NavBar {...props}/>);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <RoutedNavBar />
          <Route exact path='/' component={Home} />
          <Route path='/projects' component={Projects} />
          <Route path='/resume' component={Resume} />
          <Route path='/contact' component={Contact} />
        </div>
      </Router>
    );
  }
}

export default App;
