import React, {Component} from 'react'
import Button from '../UI/Button/Button'
import Table from 'react-bootstrap/Table'
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import User from '../../service/UserService'
import Order from '../../service/OrderService'
import Util from '../../util/util'
import { connect } from 'react-redux';
import { Redirect } from "react-router";

import styles from './ConfirmOrder.module.css'

const _user = new User();
const _order = new Order();
const _util = new Util();

class ConfirmOrder extends Component {
    state = {
        orderItemList: [],
        imageHost: '',
        totalPrice: 0
    }
    componentDidMount() {
        _order.getOrderCartProduct().then(prodData => {
            console.log(prodData.data.data)
            const data = prodData.data.data;
            this.setState({
                orderItemList: data.orderItemVoList,
                imageHost: data.imageHost,
                totalPrice: data.productTotalPrice
            })
        })
        // _user.checkLogin().then(res => {
        //     _order.getOrderCartProduct().then(prodData => {
        //         console.log(prodData.data.data)
        //         const data = prodData.data.data;
        //         this.setState({
        //             orderItemList: data.orderItemVoList,
        //             imageHost: data.imageHost,
        //             totalPrice: data.productTotalPrice
        //         })
        //     })
        // }).catch(err => {
        //     //Not logged in
        //     console.log('err',err)
        //     _util.removeStorage('userInfo');
        // })
    }
    confirmHandler = () => {
        const params = {
            shippingId: 33
        }
        _order.createOrder(params).then(res => {
            const data = res.data.data;
            this.props.history.push({
                pathname: '/payment',
                state: { 
                    orderNo: data.orderNo,
                    payment: data.payment,
                    paymentType: data.paymentTypeDesc
                }
            })
        })
    }
    render() {
        if(this.props.redirectTo) {
            return <Redirect to={this.props.redirectTo} />;
        }
        const orderItems = this.state.orderItemList.map((item,key) => {
            return (
                <tr key={key}>
                    <td>
                        <img alt="" className={styles.img} src={this.state.imageHost+item.productImage} />
                    </td>
                    <td>{item.productName}</td>
                    <td>￥{item.currentUnitPrice}</td>
                    <td>{item.quantity}</td>
                    <td>￥{item.totalPrice}</td>
                </tr>
            )
        })
        return (
            <div className={styles.confirmDiv}>
                <section>
                    <h1 className={styles.title}>Shipping Address</h1>

                </section>

                <section>
                    <h1 className={styles.title}>Cart List</h1>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderItems}
                        </tbody>
                    </Table>
                </section>
                <div className={styles.footer}>
                    <div className={styles.totalDiv}>
                        <span>Subtotal:</span>
                        <span className={styles.subtotalNum}>{' ￥'+this.state.totalPrice}</span>
                    </div>
                    <div>
                        <Button btnType="checkout" clicked={this.confirmHandler}>
                            <span className={styles.faConfirm}><FontAwesomeIcon icon={faCheck} /></span>
                            Confirm Order</Button>
                    </div>
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        redirectTo: state.redirect.redirectTo
    }
}

export default connect(mapStateToProps, {})(ConfirmOrder);