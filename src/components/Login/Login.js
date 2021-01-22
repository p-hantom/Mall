import React, { Component } from 'react';

import Logo from '../UI/Logo/Logo'
import UserWrap from '../UI/User/UserWrap'
import InputItem from '../UI/User/UserInfoInput'
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Button from '../UI/Button/Button'
import User from '../../service/UserService'
import Util from '../../util/util'
import { NavLink } from 'react-router-dom';

import styles from './Login.module.css'

const _user = new User();
const _util = new Util();

class Login extends Component {
    state = {
        username: 'joe',
        password: 'sleepyjoe',
        // redirect: _mm.getUrlParam('redirect') || '/'
    }

    onInputChange = (e) => {
        const inputVal = e.target.value,
            inputName = e.target.name;
        this.setState({
            [inputName] : inputVal
        })
    }

    onSubmit = () => {
        const loginInfo = {
            username: this.state.username,
            password: this.state.password
        }
        console.log(loginInfo)
        const checkResult = _user.checkLoginInfo(loginInfo);
        // pass check
        if(checkResult.status) {
            _user.login(loginInfo).then(res => {
                console.log(res)
                _util.setStorage('userInfo', res.data.data);
                //After login, redirect to home page
                console.log('getstorage userinfo',_util.getStorage('userInfo'))
                this.props.history.push('/');   
            }, err => {
                console.log(err)
            })
        }
    }

    render() {
        return (
            <div className={styles.loginDiv}>
                <Logo logoStyle="small"/>
                <UserWrap title="Login" submitTitle="Submit">
                    <InputItem 
                        name="username" 
                        placeholder="Enter Username"
                        faType={faUser}
                        onChange={e => this.onInputChange(e)}/>
                    <InputItem 
                        name="password" 
                        placeholder="Enter Password"
                        pw
                        faType={faLock}
                        onChange={this.onInputChange}/>
                    <Button btnType="userInfoSubmit" clicked={this.onSubmit}>
                        Submit
                    </Button>
                    <NavLink
                            to="/signUp"
                            className={styles.faLink}
                            >Sign up with a new account.</NavLink>
                </UserWrap>
            </div>
        )
    }
}
export default Login;