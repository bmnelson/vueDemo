import Vue from 'vue';
import App from './App';
import store from './store/store';
import ElementUI from 'element-ui';
import "element-ui/lib/theme-chalk/index.css";
import router from '../src/routers';



Vue.use(ElementUI);

new Vue({
    el:"#root",
    router,
    store,
    render:h=>h(App)
})