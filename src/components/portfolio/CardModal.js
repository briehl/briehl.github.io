import React, { Component } from 'react';
import styles from '../../css/Portfolio.module.css';
import PropTypes from 'prop-types';

export default class CardModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            didMount: false
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState((state) => ({ didMount: true }))
        }, 0)
    }

    render() {
        let modalBg = {
        }
        if (this.props.projectInfo) {
            modalBg.backgroundColor = this.props.projectInfo.background;
        }

        const visibleClass = this.state.didMount ? styles.visible : '';

        return (
            <div className={`${styles.modalBackdrop} ${visibleClass}`} style={modalBg}>
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