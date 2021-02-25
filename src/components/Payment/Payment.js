import React, { Component } from 'react'
import Button from '../UI/Button/Button'
import styles from './Payment.module.css'

class Payment extends Component {
    paymentHandler = () => {
        this.props.history.push('/orders');
    }
    render() {
        const { orderNo,
                payment,
                paymentType
            } = this.props.location.state;
        return (
            <div className={styles.paymentDiv}>
                <ul>
                    <li>Order Number: {orderNo}</li>
                    <li>Total Payment: {payment}</li>
                    <li>{paymentType}</li>
                </ul>
                <Button btnType="checkout" clicked={this.paymentHandler}>
                    Pay Your Order
                </Button>
            </div>
        )
    }
}

export default Payment;