import React from 'react';

import Logo from '../UI/Logo/Logo'
import UserWrap from '../UI/User/UserWrap'
import InputItem from '../UI/User/UserInfoInput'
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const login = () => (
    <div>
        <Logo logoStyle="small"/>
        <UserWrap title="Login" submitTitle="Submit">
            <InputItem 
                name="username" 
                placeholder="Enter Username"
                faType={faUser}/>
            <InputItem 
                name="password" 
                placeholder="Enter Password"
                pw
                faType={faLock}/>
        </UserWrap>
    </div>
)

export default login;