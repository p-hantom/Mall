import React, {Component} from 'react'
import { Toast } from 'react-bootstrap';
import styles from './Toast.module.css'

class MyToast extends Component {
    render() {
        const { show, delay, message, onClose, autohide } = this.props;
        return (
            <div className={styles}>
                <Toast show={show} delay={delay} onClose={onClose} autohide={autohide}>
                    <Toast.Header>
                    {/* <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" /> */}
                    <strong className="mr-auto">New Message</strong>
                    <small>just now</small>
                    </Toast.Header>
                    <Toast.Body>{message}</Toast.Body>
                </Toast>
            </div>
            
        )
    }
}

export default MyToast;