import React from 'react'

import styles from './ResultItem.module.css'

const resultItem = ({title, price, onClick}) => (
    <div className={styles.resultItem}>
        <div className={styles.imageDiv}></div>
        <div className={styles.descriptionDiv}>
            <div onClick={onClick}>{title}</div>
            <div>{price}</div>
        </div>
    </div>
)

export default resultItem;