import Vue from 'vue'
import Vuex from 'vuex'
import {mutations} from "./mutations";
import {actions} from "./actions";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        sum: 0,
        list: [{
            name: 'nelson',
            age: 12
        }, {
            name: 'lily',
            age: 13
        }],
        tableData: [{
            id: 0,
            date: '20180202',
            name: 'nelson',
            address: '黄桥',
            tag: '家'
        }, {
            id: 1,
            date: '20180202',
            name: 'nelson',
            address: '黄桥',
            tag: '家'
        }, {
            id: 2,
            date: '20180202',
            name: 'nelson',
            address: '黄桥',
            tag: '公司'
        }],
        testapi: {animal:"monkey"}
    },
    getters: {
        findById: (state, id) => {
            return state.tableData.find(item => item.id === id);
        },
        yeardetail: state => state.testapi
    },
    mutations,
    actions
})
export default store;