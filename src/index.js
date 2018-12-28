import Vue from 'vue';
import App from './App';
import store from './store/store';
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import router from '../src/routers';
import config from '../src/config/config';
import querystring from 'querystring';
import login from '../src/utils/github_login';
import token  from '../src/utils/gettoken';
import http_custom from '../src/requestTest';
import repos from '../src/utils/repository';

Vue.prototype.$config=config;
Vue.prototype.$querystring =querystring;
Vue.prototype.$login=login;
Vue.prototype.$token=token;
Vue.prototype.$http=http_custom;
Vue.prototype.$repos=repos;

Vue.use(ElementUI);

new Vue({
    el:"#root",
    router,
    store,
    render:h=>h(App)
})