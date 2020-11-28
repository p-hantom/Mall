import React, {Component} from 'react'
import ProductPic from './ProductDetailContent/ProductPic'
import ProductInfo from './ProductDetailContent/ProductInfo'
import DropDown from '../UI/DropDownButton/DropDownButton'
import Button from '../UI/Button/Button'
import Aux from '../../hoc/Auxiliary'
import CartService from '../../service/CartService'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import styles from './ProductDetail.module.css'

const _cart = new CartService();

class ProductDetail extends Component {
    state = {
        qtyNum: 1
    }
    selectQtyHandler = (qty) => {
        console.log('qty', qty)
        this.setState({qtyNum: qty});
    }
    addToCartHandler = () => {
        console.log('add')
        _cart.addToCart({
            productId: this.props.location.state.id,
            count: this.state.qtyNum
        }).then(res => {console.log(res)})
    }
    render() {
        const data = this.props.location.state.detailData;
        console.log('detail data', data)
        return (
            <div className={styles.main}>
                {/* todo : put pic all in UI/pic!!!  */}
                <ProductPic /> 
                <ProductInfo data={data} />
                <div>
                    <DropDown onSelectVal={this.selectQtyHandler}/>
                    <Button btnType="addToCart" clicked={this.addToCartHandler}>
                        <FontAwesomeIcon icon={faShoppingCart} className={styles.faShoppingCart} />
                        {' '}Add to Cart
                    </Button>
                </div>
            </div>
            
        )
    }
}

export default ProductDetail;