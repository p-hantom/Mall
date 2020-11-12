import React from 'react'

import styles from './Navigation.module.css'
import NavItem from './NavItem'
import DrawerToggle from './SideDrawer/DrawerToggle'

const navigation = (props) => (
    <div className={styles.navBar}>
        <div className={styles.navigation}>
            <div className={styles.navLeft}>
                <DrawerToggle 
                    clicked={props.clickDrawerToggle}/>
                <NavItem text="Login" link="/login" className="login"/>
                <NavItem text="Sign up" link="/signup" />
            </div>
            <div className={styles.navRight}>
                <NavItem text="Cart" link="/cart"/>
                <NavItem text="Orders" link="/orders"/>
                <NavItem text="About" link="/about"/>
                <NavItem text="Your Account" link="account"/>
            </div>
        </div>
    </div>
)

export default navigation;