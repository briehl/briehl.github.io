import { FC } from 'react';
import classes from './Projects.module.scss';
import Portfolio from './Portfolio';

const Projects: FC = () => {
    return (
        <div id="projects" className={classes.projects_container}>
            <h1>Projects</h1>
            <Portfolio></Portfolio>
        </div>
    )
}

export default Projects;