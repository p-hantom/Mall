import React from 'react'
import styles from './CategoryItem.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const categoryItem = (props) => (
    <div className={styles.item} onClick={props.clicked}>
        {props.text}
        {
            props.showArrow ? <FontAwesomeIcon icon={faAngleRight} className={styles.angleRight}/> : null
        }
        
    </div>
)

export default categoryItem;