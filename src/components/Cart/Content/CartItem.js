import React from 'react'
import styles from './CartItem.module.css'

const cartItem = (props) => {
    const {productName, productPrice, quantity, productStatus, productStock, productChecked} = props.product
    return (
        <div>
            <div className={styles.leftCol}>
                <div className={styles.checkboxDiv}>
                    <input type="checkbox" checked={productChecked} />
                </div>
                <ul>
                    <li>
                        <span className={styles.name}>{productName}</span>
                    </li>
                    <li><span>{quantity}</span></li>
                    
                </ul>
                
            </div>
            <div className={styles.rightCol}>
                <span className={styles.price}>{productPrice}元</span>
            </div>
        </div>
    )
}

export default cartItem;