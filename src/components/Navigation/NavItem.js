import React from 'react'
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './NavItem.module.css'

const navItem = (props) => {
    return (
        <div className={styles.linkDiv} onClick={props.onClick}>
            <div className={styles.link}>
            {
                props.fa ? <FontAwesomeIcon icon={props.fa}/> : null
            }
            <NavLink
                to={props.link}
                exact={props.exact}
                className={styles.linkText}
                >{props.text}</NavLink>
            </div>
            
        </div>
    )
}

export default navItem;