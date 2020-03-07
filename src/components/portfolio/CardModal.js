import React, { Component } from 'react';
import styles from '../../css/Portfolio.module.css';
import PropTypes from 'prop-types';

export default class CardModal extends Component {
    render() {
        if (!this.props.projectId) {
            return null;
        }

        const modalBg = this.props.projectInfo ? { backgroundColor: this.props.projectInfo.background } : {};

        return (
            <div className={styles.modalBackdrop} style={modalBg}>
                <div className={styles.modalBody}>
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

CardModal.propTypes = {
    projectId: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
    projectInfo: PropTypes.exact({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        startDate: PropTypes.string,
        endDate: PropTypes.string,
        url: PropTypes.string,
        doi: PropTypes.string,
        blurb: PropTypes.string.isRequired,
        photoRoll: PropTypes.array,
        background: PropTypes.string.isRequired
    })
}