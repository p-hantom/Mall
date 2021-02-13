import React, {Component} from 'react'
import styles from './ProductCard.module.css'
import Button from '../Button/Button'
import brokenImage from '../../../assets/images/broken_image.png'
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux'
import { addToCart } from '../../../actions'

class ProductCard extends Component {
    state = {
        isHover: false
    }
    onClickProductHandler = (id) => {
        this.props.history.push({
            pathname: '/detail',
            search: `?productId=${id}`,
            state: {
                id: id 
            }
        })
    }
    addToCartHandler = () => {
        this.props.addToCart({
            productId: this.props.data.id,
            count: 1
        })
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
                        <img alt="" src={imgSrc} className={styles.img} />
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

const WrappedComponent = withRouter(ProductCard);

export default connect(null, { addToCart })(WrappedComponent);