import React, { Component } from 'react'
import CartItem from './Content/CartItem'
import Util from '../../util/util'
import CartService from '../../service/CartService'

import styles from './Cart.module.css'

const _util = new Util();
const _cart = new CartService();
class Cart extends Component {
    state = {
        cartList: []
    }
    componentDidMount() {
        // Check whether the user has logged in
        // if(!this.checkUserStatus()) return;

        this.getCartList();
    }
    // checkUserStatus() {
    //     if(!_util.getStorage('userInfo')) {
    //         this.props.history.push('/login');
    //         return false;
    //     }
    //     return true;
    // }
    getCartList() {
        _cart.getCartList().then(res => {
            console.log('cart.js/',res)
            this.setState({
                cartList: res.data.data.cartProductVoList
            })
        })
    }
    render() {
        const CartList = this.state.cartList.map(item => 
            <CartItem product={item} />
        )
        return (
            <div className={styles.cartDiv}>
                <h1 className={styles.title}>Shopping Cart</h1>
                <span className={styles.priceHeader}>Price</span>
                <div className={styles.cartListDiv}>
                    {CartList}
                </div>
            </div>
        )
    }
}

export default Cart;