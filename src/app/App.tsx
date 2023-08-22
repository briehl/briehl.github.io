import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../components/Home';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import Navbar, {defaultNavbarProps} from '../components/Navbar';

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar { ...defaultNavbarProps }/>
      <Home />
      <Projects />
      <Resume />
      <Contact />
    </Router>
  );
}