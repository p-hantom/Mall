import React, { Component } from 'react'
import Button from '../UI/Button/Button'
import Image from '../UI/Image/Image'
import ProductService from '../../service/ProductService'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import styles from './ProductDetail.module.css'
import ProductNumAdder from '../UI/ProductNumAdder/ProductNumAdder'
import { connect } from 'react-redux'
import { addToCart } from '../../actions'
const _product = new ProductService();

class ProductDetail extends Component {
    state = {
        qtyNum: 1,
        disableMinus: false,
        disablePlus: false,
        stock: 0
    }
    componentDidMount() {
        const params = {
            productId: this.props.location.state.id
        }
        _product.getProductDetail(params).then(res => {
            this.setState({
                data: res.data.data,
                stock: res.data.data.stock,
                qtyNum: res.data.data.stock === 0 ? 0 : 1
            })
        })
    }
    updatePrdNumHandler = (prdNum) => {
        this.setState({
            qtyNum: prdNum
        })
    }
    addToCartHandler = () => {
        if(this.props.redirectTo) {
            this.props.history.push({
                pathname: '/login'
            })
        }
        const params = {
            productId: this.props.location.state.id,
            count: this.state.qtyNum
        }
        this.props.addToCart(params);
    }
    render() {
        const { qtyNum, data, stock } = this.state;
        if (!data) return null;
        const { name, price, subtitle } = data;

        return (
            <div className={styles.main}>
                <div className={styles.section}>
                    <div className={styles.imgContainer}>
                        <Image mainImage={data.mainImage}
                            imageHost={data.imageHost}
                            imgDivType='detailLarge' />
                    </div>

                    <div className={styles.infoDiv}>
                        <div className={styles.name}>{name}</div>
                        <div>
                            <div>{subtitle}</div>
                            <div className={styles.price}>Price:
                                ￥<span className={styles.priceSpan}>{' ' + price + ' '}</span>
                            </div>
                            {
                                stock > 0 ?
                                    <div className={styles.inStock}>In Stock:
                                    <span className={styles.inStock}>{' ' + stock + ' '}</span>
                                    </div> :
                                    <div className={styles.unavailable}>Unavailable</div>
                            }

                        </div>
                        <ul>
                            <li className={styles.adderDiv}>
                                <ProductNumAdder
                                    value={qtyNum}
                                    stock={stock}
                                    updateNumber={this.updatePrdNumHandler} />
                            </li>
                            <li className={styles.addToCartDiv}>
                                <Button btnType="addToCart" clicked={this.addToCartHandler}>
                                    <FontAwesomeIcon icon={faShoppingBag} className={styles.faShoppingCart} />
                                    {' '}ADD TO CART
                                </Button>
                            </li>
                        </ul>
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

export default connect(
    mapStateToProps,
    { addToCart }
)(ProductDetail);