import React from 'react';
import styles from '../../css/Navbar.module.css';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export function NavTabs(props) {
    return (
        <div className={styles.navbarTabList}>
            {props.children}
        </div>
    )
}

export function Tab(props) {
    let tabButton = <div className={styles.navbarTab}>{props.label}</div>
    if (props.selected) {
        tabButton = <div className={styles.selected}>{tabButton}</div>
    }
    else {
        tabButton = <Link to={props.target}>{tabButton}</Link>
    }

    return tabButton;
}