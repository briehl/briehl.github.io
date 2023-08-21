import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import classes from './Contact.module.scss';


interface ContactInfo {
  icon: IconDefinition;
  link: string;
  socialName: string;
}

const contacts: ContactInfo[] = [{
  icon: faEnvelope,
  link: 'mailto:briehl+home@gmail.com',
  socialName: 'email'
}, {
  icon: faLinkedin,
  link: 'https://www.linkedin.com/in/briehl',
  socialName: 'linkedin'
}, {
  icon: faGithub,
  link: 'https://www.github.com/briehl',
  socialName: 'github'
}, {
  icon: faInstagram,
  link: 'https://www.instagram.com/bill_riehl',
  socialName: 'instagram'
}];


const Contact: FC = () => {
  return (
    <div id="contact" className={classes.contact}>
      <h1>Contact</h1>
      If so inclined, you can contact me through...
      <div className={classes.contact_container}>
        {contacts.map(contact => <SocialIcon {...contact} key={contact.socialName}/>)}
      </div>
    </div>
  )
}

/**
 * Makes a clickable icon with some text beneath it.
 * props:
 *  - icon - string, should be of form "fa fa-whatever"
 *  - link - string, address that clicking should send to
 *  - name - name that'll be beneath the icon (Github, Email, etc)
 */

const SocialIcon: FC<ContactInfo> = ({ link, icon, socialName}) => {
  return (
    <div className={classes.social_icon}>
      <a href={link}>
        <div><FontAwesomeIcon icon={icon} size="2x"></FontAwesomeIcon></div>
        <div>{socialName}</div>
      </a>
    </div>
  );
}

export default Contact;