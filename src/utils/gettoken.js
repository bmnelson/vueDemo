import http_custom from '../requestTest';

const localStorage = window.localStorage;

let token = {
    receiveToken: function (vue, code, callback) {
        http_custom.post(
            vue.$config.accessTokenUri,
            {
                client_id: vue.$config.clientId,
                client_secret: vue.$config.clientSecret,
                code: code,
                redirect_uri: vue.$config.redirect_uri,
                grant_type: vue.$config.grant_type
            }
        ).then((rs) => {
            callback(rs);
        })
    },
    savetoken: function (token) {
        localStorage.setItem("access_token", token.access_token);
        localStorage.setItem("token_type", token.token_type);
        localStorage.setItem("scope", token.scope);
    },
    deleteToken: function () {
        return new Promise((rs, rj) => {
            localStorage.removeItem("access_token");
            localStorage.removeItem("token_type");
            localStorage.removeItem("scope");
            console.log(localStorage.getItem("access_token"), "access_token");
        })
    },
    loadToken: function () {
        let tokenInfo = {};
        tokenInfo.access_token = localStorage.getItem("access_token");
        tokenInfo.token_type = localStorage.getItem("token_type");
        tokenInfo.token_scope = localStorage.getItem("scope");
        return tokenInfo;
    },
}

export default token;