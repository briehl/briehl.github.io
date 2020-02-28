import React, { Component } from 'react';
import styles from '../../css/Portfolio.module.css';

export default class CardModal extends Component {
    render() {
        console.log(this.props);
        console.log(this.state);
        if (!this.props.projectId) {
            return null;
        }


        return (
            <div className={styles.modalBackdrop}>
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
