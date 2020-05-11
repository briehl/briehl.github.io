import React, { Component } from 'react';
import styles from '../css/Social.module.css';

const contacts = [{
  icon: 'fa fa-envelope',
  link: 'mailto:briehl+home@gmail.com',
  name: 'email'
}, {
  icon: 'fab fa-linkedin',
  link: 'https://www.linkedin.com/in/briehl',
  name: 'linkedin'
}, {
  icon: 'fab fa-github',
  link: 'https://www.github.com/briehl',
  name: 'github'
}, {
  icon: 'fab fa-twitter',
  link: 'https://www.twitter.com/real_riehl',
  name: 'twitter'
}];


export default class Contact extends Component {
  render() {
    return (
      <div id="contact" className='page-section'>
        <h1>Contact</h1>
        If so inclined, you can contact me through...
        <div className={styles.contactContainer}>
          {contacts.map(contact => <SocialIcon {...contact}/>)}
        </div>
      </div>
    )
  }
}

/**
 * Makes a clickable icon with some text beneath it.
 * props:
 *  - icon - string, should be of form "fa fa-whatever"
 *  - link - string, address that clicking should send to
 *  - name - name that'll be beneath the icon (Github, Email, etc)
 */
class SocialIcon extends Component {
  render() {
    return (
      <div className={styles.socialIcon}>
        <a href={this.props.link}>
          <div><span className={`fa-2x ${this.props.icon}`}></span></div>
          <div>{this.props.name}</div>
        </a>
      </div>
    )
  }
}