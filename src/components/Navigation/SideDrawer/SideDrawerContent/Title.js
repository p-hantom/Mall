import React from 'react'
import styles from './Title.module.css'

const title = (props) => (
    <div className={styles.title}>
        {props.text}
    </div>
)

export default title;