import React, { Component } from 'react';
import PortfolioCard, { CardModal } from './PortfolioCard';
import projects from './projects.json';
import styles from '../../css/Portfolio.module.css';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);
        console.log(projects);
        this.state = {
            showModal: false
        };
    }

    toggleModal = (projectId) => {
        if (!projectId) {
            projectId = false;
        }
        this.setState((state) => ({
            showModal: projectId
        }));
    }

    render() {
        console.log(this.state);
        let projectCards = projects.map((project) =>
            <PortfolioCard {...project} toggleFn={this.toggleModal.bind(this)} key={project.id}></PortfolioCard>)
        return (
            <div>
                <div className={styles.portfolio}>{projectCards}</div>
                <CardModal projectId={this.state.showModal}
                    projectInfo={this.state.showModal ? projects[this.state.projectId] : null}
                    onClose={this.toggleModal}/>
            </div>
        )
    }
}
