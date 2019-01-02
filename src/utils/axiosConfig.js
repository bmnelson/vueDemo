import axios from 'axios';
import token from './gettoken';
import router from '../routers';

const $axios = axios.create({
    timeout: 7000
});

$axios.interceptors.response.use(response => {
    console.log(response, "success response");
    return response;
}, error => {
    console.log(error);
    if (error.response) {
        console.log(error.response, "error response");
        switch (error.response.status) {
            case 401:
                token.deleteToken();
                router.replace({path: '/',query:{message:"用户验证已过期，请重新授权"}});
                break;
            case 403:
                router.replace({path: 'error', query: {message: error.response.data.message}});
                break;
        }
    }
})

export default $axios;