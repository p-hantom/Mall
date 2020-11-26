import axios from 'axios'
import Util from '../util/util'

const _util = new Util();

class User {
    login(loginInfo) {
        const params = new URLSearchParams();
        params.append('username', loginInfo.username);
        params.append('password', loginInfo.password);

        return axios.post('/api/user/login.do', params);
    }
    test(t) {
        const params = new URLSearchParams();
        params.append('productId', '26');
        return axios.post('/api/product/detail.do', params)
        // return axios.post('/test/posts', {
        //     title: 'foo',
        //     body: 'bar',
        //     userId: 1,
        //   })
    }
    register(rgstInfo) {
        return axios.post('/api/user/register.do', JSON.stringify({
            username: rgstInfo.username,
            password: rgstInfo.password,
            email: "1380013800@qq.com",
            phone: "1380013800",
            question: "111",
            answer: "222"
            // email: rgstInfo.email,
            // phone: rgstInfo.phone,
            // question: rgstInfo.question,
            // answer: rgstInfo.answer
        }))
    }
    // 检查登录接口的数据是不是合法
    checkLoginInfo(loginInfo) {
        const username = loginInfo.username.trim();
        const password = loginInfo.password.trim();
        // 判断用户名为空
        if(typeof username !== 'string' || username.length ===0){
            return {
                status: false,
                msg: '用户名不能为空！'
            }
        }
        // 判断密码为空
        if(typeof password !== 'string' || password.length ===0){
            return {
                status: false,
                msg: '密码不能为空！'
            }
        }
        return {
            status : true,
            msg : '验证通过'
        }
    }
    checkLogin() {
        //Check login status
        return _util.request('/api/user/get_user_info.do')
    }
    logout() {
        return axios.post('/api/user/logout.do');
    }
}

export default User;