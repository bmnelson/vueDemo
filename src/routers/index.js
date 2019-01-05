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
    {
        path: '/enemy',
        component: Enemy,
        name: '测试页',
        meta: {title: '测试页', icon: 'example'}
    },
    {
        path: '/player',
        component: Player,
        name: '测试页2',
        meta: {title: '测试页2', icon: 'example'},
    },
    {
        path: '/knowledge',
        component: Knowledge,
        name: '总结知识测试页',
        meta: {title: '总结知识测试页', icon: 'example'},
    },
    {
        path: '/login',
        component: Login,
        name: '跳转页',
        meta: {title: '跳转页', icon: 'example'},
    },
    {
        path: '/',
        component: Index,
        name: '主页'
    },
    {
        path: '/error',
        component: errorPage,
        name: '错误页',
        meta: {title: '错误页', icon: 'tree'},
    },

    {
        path: '/user',
        component: User,
        name: '主页',
        meta: {
            requireAuth: true,
        },
        children: [
            {
                path: '/createrepo',
                meta: {
                    title: '错误页',
                    requireAuth: true,
                },
                component: CreateRepo,
                name: '创建仓库'
            },
            {
                path: '/showrepo',
                meta: {
                    title: '错误页',
                    requireAuth: true,
                },
                component: ShowRepo,
                name: '查看仓库'
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