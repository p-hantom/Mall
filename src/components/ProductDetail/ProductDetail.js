import React, {Component} from 'react'
import ProductPic from './ProductDetailContent/ProductPic'
import ProductInfo from './ProductDetailContent/ProductInfo'
import DropDown from '../UI/DropDownButton/DropDownButton'
import Button from '../UI/Button/Button'
import Image from '../UI/Image/Image'
import CartService from '../../service/CartService'
import ProductService from '../../service/ProductService'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import styles from './ProductDetail.module.css'
import ProductNumAdder from '../UI/ProductNumAdder/ProductNumAdder'

const _cart = new CartService();
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
                qtyNum: res.data.data.stock===0 ? 0 : 1
            })
        })
    }
    updatePrdNumHandler = (prdNum) => {
        this.setState({
            prdNum: prdNum
        })
        console.log(prdNum)
    }
    addToCartHandler = () => {
        console.log('add')
        _cart.addToCart({
            productId: this.props.location.state.id,
            count: this.state.qtyNum
        }).then(res => {console.log(res)})
    }
    render() {
        const {qtyNum, data, stock} = this.state;
        if( !data )   return null;
        return (
            <div className={styles.main}>
                {/* <div className={styles.imgCon}>
                        <img className={styles.img} src={data.imageHost+data.mainImage} />
                    </div> */}
                <Image mainImage={data.mainImage}
                    imageHost={data.imageHost}
                    imgDivType='detailLarge'/>
                <ProductInfo data={data} />
                <div className={styles.infoDiv}>
                    <ul>
                        <li>
                        <ProductNumAdder 
                        value={qtyNum} 
                        stock={stock}
                        updateNumber={this.updatePrdNumHandler}/>
                        </li>
                        <li>
                        <Button btnType="addToCart" clicked={this.addToCartHandler}>
                        <FontAwesomeIcon icon={faShoppingCart} className={styles.faShoppingCart} />
                        {' '}Add to Cart
                    </Button>
                        </li>
                    </ul>
                    
                    
                </div>
            </div>
            
        )
    }
}

export default ProductDetail;