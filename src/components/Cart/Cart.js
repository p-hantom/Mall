import React, { Component } from 'react'
import CartItem from './Content/CartItem'
import Button from '../UI/Button/Button'
import EmptyCart from './EmptyCart'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import CartService from '../../service/CartService'
import Product from '../../service/ProductService'

import styles from './Cart.module.css'
const _product = new Product();
const _cart = new CartService();
class Cart extends Component {
    state = {
        cartList: [],
        total: 0,
        imageHost: ''
    }
    componentDidMount() {
        this.getCartList();
    }
    componentDidUpdate(prevProps) {
        if(this.props === prevProps) return;
        this.getCartList();
    }
    getCartList() {
        // todo: 或许可以不用每次都调接口
        _cart.getCartList().then(res => {
            console.log('cart.js/cartlist: ',res)
            this.setState({
                cartList: res.data.data.cartProductVoList,
                total: res.data.data.cartTotalPrice,
                imageHost: res.data.data.imageHost
            })
        })
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
        _cart.deleteProduct(params).then(res => {
            this.getCartList();
        })
    }
    updateQtyHandler = (id, qty) => {
        _cart.updateProduct({
            productId: id,
            count: qty
        }).then(res => {this.getCartList();})
    }
    changeCheckHandler = (id, checkState) => {
        const params = {
            productId: id
        }
        if(checkState === 1) {
            // Uncheck the product
            _cart.unselectProduct(params).then(res => {
                this.getCartList();
            })
        }
        else if(checkState === 0) {
            // Check the product
            _cart.selectProduct(params).then(res => {
                this.getCartList();
            })
        }
    }
    checkoutHandler = () => {
        this.props.history.push({
            pathname: '/confirmOrder'
        })
    }
    render() {
        console.log(this.state.imageHost)
        const CartList = this.state.cartList.map((item,index) => 
            <CartItem 
                key={index}
                product={item} 
                imageHost={this.state.imageHost}
                onDeletePrd={this.deletePrdHandler}
                onChangeCheck={() => this.changeCheckHandler(item.productId, item.productChecked)}
                onClickPrdName={this.clickPrdNameHandler}
                updatePrdNumHandler={(qty) => {return this.updateQtyHandler(item.productId, qty)}}/>
        )

        const View = this.state.cartList.length===0 ?
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
                            <span className={styles.subtotalNum}>{' '+this.state.total}元</span>
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

export default Cart;