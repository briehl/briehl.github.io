import React, { Component } from 'react';
import PortfolioCard from './PortfolioCard';
import projects from './projects.json';
import styles from '../../css/Portfolio.module.css';
import Projects from '../Projects';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        console.log(projects);
    }

    render() {
        let projectCards = projects.map((project) => <PortfolioCard {...project} key={project.id}></PortfolioCard>)
        return (
            <div className={styles.portfolio}>{projectCards}</div>
        )
    }
}