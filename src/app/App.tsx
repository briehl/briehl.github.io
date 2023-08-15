import { BrowserRouter as Router } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';
import Home from '../components/Home';
import Resume from '../components/Resume';
import Contact from '../components/Contact';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Home />
        <Resume />
        <Contact />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Router>
  );
}