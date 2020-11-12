import React from 'react'
import styles from './UserInfoTitle.module.css'

const userInfoTitle = (props) => (
    <div className={styles.title}>
        {props.title}
    </div>
)

export default userInfoTitle; 