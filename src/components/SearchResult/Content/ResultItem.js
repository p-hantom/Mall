import React from 'react'
import brokenImage from '../../../assets/images/broken_image.png'
import styles from './ResultItem.module.css'

const resultItem = ({data, onClick}) => {
    const {name, price, imageHost, mainImage,
            subtitle} = data;
    return (
        <div className={styles.resultItem}>
            <div className={styles.imageDiv}>
                {
                    !mainImage ? <img alt="" className={styles.img} src={brokenImage} />
                        : <img alt="" className={styles.img} src={imageHost+mainImage} />
                }
                
            </div>
            <div className={styles.descriptionDiv}>
                <div className={styles.name} onClick={onClick}>{name}</div>
                <div className={styles.subtitle}>{subtitle}</div>
                <div className={styles.price}>
                    <span className={styles.dollar}>$</span>
                    {price}</div>
            </div>
        </div>
    )
}

export default resultItem;