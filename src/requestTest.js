import axios from 'axios';
import qs from 'qs';

let http_custom = {
    post: "",
    get: ""
}

http_custom.get = function (url, data) {
    let param = qs.stringify(data);
    return new Promise((resolve, reject) => {
        axios.get(url, param).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        })
    })
}

http_custom.post = function (url, data) {
    let param=qs.stringify(data);
    return new Promise((resolve, reject) => {
        axios.post(url, param).then((res)=>{
            resolve(res.data);
        }).catch((error)=>{
            reject(error);
        })
    })
}

export default http_custom;

