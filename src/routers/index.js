import Enemy from '../components/enemy/enemy';
import Player from '../components/player/player';
import Knowledge from '../components/knowledge/knowledge';
import VueRouter from 'vue-router';
import Vue from 'vue';

Vue.use(VueRouter);

const routes = [
    {path: '/enemy', component: Enemy},
    {path: '/player', component: Player},
    {path:'/knowledge',component:Knowledge}
]

const router = new VueRouter({
    routes
})
export default router;