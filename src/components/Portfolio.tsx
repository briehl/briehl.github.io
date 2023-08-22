import { FC, useState, useEffect, PropsWithChildren } from 'react';
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

interface CardModalProps {
    projectInfo?: Project;
    onClose: Function;
}

const Portfolio: FC = () => {
    console.log('here.');
    const [showModal, setShowModal] = useState('');
    const projectMap = new Map<string, Project>();
    projects.forEach((p) => projectMap.set(p.id, p));

    const toggleModal = (projectId: string | null) => {
        if (!projectId) {
            projectId = '';
        }
        setShowModal(projectId);
    }

    return (
        <>
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
            {
                showModal ?
                <CardModal
                    projectInfo={projectMap.get(showModal)}
                    onClose={toggleModal}>
                </CardModal> :
                ''
            }
        </>
    )
}

const PortfolioCard: FC<PropsWithChildren<PortfolioCardProps>> = (props) => {
    const [zoomed, setZoomed] = useState(false);

    const toggleZoom = () => {
        setZoomed(!zoomed);
        props.toggleFn(props.project.id);
    }

    const bgImage = props.project.bgImage ? process.env.PUBLIC_URL + '/assets/' + props.project.bgImage : null;
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

const CardModal: FC<PropsWithChildren<CardModalProps>> = (props) => {
    const [isMounted, setIsMounted] = useState(false);

    console.log(props);

    useEffect(() => {
        setTimeout(() => {
            setIsMounted(true);
        }, 0);
    });

    if (!props.projectInfo) {
        return (<></>);
    }

    const visibleClass = isMounted ? classes.visible : '';
    return (
        <div className={`${classes.modal_backdrop} ${visibleClass}`} style={{backgroundColor: props.projectInfo.background}}>
            <div className={classes.modal_body}>
                {props.children}

                <h2>Hi! I'm the card modal for {props.projectInfo.id}!</h2>
                <div className={classes.modal_footer}>
                    <button onClick={() => props.onClose(false)}>
                        Close
                    </button>
                </div>
            </div>
        </div>
    )
}

// export default class CardModal2 extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             didMount: false
//         };
//     }

//     componentDidMount() {
//         setTimeout(() => {
//             this.setState((state) => ({ didMount: true }))
//         }, 0)
//     }

//     render() {
//         let modalBg = {
//         }
//         if (this.props.projectInfo) {
//             modalBg.backgroundColor = this.props.projectInfo.background;
//         }

//         const visibleClass = this.state.didMount ? styles.visible : '';

//         return (
//             <div className={`${styles.modalBackdrop} ${visibleClass}`} style={modalBg}>
//                 <div className={styles.modalBody}>
//                     {this.props.children}

//                     <h2>I'm the card modal for {this.props.projectId}!</h2>
//                     <div className="footer">
//                         <button onClick={() => { this.props.onClose(false) } }>
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }


export default Portfolio;



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
