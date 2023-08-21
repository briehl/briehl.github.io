import React, { FC, useState, useEffect } from 'react';
import classes from './Portfolio.module.scss';
import projects from '../assets/projects.json';

interface Project {
    id: string;
    name: string;
    startDate: string;
    endDate: string;
    url: string;
    doi ?: string;
    blurb: string;
    photoRoll: Array<string>;
    background: string;
    bgImage?: string;
}

interface PortfolioCardProps {
    project: Project;
    isSelected: boolean;
    toggleFn: Function;
}

const Portfolio: FC<React.PropsWithChildren> = ({children}) => {
    const [showModal, setShowModal] = useState('');
    const projectMap = new Map<string, PortfolioCardProps>();

    useEffect(() => {
        projects.forEach((p) => projectMap.set(p.id, {
            project: p,
            isSelected: p.id === showModal,
            toggleFn: toggleModal
        }));
    });

    const toggleModal = (projectId: string | null) => {
        if (!projectId) {
            projectId = '';
        }
        setShowModal(projectId);
    }

    // let projectCards = Array<PortfolioCard>

    // let projectCards = projects.map((project) =>
    //     <PortfolioCard {...projectMap.get(project.id)}
    //                     key={project.id}>
    //     </PortfolioCard>
    // );

// //         let projectCards = projects.map((project) =>
// //             <PortfolioCard {...project}
// //                            toggleFn={this.toggleModal.bind(this)}
// //                            key={project.id}
// //                            selected={project.id===this.state.showModal}>
// //             </PortfolioCard>
// //         )


    return (
        <div className={classes.portfolio}>
            {
                projects.map((project) =>
                    <PortfolioCard project={project}
                        toggleFn = {toggleModal}
                        key = {project.id}
                        isSelected={project.id === showModal}>
                    </PortfolioCard>
                )
            }
        </div>
    )
}

const PortfolioCard: FC<React.PropsWithChildren<PortfolioCardProps>> = (props) => {
    const [zoomed, setZoomed] = useState(false);

    const toggleZoom = () => {
        setZoomed(!zoomed);
        props.toggleFn(props.project.id);
    }

    const bgImage = props.project.bgImage ? process.env.PUBLIC_URL + '/images/' + props.project.bgImage : null;
    let bgImageStyle = {};
    if (bgImage) {
        bgImageStyle = {
            background: `url(${bgImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        };
    }

    return (
        <div className={`${classes.portfolio_card_container} ${props.isSelected ? classes.selected : ''}`} onClick={toggleZoom}>
            <div className={classes.portfolio_card_head} style={bgImageStyle}>
                <div className={classes.portfolio_card_title}>{props.project.name}</div>
                <div className={classes.portfolio_card_date}>{props.project.startDate} - {props.project.endDate}</div>
            </div>
            <div className={classes.portfolio_card_copy}>{props.project.blurb}</div>
        </div>
    );
}

export default Portfolio;

// export default class PortfolioCard extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             zoomed: false
//         }
//    }

//     toggleZoom() {
//         this.setState((state) => ({
//             zoomed: !state.zoomed
//         }))
//         this.props.toggleFn(this.props.id);
//     }

//     render() {
//         const bgImage = this.props.bgImage ? process.env.PUBLIC_URL + '/images/' + this.props.bgImage : null;
//         let bgImageStyle = {};
//         if (bgImage) {
//             bgImageStyle = {
//                 background: `url(${bgImage})`,
//                 backgroundRepeat: 'no-repeat',
//                 backgroundSize: 'cover'
//             }
//         }
//         // let bgImageLoc = null,
//         //     bgImage = null;
//         // if (this.props.projectInfo) {
//         //     bgImageLoc = process.env.PUBLIC_URL + '/images/' + this.props.projectInfo.background
//         //     bgImage = bgImageLoc
//         // }
//         // let modalBg = {};
//         // if (bgImage) {
//         //     modalBg = {
//         //         backgroundColor: `url(${bgImage})`,
//         //         // backgroundRepeat: 'no-repeat',
//         //         // backgroundSize: 'cover',
//         //         // opacity: 0.5
//         //     }
//         // }
//         return (
//             <div className={`${styles.portfolioCardContainer} ${this.props.selected ? styles.selected : ''}`} onClick={this.toggleZoom.bind(this)}>
//                 <div className={styles.portfolioCardHead} style={bgImageStyle}>
//                     <div className={styles.portfolioCardTitle}>{this.props.name}</div>
//                     <div className={styles.portfolioCardDate}>{this.props.startDate} - {this.props.endDate}</div>
//                 </div>
//                 <div className={styles.portfolioCardCopy}>{this.props.blurb}</div>
//             </div>
//         )
//     }
// }

// PortfolioCard.propTypes = {
//     id: PropTypes.string.isRequired,
//     name: PropTypes.string.isRequired,
//     startDate: PropTypes.string,
//     endDate: PropTypes.string,
//     url: PropTypes.string,
//     doi: PropTypes.string,
//     blurb: PropTypes.string.isRequired,
//     photoRoll: PropTypes.array,
//     background: PropTypes.string.isRequired,
//     bgImage: PropTypes.string.isRequired
// }

// export default Portfolio;

// // export default class Portfolio2 extends Component {
// //     constructor(props) {
// //         super(props)
// //         this.state = {
// //             showModal: ''
// //         }
// //         this.projectMap = {}
// //     }

// //     componentDidMount() {
// //         projects.forEach(project => this.projectMap[project.id] = project)
// //     }

// //     toggleModal = (projectId) => {
// //         console.log("Doing projectId: " + projectId)
// //         if (!projectId) {
// //             projectId = '';
// //         }
// //         this.setState((state) => ({
// //             showModal: projectId
// //         }));
// //     }

// //     render() {
// //         console.log(this.state);
// //         let projectCards = projects.map((project) =>
// //             <PortfolioCard {...project}
// //                            toggleFn={this.toggleModal.bind(this)}
// //                            key={project.id}
// //                            selected={project.id===this.state.showModal}>
// //             </PortfolioCard>
// //         )
// //         return (
// //             <div>
// //                 <div className={styles.portfolio}>{projectCards}</div>
// //                 { this.state.showModal ?
// //                     <CardModal projectId={this.state.showModal}
// //                     projectInfo={this.state.showModal ? this.projectMap[this.state.showModal] : null}
// //                     onClose={this.toggleModal}/> :
// //                     ''
// //                 }
// //             </div>
// //         )
// //     }
// // }
