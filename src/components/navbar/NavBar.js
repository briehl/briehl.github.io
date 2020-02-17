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

export default function NavBar(props) {
  const location = props.location.pathname;
  return (
    <div className={styles.navbarContainer}>
      <Branding />
      <div style={{marginLeft: "auto"}}>
        <div style={{display: "flex"}}>
          <NavTabs>
            <Tab label="Home" target="/" selected={location===targets.home} />
            <Tab label="Projects" target="/projects" selected={location===targets.projects} />
            <Tab label="Resume" target="/resume" selected={location===targets.resume} />
            <Tab label="Contact" target="/contact" selected={location===targets.contact} />
            <SocialLinks />
          </NavTabs>
        </div>
      </div>
    </div>
  )
}

