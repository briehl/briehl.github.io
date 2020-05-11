import React, { Component } from 'react';
import Portfolio from './portfolio/Portfolio';

export default class Projects extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div id="projects" className="page-section">
                <h1>Projects</h1>
                <Portfolio></Portfolio>
            </div>
        )
    }
}