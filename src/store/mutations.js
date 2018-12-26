import {ADDCHARA, ADDSTUDENT, CHANGENAME, INCREACE, DELETEITEM, TESTAPI} from "./mutation-types";

export const mutations = {
    [INCREACE](state) {
        state.sum++;
    },
    [ADDSTUDENT](state, payload) {
        state.list.push({name: payload.name, age: payload.age})
    },
    [ADDCHARA](state, payload) {
        state.tableData.push(payload);
    },
    [CHANGENAME](state, id) {
        state.tableData.find(item => item.id === id).name = 'microjackson';
    },
    [DELETEITEM](state, index) {
        state.tableData.splice(index, 1);
    },
    [TESTAPI](state,res) {
        state.testapi = res;
        alert('mutations修改state成功');
    }

}