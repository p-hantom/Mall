import React, {Component} from 'react'
import styles from './ProductCard.module.css'
import Button from '../Button/Button'
import brokenImage from '../../../assets/images/broken_image.png'
import { withRouter } from "react-router-dom";
import CartService from '../../../service/CartService'

const _cart = new CartService();

class ProductCard extends Component {
    state = {
        isHover: false
    }
    onClickProductHandler = (id) => {
        console.log('click')
        this.props.history.push({
            pathname: '/detail',
            search: `?productId=${id}`,
            state: {
                id: id 
            }
        })
    }
    addToCartHandler = () => {
        console.log('add')
        _cart.addToCart({
            productId: this.props.data.id,
            count: 1
        }).then(res => { console.log(res) })
    }
    render() {
        const {data} = this.props;
        const imgSrc = data.mainImage ? data.imageHost+data.mainImage : brokenImage;
        return (
            <div>
                <div className={styles.imgCon}>
                    <div className={styles.actionDiv}>
                        <div className={styles.actionButtons}>
                            <Button btnType="smallCard" clicked={this.addToCartHandler}>ADD TO CART</Button>
                            <Button btnType="smallCard">BUY NOW</Button>
                        </div>
                    </div>
                    <div className={styles.imgWrap} onClick={()=>this.onClickProductHandler(data.id)}>
                        <img src={imgSrc} className={styles.img} />
                    </div>
                     
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title} 
                        onClick={()=>this.onClickProductHandler(data.id)}>
                        {data.name}
                    </h3>
                    <p className={styles.price}>{data.price}</p>
                </div>
            </div>
        )
    }
}

export default withRouter(ProductCard);