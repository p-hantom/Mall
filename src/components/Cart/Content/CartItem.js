import React, { Component } from 'react'
import ProductNumAdder from '../../UI/ProductNumAdder/ProductNumAdder';

import styles from './CartItem.module.css'

class CartItem extends Component {
    render() {
        const {productName, 
            productPrice, 
            quantity, 
            // productStatus, 
            productStock, 
            productTotalPrice,
            productChecked,
            productId,
            productSubtitle,
            productMainImage} = this.props.product;
        return (
            <div className={styles.itemDiv}>
                <div className={styles.leftCol}>
                    <div className={styles.checkboxDiv}>
                        <input type="checkbox" 
                            checked={productChecked} 
                            onChange={this.props.onChangeCheck} />
                    </div>
                    <div className={styles.imgCon}>
                        <img alt="" className={styles.img} src={this.props.imageHost+productMainImage} />
                    </div>
                    <ul>
                        <li>
                            <span className={styles.name} onClick={() => this.props.onClickPrdName(productId)}>{productName}</span>
                        </li>
                        <li>
                            <span>{productSubtitle}</span>
                        </li>
                        {
                            productStock > 0 ? 
                            <div className={styles.inStock}>In Stock: 
                                <span className={styles.inStock}>{' '+productStock+' '}</span>
                            </div> : 
                            <div className={styles.unavailable}>Unavailable</div>
                        }
                        <li>
                            <div className={styles.dropdownDiv}>
                                <ProductNumAdder 
                                    value={quantity} 
                                    stock={productStock}
                                    updateNumber={this.props.updatePrdNumHandler}/>
                            </div>
                            <span className={styles.delete} onClick={() => this.props.onDeletePrd(productId)}>delete</span>
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
}

export default CartItem;