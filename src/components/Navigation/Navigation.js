import React, { Component } from 'react'
import { withRouter } from "react-router-dom";
import styles from './Navigation.module.css'
import NavItem from './NavItem'
import DrawerToggle from './SideDrawer/DrawerToggle'
import { NavLink } from 'react-router-dom';
import Logo from '../UI/Logo/Logo'
import Aux from '../../hoc/Auxiliary'
import Util from '../../util/util'
import User from '../../service/UserService'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faShoppingCart, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import { getCartList } from '../../actions'

import { connect } from 'react-redux'

const _util = new Util();
const _user = new User();

class Navigation extends Component {
    state = {
        username: _util.getStorage('userInfo') && (_util.getStorage('userInfo').username || ''),
        showSearchBar: false,
        inputValue: "" ,
        cartTotal: _util.getStorage('userInfo') ? 0 : null
    }

    componentDidMount() {
        this.checkLogin();
        // this.props.getCartList();
    }

    componentDidUpdate(prevProps) {
        // this.checkLogin();
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
            // console.log('success',res)
            this.props.getCartList();
        }).catch(err => {
            //Not logged in
            console.log('login err',err)
            _util.removeStorage('userInfo');
        })
    }

    showSearchbarHandler = () => {
        this.setState({
            showSearchBar: true
        })
    }

    closeSearchbarHandler = () => {
        this.setState({
            showSearchBar: false
        })
    }

    inputHandler = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    // On pressing 'enter', go to search result page
    keyDownHandler = (e) => {
        if(e.key !== 'Enter')   return;
        const {inputValue} = this.state;
        this.setState({
            inputValue: '',
            showSearchBar: false
        })
        this.props.history.push({
            pathname: '/searchResult',
            search: `?keyword=${inputValue}`,
            state: { keyword: inputValue }
        })
    }

    render() {
        const {showSearchBar, inputValue} = this.state
        const cartText = <span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span className={styles.cartTotalText}>{this.props.cartNumber}</span>
                        </span>
        const navSearch = !showSearchBar ? 
            <FontAwesomeIcon icon={faSearch} className={styles.faLink} onClick={this.showSearchbarHandler} /> :
            <FontAwesomeIcon icon={faTimes} className={styles.faLink} onClick={this.closeSearchbarHandler} />
        return (
            <div>
                <div className={showSearchBar ? styles.inputContainer : styles.closeInputContainer}>
                    <input type="text" className={styles.searchInput} 
                        placeholder="Type and press enter to search." 
                        value={inputValue}
                        onChange={e => this.inputHandler(e)}
                        onKeyDown={this.keyDownHandler}
                        />
                </div>
                <div className={styles.navBar}>
                    <div className={styles.drawerToggle}>
                        <DrawerToggle 
                            clicked={this.props.clickDrawerToggle}/>
                    </div>
                    <div className={styles.logo}>
                        <Logo logoStyle="index"/>
                    </div>
                    <div className={styles.secondaryNav}>
                        <NavLink
                            to="/cart"
                            className={styles.faLink}
                            >{cartText}</NavLink>
                        {navSearch}
                    </div>
                    <div className={styles.mainNav}>
                        <NavItem text="HOME" link="/"/>
                        {
                            !this.state.username ? <Aux>
                                <NavItem text="LOGIN" link="/login" className="login"/>
                                <NavItem text="SIGN UP" link="/signup" />
                            </Aux> : <Aux>
                                <NavItem text={`HELLO, ${this.state.username}`} link="/account" fa={faUser} />
                                <NavItem text="LOGOUT" onClick={this.logoutHandler} link="/"/>
                            </Aux>
                        }
                        <NavItem text="ORDERS" link="/orders"/>
                    </div>
                </div>
            </div>
        )
    }
} 

const mapStateToProps = (state) => {
    return {
        cartNumber: state.cart.cartNumber
    }
}

const WrappedNavigation = withRouter(Navigation);

export default connect(
    mapStateToProps,
    {getCartList}
)(WrappedNavigation);