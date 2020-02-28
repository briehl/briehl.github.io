import React from 'react';
import styles from '../../css/Navbar.module.css';
import PropTypes from 'prop-types';
import { NavTabs, Tab } from './NavTabs';
import { Branding, SocialLinks } from './Branding';

const targets = {
  home: '/',
  projects: '/projects',
  resume: '/resume',
  contact: '/contact'
}

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opacity: 0
    }
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll(e) {
    const maxScroll = 150
    let scrollTop = window.scrollY,
        itemTranslate = Math.min(scrollTop/maxScroll, 0.8)

    this.setState((state) => ({ opacity: itemTranslate }))
  }

  render() {
    const location = this.props.location.pathname;
    return (
      <div className={styles.navbarContainer} style={{ backgroundColor: `rgba(0,0,0, ${this.state.opacity})` }}>
        <Branding />
        <div style={{marginLeft: "auto"}}>
          <NavTabs>
            <Tab label="Home" target="/" selected={location===targets.home} />
            <Tab label="Projects" target="/projects" selected={location===targets.projects} />
            <Tab label="Resume" target="/resume" selected={location===targets.resume} />
            <Tab label="Contact" target="/contact" selected={location===targets.contact} />
            <SocialLinks />
          </NavTabs>
        </div>
      </div>
    )
  }
}

NavBar.propTypes = {
  location: PropTypes.object
}