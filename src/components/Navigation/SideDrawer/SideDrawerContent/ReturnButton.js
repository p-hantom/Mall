import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import styles from './ReturnButton.module.css'

const returnButton = (props) => (
    <div onClick={props.clicked} className={styles.rtnButtonDiv}>
        <div className={styles.faArrowLeft}>
            <FontAwesomeIcon  icon={faArrowLeft}/>
        </div>
        
        <span>MAIN MENU</span>
    </div>
)

export default returnButton;