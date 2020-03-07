import React, { Component } from 'react';
import PortfolioCard from './PortfolioCard';
import CardModal from './CardModal';
import projects from './projects.json';
import styles from '../../css/Portfolio.module.css';

export default class Portfolio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: ''
        }
        this.projectMap = {}
    }

    componentDidMount() {
        projects.forEach(project => this.projectMap[project.id] = project)
    }

    toggleModal = (projectId) => {
        console.log("Doing projectId: " + projectId)
        if (!projectId) {
            projectId = '';
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
                ${ this.state.showModal ?
                    <CardModal projectId={this.state.showModal}
                    projectInfo={this.state.showModal ? this.projectMap[this.state.showModal] : null}
                    onClose={this.toggleModal}/> :
                    ''
                }
            </div>
        )
    }
}
