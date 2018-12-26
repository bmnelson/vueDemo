import http_custom from '../requestTest';
import {TESTAPI} from "./mutation-types";
import {TESTACTION} from "./action-type";

export const actions = {
    [TESTACTION]({commit, state}, params = {}) {
        http_custom.get('/api/open/api/lunar/json.shtml', params).then((res) => {
            commit(TESTAPI, res.data);
        })
    }
}
