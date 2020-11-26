import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './UserInfoInput.module.css'

const userInfoInput = ({name, faType, placeholder, pw, onChange}) => (
    <div className={styles.item}>
        <div className={styles.fa}>
            <FontAwesomeIcon icon={faType} />
        </div>
        
        <input 
            className={styles.input}
            placeholder={placeholder}
            type={pw ? 'password' : null}
            name={name}
            onChange={e => onChange(e)}/>
    </div>
)

export default userInfoInput;