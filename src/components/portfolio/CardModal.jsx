import React, { Component } from 'react';
import { createPortal } from 'react-dom';
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
        let modalBg = {}
        if (this.props.projectInfo) {
            modalBg.backgroundColor = this.props.projectInfo.background;
        }

        const visibleClass = this.state.didMount ? styles.visible : '';

        return createPortal(
            <div className={`${styles.modalBackdrop} ${visibleClass}`} style={modalBg} onClick={() => this.props.onClose(false)}>
                <div onClick={e => e.stopPropagation()} className={styles.modalOuter}>
                    <div className={styles.modalHeader}>
                        {this.props.projectInfo.name}
                        <div style={{marginLeft: 'auto'}}>
                            <span className={`fa fa-times ${styles.modalCloseX}`}
                                onClick={() => this.props.onClose(false)}></span>
                        </div>
                    </div>
                    <div className={styles.modalBody}>
                        {this.props.children}
                    </div>
                </div>
            </div>,
            document.body
        );
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
        background: PropTypes.string.isRequired,
        bgImage: PropTypes.string,
    })
}