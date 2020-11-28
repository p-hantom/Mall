import React from 'react'
import DropDown from '../../UI/DropDownButton/DropDownButton'

import styles from './CartItem.module.css'

const cartItem = (props) => {
    const {productName, 
        productPrice, 
        quantity, 
        productStatus, 
        productStock, 
        productTotalPrice,
        productChecked,
        productId} = props.product;
    return (
        <div className={styles.itemDiv}>
            <div className={styles.leftCol}>
                <div className={styles.checkboxDiv}>
                    <input type="checkbox" 
                        checked={productChecked} 
                        onChange={props.onChangeCheck} />
                </div>
                <ul>
                    <li>
                        <span className={styles.name} onClick={() => props.onClickPrdName(productId)}>{productName}</span>
                    </li>
                    <li><span>{quantity}</span></li>
                    <li>
                        <div className={styles.dropdownDiv}><DropDown onSelectVal={props.onSelectQty}/></div>
                        <span className={styles.delete} onClick={() => props.onDeletePrd(productId)}>delete</span>
                    </li>
                </ul>
                
            </div>
            <div className={styles.rightCol}>
                <span className={styles.unitPrice}>￥{productPrice}</span>
                <span className={styles.totalPrice}>￥{productTotalPrice}</span>
            </div>
        </div>
    )
}

export default cartItem;