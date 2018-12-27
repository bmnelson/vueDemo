import Enemy from '../components/enemy/enemy';
import Player from '../components/player/player';
import Knowledge from '../components/knowledge/knowledge';
import Login from '../components/intogithub/login';
import User from '../components/intogithub/userindex';
import Index from '../components/index/index';
import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
    {path: '/enemy', component: Enemy},
    {path: '/player', component: Player},
    {path: '/knowledge', component: Knowledge},
    {path: '/login', component: Login},
    {path: '/', component: Index},
    {path: '/user', component: User}
]

const router = new VueRouter({
    mode: 'history',
    routes
})
export default router;