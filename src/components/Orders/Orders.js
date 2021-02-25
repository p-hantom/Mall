import React, { Component } from 'react'
import Order from '../../service/OrderService'
import Table from 'react-bootstrap/Table'

import { connect } from 'react-redux'
import { Redirect } from "react-router";

import styles from './Orders.module.css'

const _order = new Order();

class Orders extends Component {
    state = {
        orderList: []
    }
    componentDidMount() {
        _order.getOrderList().then(res => {
            const data = res.data.data;
            console.log(data)
            this.setState({
                orderList: data.list
            });
        })
    }

    // Render items in one order
    getOrderItemList = (items, imageHost) => {
        return items.map(item => (
            <tr key={item.productId}>
                    <td>
                        <img alt="" className={styles.img} src={imageHost+item.productImage} />
                    </td>
                    <td>{item.productName}</td>
                    <td>￥{item.currentUnitPrice}</td>
                    <td>{item.quantity}</td>
                    <td>￥{item.totalPrice}</td>
            </tr>
        ))
    }

    //Render orders
    getOrderList = () => {
        return this.state.orderList.map(order => (
                <div key={order.orderNo}>
                    <div className={styles.orderLeftDesc}>
                        <p>Order Number: {order.orderNo}</p>
                        <p>Create Time: {order.createTime}</p>
                    </div>
                    <div className={styles.orderRightDesc}>
                        <p>Payment Type: {order.paymentTypeDesc}</p>
                        <p>Status: {order.statusDesc}</p>
                    </div>
                    <Table responsive="sm">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Product Name</th>
                                <th>Price</th>
                                <th>Qty</th>
                                <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.getOrderItemList(order.orderItemVoList, order.imageHost)}
                        </tbody>
                    </Table>
                </div>
            ))
    }
    render() {
        if(this.props.redirectTo) {
            return <Redirect to={this.props.redirectTo} />;
        }
        
        return (
            <div className={styles.orderDiv}>
                {this.getOrderList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        redirectTo: state.redirect.redirectTo
    }
}

export default connect(mapStateToProps, {})(Orders);