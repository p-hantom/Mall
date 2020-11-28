import React, { Component } from 'react'
import CartItem from './Content/CartItem'
import Button from '../UI/Button/Button'
import EmptyCart from './EmptyCart'
import Util from '../../util/util'
import CartService from '../../service/CartService'
import Product from '../../service/ProductService'

import styles from './Cart.module.css'
const _product = new Product();
const _util = new Util();
const _cart = new CartService();
class Cart extends Component {
    state = {
        cartList: [],
        total: 0
    }
    componentDidMount() {
        this.getCartList();
    }
    componentDidUpdate(prevProps) {
        if(this.props == prevProps) return;
        this.getCartList();
    }
    getCartList() {
        // todo: 或许可以不用每次都调接口
        _cart.getCartList().then(res => {
            console.log('cart.js/cartlist: ',res)
            this.setState({
                cartList: res.data.data.cartProductVoList,
                total: res.data.data.cartTotalPrice
            })
        })
    }
    // On clicking product name, redirect to product detail page
    clickPrdNameHandler = (id) => {
        console.log('click prd id:', id)
        const params = {
            productId: id
        }
        _product.getProductDetail(params).then(res => {
            console.log(res.data.data);
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
    render() {
        const CartList = this.state.cartList.map(item => 
            <CartItem 
                product={item} 
                onDeletePrd={this.deletePrdHandler}
                onChangeCheck={() => this.changeCheckHandler(item.productId, item.productChecked)}
                onClickPrdName={this.clickPrdNameHandler}
                onSelectQty={(qty) => this.updateQtyHandler(item.productId, qty)}/>
        )

        const View = this.state.cartList.length===0 ?
            <EmptyCart />
            : (
                <div>
                    <div className={styles.cartDiv}>
                        <h1 className={styles.title}>Shopping Cart</h1>
                        <div className={styles.priceHeader}>
                            <span className={styles.unitPrice}>Unit Price</span>
                            <span className={styles.totalPrice}>Total Price</span>
                        </div>
                        
                        <div className={styles.cartListDiv}>
                            {CartList}
                        </div>
                    </div>
                    <div className={styles.totalDiv}>
                        <span>Subtotal:</span>
                        <span>{' '+this.state.total}元</span>
                    </div>
                    <div>
                        <Button btnType="checkout">Checkout</Button>
                    </div>
                </div>
            )

        return View;
    }
}

export default Cart;