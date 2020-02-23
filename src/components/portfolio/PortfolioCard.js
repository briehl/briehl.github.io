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
        this.props.toggleFn(this.props.id);
    }

    render() {
        return (
            <div className={styles.portfolioCardContainer} onClick={this.toggleZoom.bind(this)}>
                <div>{this.props.id}</div>
            </div>
        )
    }
}

export class CardModal extends Component {
    render() {
        console.log(this.props);
        console.log(this.state);
        if (!this.props.projectId) {
            return null;
        }

        const backdropStyle = {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0,0,0,0.2)',
            padding: 50
        };

        const modalStyle = {
            backgroundColor: '#fff',
            borderRadius: 5,
            maxWidth: 500,
            minHeight: 300,
            margin: '0 auto',
            padding: 30
        };

        return (
            <div className="backdrop" style={backdropStyle}>
                <div className="modal" style={modalStyle}>
                    {this.props.children}

                    <h2>I'm the card modal for {this.props.projectId}!</h2>
                    <div className="footer">
                        <button onClick={() => { this.props.onClose(false) } }>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}
