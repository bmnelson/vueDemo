import axios from './utils/axiosConfig';
// import qs from 'qs';
import token from './utils/gettoken';

let http_custom = {
    post: "",
    get: "",
    post_auth: ""
}

http_custom.get = function (url, param = {}, header = {}) {
    return new Promise((resolve, reject) => {
        axios.get(
            url,
            {
                headers: {
                    "Accept": "application/json",
                    ...header
                },
                params: {...param}
            }).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    })
}

http_custom.post = function (url, param = {}, header = {}) {
    return new Promise((resolve, reject) => {
        axios.post(
            url,
            param, {
                headers: {
                    "Accept": "application/json",
                    ...header
                }
            }).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    })
}


http_custom.post_auth = function (url, param = {}, header = {}) {
    let tokenInfo = token.loadToken();
    return new Promise((resolve, reject) => {
        axios.post(
            url,
            param,
            {
                headers:
                    {
                        "Authorization": tokenInfo.token_type + ' ' + tokenInfo.access_token,
                        "Accept": "application/json",
                        ...header
                    }
            }).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    })
}

export default http_custom;

