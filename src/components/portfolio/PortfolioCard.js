import React, { Component } from 'react';
import styles from '../../css/Portfolio.module.css';

export default class PortfolioCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zoomed: false
        }
   }

    toggleZoom() {
        this.setState((state) => ({
            zoomed: !state.zoomed
        }))
    }

    render() {
        return (
            <div className={styles.portfolioCardContainer} onClick={this.toggleZoom.bind(this)}>
                <div>{this.props.id}</div>
            </div>
        )
    }
}