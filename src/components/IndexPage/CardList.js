import React from 'react'
import Card from './Card/Card'

import styles from './CardList.module.css'

const cardList = (props) => (
    <div className={styles.cardList}>
        <Card title="Electronics"/>
        <Card title="Electronics"/>
        <Card title="Electronics"/>
        <Card title="Electronics"/>
        <Card title="Electronics"/>
    </div>
)

export default cardList;