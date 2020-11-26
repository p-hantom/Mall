import React from 'react'
import Card from './Card/Card'

import styles from './CardLayout.module.css'

const cardList = (props) => (
    <div className={styles.cardLayout}>
        <Card title="Electronics"/>
        <Card title="Electronics"/>
        <Card title="Electronics"/>
        <Card title="Electronics"/>
        <Card title="Electronics"/>
    </div>
)

export default cardList;