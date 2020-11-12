import React from 'react'
import { NavLink } from 'react-router-dom';

import styles from './NavItem.module.css'

const navItem = (props) => {
    return (
        <div className={styles.linkDiv}>
            <NavLink
                to={props.link}
                exact={props.exact}
                className={styles.link}
                >{props.text}</NavLink>
        </div>
    )
}

export default navItem;