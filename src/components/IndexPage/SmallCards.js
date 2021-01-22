import React, {Component} from 'react'
import { Container, Row, Col } from 'react-bootstrap';
// import small1 from '../../assets/images/small1.jpg'
// import small2 from '../../assets/images/small2.jpg'
// import small3 from '../../assets/images/small3.jpg'
// import Button from '../UI/Button/Button'
import ProductCard from '../UI/ProductCard/ProductCard'
import styles from './SmallCards.module.css'

const content = [
    {
        imageHost: 'http://img.mall.com/',
        mainImage: 'small1.jpg',
        name: 'Austin Coat',
        price: '￥89.00'
    },
    {
        imageHost: 'http://img.mall.com/',
        mainImage: 'small2.jpg',
        name: 'Baxter Parka',
        price: '￥99.00'
    },
    {
        imageHost: 'http://img.mall.com/',
        mainImage: 'small3.jpg',
        name: 'Puffy Vest',
        price: '￥89.00'
    }
]

class SmallCards extends Component {
    state = {
        mouseOver: -1
    }
    render() {
        const CardList = content.map((item,index) => (
            <Col key={index} className={styles.col}>
                <ProductCard data={item} />
                {/* <div className={styles.imgCon}>
                     <img src={item.img} className={styles.img} />
                </div>
                
                <div className={styles.actionDiv}>
                    <div className={styles.actionButtons}>
                        <Button btnType="smallCard">ADD TO CART</Button>
                        <Button btnType="smallCard">BUY NOW</Button>
                    </div>
                </div>
                <div className={styles.content}>
                    <h3 className={styles.title}>{item.title}</h3>
                    <p className={styles.price}>{item.price}</p>
                </div> */}
            </Col>
            // <div key={index} className=>
            //     <div>
            //         <img src={item.img} />
            //     </div>
            //     <div>
            //         <h3>{item.title}</h3>
            //         <p>{item.price}</p>
            //     </div>
            // </div>
        ))
        return (
            <Container>
                <Row className={styles.row}>{CardList}</Row>
            </Container>
        )
    }
}

export default SmallCards;