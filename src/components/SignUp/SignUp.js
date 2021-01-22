import React, { Component } from 'react';

import Logo from '../UI/Logo/Logo'
import UserWrap from '../UI/User/UserWrap'
import InputItem from '../UI/User/UserInfoInput'
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser, faMailBulk, faPhone, faQuestion, faCircle } from "@fortawesome/free-solid-svg-icons";
import Button from '../UI/Button/Button'
import User from '../../service/UserService'
import Util from '../../util/util'
import { NavLink } from 'react-router-dom';

import styles from './SignUp.module.css'

const _user = new User();
const _util = new Util();

class SignUp extends Component {
    state = {
        username: 'joe',
        password: 'sleepyjoe',
        email: '9179@qq.com',
        phone: '12345678912',
        question: 'how old am i',
        answer: '1'
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
        const registerInfo = {
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            phone: this.state.phone,
            question: this.state.question,
            answer: this.state.answer
        }
        console.log(registerInfo)
        // const checkResult = _user.checkValidUsername({
        //     str: registerInfo.username,
        //     type: username
        // })
        // // pass check
        // if(checkResult.status===0) {
        _user.register(registerInfo).then(res => {
            _util.setStorage('userInfo', res.data.data);
            //After login, redirect to home page
            console.log('getstorage userinfo',_util.getStorage('userInfo'))
            this.props.history.push('/');   
        }, err => {
            console.log(err)
        })
        // }
    }

    render() {
        return (
            <div className={styles.signUpDiv}>
                <Logo logoStyle="small"/>
                <UserWrap title="Sign Up" submitTitle="Submit">
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
                    <InputItem 
                        name="email" 
                        placeholder="Enter Email"
                        faType={faMailBulk}
                        onChange={this.onInputChange}/>
                    <InputItem 
                        name="phone" 
                        placeholder="Enter Phone Number"
                        faType={faPhone}
                        onChange={this.onInputChange}/>
                    <InputItem 
                        name="question" 
                        placeholder="Enter Validation Question"
                        faType={faQuestion}
                        onChange={this.onInputChange}/>
                    <InputItem 
                        name="answer" 
                        placeholder="Enter Validation Answer"
                        faType={faCircle}
                        onChange={this.onInputChange}/>
                    <Button btnType="userInfoSubmit" clicked={this.onSubmit}>
                        Submit
                    </Button>
                    <NavLink
                            to="/login"
                            className={styles.faLink}
                            >Login with current account.</NavLink>
                </UserWrap>
            </div>
        )
    }
}
export default SignUp;