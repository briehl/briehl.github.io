import React from 'react';
import styles from '../../css/Navbar.module.css';

/**
 * The left-side branding bit of the navbar. Should have my name, maybe a little icon,
 * something else professional, and flashy, yet subdued.
 *
 * Right now, just Digital Dissonance.
 */
export function Branding() {
    return (
        <div className={styles.navbarBranding}>
            Digital Dissonance
        </div>
    );
}

export function SocialLinks() {
    return (
        <div className={styles.socialLinks}>
            <a href="https://github.com/briehl"><span className="fab fa-2x fa-github"></span></a>
            <a href="https://www.linkedin.com/in/briehl/"><span className="fab fa-2x fa-linkedin"></span></a>
        </div>
    );
}