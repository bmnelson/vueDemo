import Enemy from '../components/enemy/enemy';
import Player from '../components/player/player';
import Knowledge from '../components/knowledge/knowledge';

import Login from '../components/intogithub/login';
import CreateRepo from '../components/intogithub/createrepo';
import ShowRepo from '../components/intogithub/showrepo';
import ErrorPage from '../components/intogithub/errorpage';

import Index from '../components/index/index';
import VueRouter from 'vue-router';
import Vue from 'vue';
import token from '../utils/gettoken';

import Layout from '@/View/layout/layout';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Index,
        name: '主页',
        hidden: true,
        meta: {
            title: '主页',
            icon: ''
        }
    },
    {
        path: '/enemy',
        component: Layout,
        redirect: '/enemy/enemylist',
        name: 'Enemy',
        meta: {title: 'Enemy', icon: 'document'},
        children: [{
            path: 'enemylist',
            component: Enemy
        }]
    },
    {
        path: '/player',
        component: Layout,
        redirect: '/player/playerlist',
        name: 'Player',
        meta: {title: 'Player', icon: 'ticket'},
        children: [{
            path: 'playerlist',
            component: Player
        }]
    },
    {
        path: '/knowledge',
        component: Layout,
        redirect: '/knowledge/knowledgelist',
        name: '总结知识测试页',
        meta: {title: '总结知识测试页', icon: 'printer'},
        children: [{
            path: 'knowledgelist',
            component: Knowledge
        }]
    },
    {
        path: '/login',
        component: Login,
        hidden: true,
        name: '跳转页',
        meta: {title: '跳转页', icon: 'share'},
    },
    {
        path: '/error',
        component: Layout,
        redirect: '/error/errorshow',
        name: '错误页',
        meta: {title: '错误页', icon: 'news'},
        children: [{
            path: 'errorshow',
            component: ErrorPage
        }]
    },
    {
        path: '/user',
        component: Layout,
        redirect: 'noredirect',
        name: '仓库相关',
        meta: {
            requireAuth: true,
            title: '仓库相关',
            icon: 'setting'
        },
        children: [
            {
                path: '/createrepo',
                meta: {
                    title: '创建仓库',
                    requireAuth: true
                },
                component: CreateRepo,
                name: '创建仓库'
            },
            {
                path: '/showrepo',
                meta: {
                    title: '查看仓库',
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