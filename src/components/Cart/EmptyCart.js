import React from 'react'
import styles from './EmptyCart.module.css'

const emptyCart = () => (
    <div className={styles.emptyCartDiv}>
        <h1 className={styles.title}>Your cart is empty.</h1>
        <span>Continue shopping on our 
            <span className={styles.homeLink}>{' '}homepage</span>.</span>
    </div>
)

export default emptyCart;