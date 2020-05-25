import React, { Component } from 'react';
import styles from '../../css/Portfolio.module.css';
import PropTypes from 'prop-types';

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
        this.props.toggleFn(this.props.id);
    }

    render() {
        const bgImage = this.props.bgImage ? process.env.PUBLIC_URL + '/images/' + this.props.bgImage : null;
        let bgImageStyle = {};
        if (bgImage) {
            bgImageStyle = {
                background: `url(${bgImage})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }
        }
        // let bgImageLoc = null,
        //     bgImage = null;
        // if (this.props.projectInfo) {
        //     bgImageLoc = process.env.PUBLIC_URL + '/images/' + this.props.projectInfo.background
        //     bgImage = bgImageLoc
        // }
        // let modalBg = {};
        // if (bgImage) {
        //     modalBg = {
        //         backgroundColor: `url(${bgImage})`,
        //         // backgroundRepeat: 'no-repeat',
        //         // backgroundSize: 'cover',
        //         // opacity: 0.5
        //     }
        // }
        return (
            <div className={`${styles.portfolioCardContainer} ${this.props.selected ? styles.selected : ''}`} onClick={this.toggleZoom.bind(this)}>
                <div className={styles.portfolioCardHead} style={bgImageStyle}>
                    <div className={styles.portfolioCardTitle}>{this.props.name}</div>
                    <div className={styles.portfolioCardDate}>{this.props.startDate} - {this.props.endDate}</div>
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
    background: PropTypes.string.isRequired,
    bgImage: PropTypes.string.isRequired
}
