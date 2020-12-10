import React from 'react'

import styles from './ProductInfo.module.css'

const productInfo = ({data}) => {
    const {name, price, subtitle, stock} = data;
    return (
        <div className={styles.infoDiv}>
            <div className={styles.name}>{name}</div>
            <div>
                <div>{subtitle}</div>
                <div className={styles.price}>Price: 
                    <span className={styles.priceSpan}>{' '+price+' '}</span>元
                </div>
                {
                    stock>0 ? 
                    <div className={styles.inStock}>In Stock: 
                        <span className={styles.inStock}>{' '+stock+' '}</span>
                    </div> : 
                    <div className={styles.unavailable}>Unavailable</div>
                }
                
            </div>
            
        </div>
    )
}
  
export default productInfo;