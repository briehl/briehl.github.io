import React, { Component } from 'react';
import styles from '../../css/Portfolio.module.css';
import PropTypes from 'prop-types';

export default class PortfolioCard extends Component {
    constructor(props) {
        super(props);
        console.log('setting init state for ' + this.props.id);
        this.state = {
            zoomed: false
        }
   }

    toggleZoom() {
        this.setState((state) => ({
            zoomed: !state.zoomed
        }))
        this.props.toggleFn(this.props.id);
    }

    render() {
        return (
            <div className={styles.portfolioCardContainer} onClick={this.toggleZoom.bind(this)}>
                <div className={styles.portfolioCardHead}>
                    <div className={styles.portfolioCardTitle}>{this.props.name}</div>
                </div>
                <div className={styles.portfolioCardCopy}>{this.props.blurb}</div>
            </div>
        )
    }
}

PortfolioCard.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    url: PropTypes.string,
    doi: PropTypes.string,
    blurb: PropTypes.string.isRequired,
    photoRoll: PropTypes.array,
    background: PropTypes.string.isRequired
}