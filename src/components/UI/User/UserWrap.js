import React from 'react'
import Title from './UserInfoTitle'
import Button from '../Button/Button'

import styles from './UserWrap.module.css'

const userWrap = (props) => (
    <div className={styles.wrap}>
        <div className={styles.container}>
            <Title title={props.title} />
            <div className={styles.inputCon}>
                {props.children}
                {/* <Button btnType="userInfoSubmit">
                    {props.submitTitle}
                </Button> */}
            </div>
        </div>
    </div>
)

export default userWrap; 