import http_custom from '../requestTest';
import {TESTAPI, FETCH_REPO_IMMU} from "./mutation/mutation-types";
import {TESTACTION, FETCH_REPOSITRIES} from "./action/action-type";

export const actions = {
    [TESTACTION]({commit, state}, params = {}) {
        http_custom.get('/api/open/api/lunar/json.shtml', params).then((res) => {
            commit(TESTAPI, res.data);
        })
    },
    [FETCH_REPOSITRIES]({commit, state}, params = {}) {
        http_custom.get(state.userinfo.repos_url, params).then((res) => {
            console.log(res,"res");
            commit(FETCH_REPO_IMMU, res)
        })
    }
}
