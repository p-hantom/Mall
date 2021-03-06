import axios from 'axios'
// import { withRouter } from "react-router-dom";

class Util {
    request(api, params=null, type='post') {
        // console.log("request api:"+api);
        // console.log("request params:"+params);
        return axios.post(api, params)
            .then(res => {
                const status = res.data.status;
                if(status===10){
                    // Need login
                    // Is there a better way???
                    console.log("status === 10")
                    this.removeStorage('userInfo');
                    // window.location.href = '/login'
                    // this.props.history.push('/login');
                    throw new Error(res.data.msg)
                }
                else if(status===0){
                    // Success
                    return res;
                }
                else if(status===1) {
                    // Fail
                    console.log("status === 1")
                    throw new Error(res.data.msg)
                }
        });
    }
    // 本地存储
    setStorage(name, data) {
        const dataType = typeof data;
        // json对象
        if(dataType === 'object') {
            window.localStorage.setItem(name, JSON.stringify(data));
        }
        // 基础类型
        else if(['number','string','boolean'].indexOf(dataType) >= 0) {
            window.localStorage.setItem(name, data);
        }
        // 其他不支持的类型
        else {
            alert('该类型不能用于本地存储');
        }
    }
    // 取出本地存储内容
    getStorage(name) {
        const data = window.localStorage.getItem(name);
        if(data) {
            return JSON.parse(data);
        }
        else {
            return '';
        }
    }
    // 删除本地存储
    removeStorage(name){
        window.localStorage.removeItem(name);
    }
    errorTips(errMsg){
        alert(errMsg || '好像哪里不对了~');
    }
    // generate params for application/x-www-form-urlencoded format
    getParams(paramsObj) {
        const params = new URLSearchParams();
        Object.keys(paramsObj).map(key => {
            params.append(key, paramsObj[key]);
            return 0;
        })
        return params;
    }
}

export default Util;