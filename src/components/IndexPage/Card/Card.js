import React from 'react'

import CardTitle from './CardTitle'
import CardPic from './CardPic'
import CardFooter from './CardFooter'
import styles from './Card.module.css'

const card = (props) => (
    <div className={styles.card}>
        <CardTitle title={props.title} />
        <CardPic />
        <CardFooter />
    </div>
)

export default card;