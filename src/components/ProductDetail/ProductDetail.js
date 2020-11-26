import React from 'react'
import ProductPic from './ProductDetailContent/ProductPic'
import ProductInfo from './ProductDetailContent/ProductInfo'
import Aux from '../../hoc/Auxiliary'

import styles from './ProductDetail.module.css'

const productDetail = (props) => {
    const data = props.location.state.detailData;
    console.log('detail data', data)
    return (
        <div className={styles.main}>
            {/* todo : put pic all in UI/pic!!!  */}
            <ProductPic /> 
            <ProductInfo data={data} />
        </div>
        
    )
}

export default productDetail;