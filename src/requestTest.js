import axios from 'axios';
// import qs from 'qs';

let http_custom = {
    post: "",
    get: ""
}

http_custom.get = function (url, param = {}) {
    return new Promise((resolve, reject) => {
        axios.get(url, param).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    })
}

http_custom.post = function (url, param = {},headers={}) {
    return new Promise((resolve, reject) => {
        axios.post(url, param,headers).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    })
}

export default http_custom;

