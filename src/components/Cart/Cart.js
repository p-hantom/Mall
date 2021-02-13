import React, { Component } from 'react'
import CartItem from './Content/CartItem'
import Button from '../UI/Button/Button'
import EmptyCart from './EmptyCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Product from '../../service/ProductService'
import { connect } from 'react-redux' 
import { updateCart, deleteFromCart, selectProduct, unselectProduct, getCartList } from '../../actions'

import styles from './Cart.module.css'
const _product = new Product();
class Cart extends Component {
    componentDidMount() {
        this.props.getCartList();
    }

    // On clicking product name, redirect to product detail page
    clickPrdNameHandler = (id) => {
        const params = {
            productId: id
        }
        _product.getProductDetail(params).then(res => {
            this.props.history.push({
                pathname: '/detail',
                search: `?productId=${id}`,
                state: { 
                    detailData: res ? res.data.data : null,
                    id: id 
                }
            })
        })
    }
    deletePrdHandler = (id) => {
        const params = {
            productIds: id
        }
        this.props.deleteFromCart(params);
    }
    updateQtyHandler = (id, qty) => {
        const params = {
            productId: id,
            count: qty
        }
        this.props.updateCart(params);
    }
    changeCheckHandler = (id, checkState) => {
        const params = {
            productId: id
        }
        if(checkState === 1) {
            // Uncheck the product
            this.props.unselectProduct(params);
        }
        else if(checkState === 0) {
            // Check the product
            this.props.selectProduct(params);
        }
    }
    checkoutHandler = () => {
        this.props.history.push({
            pathname: '/confirmOrder'
        })
    }
    render() {
        const CartList = this.props.cartList.map(item => 
            <CartItem 
                key={item.id}
                product={item} 
                imageHost={this.props.imageHost}
                onDeletePrd={this.deletePrdHandler}
                onChangeCheck={() => this.changeCheckHandler(item.productId, item.productChecked)}
                onClickPrdName={this.clickPrdNameHandler}
                updatePrdNumHandler={(qty) => {return this.updateQtyHandler(item.productId, qty)}}/>
        )

        const View = this.props.cartList.length===0 ?
            <EmptyCart />
            : (
                <div className={styles.cartDiv}>
                    <div>
                        <h1 className={styles.title}>Shopping Cart</h1>
                        <div className={styles.priceHeader}>
                            <span className={styles.unitPrice}>Unit Price</span>
                            <span className={styles.totalPrice}>Total Price</span>
                        </div>
                        
                        <div className={styles.cartListDiv}>
                            {CartList}
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <div className={styles.totalDiv}>
                            <span>Subtotal:</span>
                            <span className={styles.subtotalNum}>{' '+this.props.totalPrice}元</span>
                        </div>
                        <div>
                            <Button btnType="checkout" clicked={this.checkoutHandler}>
                                <span className={styles.faCart}><FontAwesomeIcon icon={faShoppingCart} /></span>
                                Checkout</Button>
                        </div>
                    </div>
                    
                </div>
            )

        return View;
    }
}

const mapStateToProps = (state) => {
    return {
        cartList: state.cart.cartList,
        totalPrice: state.cart.totalPrice,
        imageHost: state.cart.imageHost
    }
}

export default connect(mapStateToProps, { 
    updateCart, deleteFromCart, selectProduct, unselectProduct, getCartList
})(Cart);