import React, { Component } from 'react';
import PortfolioCard from './PortfolioCard';
import CardModal from './CardModal';
import projects from './projects.json';
import styles from '../../css/Portfolio.module.css';
import PortfolioCardDetail from './PortfolioCardDetail';

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
        if (!projectId) {
            projectId = '';
        }
        this.setState({
            showModal: projectId
        });
    }

    render() {
        const markdown = `
# Header 1
## Header 2

_ italic _

** bold **

<b> bold Html </b>`;
        let projectCards = projects.map((project) =>
            <PortfolioCard {...project}
                           toggleFn={this.toggleModal.bind(this)}
                           key={project.id}
                           selected={project.id===this.state.showModal}>
            </PortfolioCard>
        )
        let cardModal = null;
        if (this.state.showModal) {
            let projectInfo = this.state.showModal ? this.projectMap[this.state.showModal] : null;
            cardModal = (
                <CardModal projectId={this.state.showModal}
                projectInfo={projectInfo}
                onClose={this.toggleModal}>
                    <PortfolioCardDetail projectInfo={projectInfo} />
                </CardModal>
            )
        }
        return (
            <div>
                <div className={styles.portfolio}>{projectCards}</div>
                { cardModal }
            </div>
        )
    }
}
