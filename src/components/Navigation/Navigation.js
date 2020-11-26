import React, { Component } from 'react'

import styles from './Navigation.module.css'
import NavItem from './NavItem'
import DrawerToggle from './SideDrawer/DrawerToggle'
import SearchHeader from '../SearchHeader/SearchHeader'
import Aux from '../../hoc/Auxiliary'
import Util from '../../util/util'
import User from '../../service/UserService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from "@fortawesome/free-solid-svg-icons";

const _util = new Util();
const _user = new User();

class Navigation extends Component {
    state = {
        username: _util.getStorage('userInfo').username || ''
    }

    logoutHandler = () => {
        _user.logout().then(() => {
            _util.removeStorage('userInfo');
            window.location.href = '/';
        }, (err) => {
            _util.errorTips(err)
        })
    }

    checkLogin = () => {
        _user.checkLogin().then(res => {
            console.log('success',res)
        }).catch(err => {
            //Not logged in
            console.log('err',err)
            _util.removeStorage('userInfo');
        })
    }

    componentDidMount() {
        this.checkLogin();
    }

    componentDidUpdate() {
        this.checkLogin();
    }

    render() {
        return (
            <div className={styles.navBar}>
                <div className={styles.navigation}>
                    <div className={styles.navLeft}>
                        <DrawerToggle 
                            clicked={this.props.clickDrawerToggle}/>
                        
                    </div>
                    <div className={styles.navLeft}>
                        <SearchHeader />
                    </div>
                    <div className={styles.navRight}>
                        
                        {
                            !this.state.username ? <Aux>
                                <NavItem text="Login" link="/login" className="login"/>
                                <NavItem text="Sign up" link="/signup" />
                            </Aux> : <Aux>
                                <FontAwesomeIcon icon={faUser} className={styles.fa} />
                                <NavItem text={`Hello, ${this.state.username}`} link="/account" />
                                <NavItem text="Logout" onClick={this.logoutHandler} link="/"/>
                            </Aux>
                        }
                        <NavItem text="Cart" link="/cart"/>
                        <NavItem text="Orders" link="/orders"/>
                    </div>
                </div>
            </div>
        )
    }
} 

export default Navigation;