import React from 'react'
import styles from './Logo.module.css'
import { NavLink } from 'react-router-dom';

const logo = (props) => (
    // <div className={styles.logo}>MALL</div>
    <NavLink
        to='/'
        exact={true}
        className={[styles.logo, styles[props.logoStyle]].join(' ')}>
        MALL
    </NavLink>
)

export default logo;