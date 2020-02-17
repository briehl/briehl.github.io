import React, { Component } from 'react';
import './css/App.css';
import 'typeface-roboto';
import NavBar from './components/navbar/NavBar';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';


const RoutedNavBar = withRouter(props => <NavBar {...props}/>);

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <RoutedNavBar />
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
