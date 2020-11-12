import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './UserInfoInput.module.css'

const userInfoInput = (props) => (
    <div className={styles.item}>
        <div className={styles.fa}>
            <FontAwesomeIcon icon={props.faType} />
        </div>
        
        <input 
            className={styles.input}
            placeholder={props.placeholder}
            type={props.pw ? 'password' : null}/>
    </div>
)

export default userInfoInput;