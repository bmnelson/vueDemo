import Enemy from '../components/enemy/enemy';
import Player from '../components/player/player';
import Knowledge from '../components/knowledge/knowledge';

import Login from '../components/intogithub/login';
import User from '../components/intogithub/userindex';
import CreateRepo from '../components/intogithub/createrepo';
import ShowRepo from '../components/intogithub/showrepo';
import errorPage from '../components/intogithub/errorpage';

import Index from '../components/index/index';
import VueRouter from 'vue-router';
import Vue from 'vue';
import token from '../utils/gettoken';

Vue.use(VueRouter);

const routes = [
    {path: '/enemy', component: Enemy},
    {path: '/player', component: Player},
    {path: '/knowledge', component: Knowledge},
    {path: '/login', component: Login},
    {path: '/', component: Index},
    {path: '/error', component: errorPage},

    {
        path: '/user',
        component: User,
        meta: {
            requireAuth: true,
        },
        children: [
            {
                path: '/createrepo', meta: {
                    requireAuth: true,
                }, component: CreateRepo
            },
            {
                path: '/showrepo',
                meta: {
                    requireAuth: true,
                }, component: ShowRepo
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
});

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (token.loadToken().access_token != null) {
            console.log("hasToken");
            next()
        } else {
            console.log("notoken");
            next({
                path: '/',
                query: {message: "用户已登出，请重新登陆"}
            })
        }
    } else {
        next();
    }
});
export default router;