import { FC, useState, useEffect, PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classes from './Portfolio.module.scss';
import projects from '../assets/projects.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactMarkdown from 'react-markdown';

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
    projectInfo: Project;
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

    const modalProject = projectMap.get(showModal);

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
                modalProject ?
                <CardModal
                    projectInfo={modalProject}
                    onClose={toggleModal}>
                        <PortfolioCardDetail {...modalProject}></PortfolioCardDetail>
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

    return createPortal(
        <div className={`${classes.modal_backdrop} ${visibleClass}`}
            style={{backgroundColor: props.projectInfo.background}} onClick={() => props.onClose(false)}>
            <div onClick={e => e.stopPropagation()} className={classes.modal_outer}>
                <div className={classes.modal_header}>
                    {props.projectInfo.name}
                    <div style={{marginLeft: 'auto'}}>
                        <span onClick={() => props.onClose(false)}>
                            <FontAwesomeIcon icon={faXmark} className={classes.modal_close_x}></FontAwesomeIcon>
                        </span>
                    </div>
                </div>
                <div className={classes.modal_body}>
                    {props.children}
                </div>
            </div>
        </div>,
        document.body
    );
}

const PortfolioCardDetail: FC<Project> = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [source, setSource] = useState('');
    const [loadError, setLoadError] = useState('');

    useEffect(() => {
        fetch(`${process.env.PUBLIC_URL}/assets/${props.id}/text.md`)
            .then(result => result.text())
            .then(source => setSource(source))
            .catch(error => setLoadError(error))
            .finally(() => setIsLoading(false));
    }, [props]);

    const loadingStr = isLoading ? 'loading.' : '';
    let content = <></>;
    if (!isLoading && source) {
        content = <ReactMarkdown children={source}></ReactMarkdown>;
    }

    return (
        <div>
            {loadingStr}
            {content}
            {loadError}
        </div>
    )
}


export default Portfolio;