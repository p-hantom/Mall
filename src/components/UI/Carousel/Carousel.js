import React from 'react'
import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from '../Button/Button'
import banner1 from '../../../assets/images/banner1.jpg'
import banner2 from '../../../assets/images/banner2.jpg'

import styles from './Carousel.module.css'

class HomeCarousel extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item className={styles.item}>
                    <div className={[styles.carouselItem,styles.carouselItem1].join(" ")}></div>            
                    <Carousel.Caption className={styles.caption}>
                        <h2 className={styles.title}>OUTERWEAR SALE</h2>
                        <p className={styles.description}>Save up to 20% on select outerwear.</p>
                        <Button btnType="carouselShopNow">SHOP NOW</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={[styles.carouselItem,styles.carouselItem2].join(" ")}></div>
                    <Carousel.Caption className={styles.caption}>
                        <h2 className={styles.title}>DRESSED FOR SUCCESS</h2>
                        <p className={styles.description}>Gear helps you sell your products in style.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default HomeCarousel;