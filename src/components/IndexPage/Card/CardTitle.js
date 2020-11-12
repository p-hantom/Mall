import React from 'react'

import styles from './CardTitle.module.css'

const cardTitle = (props) => (
    <div className={styles.title}>
        <span>{props.title}</span>
    </div>
)

export default cardTitle;