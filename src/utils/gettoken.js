import http_custom from '../requestTest';

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
            },
            {headers: {"Accept": "application/json"}}
        ).then((rs) => {
            callback(rs);
        })
    },
    savetoken: function (token) {
        sessionStorage.setItem("access_token", token.access_token);
        sessionStorage.setItem("token_type", token.token_type);
        sessionStorage.setItem("scope", token.scope);
    },
    deleteToken: function () {
        sessionStorage.setItem("access_token", null);
        sessionStorage.setItem("scope", null);
        sessionStorage.setItem("token_type", null);
    },
    loadToken: function () {
        let tokenInfo = {};
        tokenInfo.access_token = sessionStorage.getItem("access_token");
        tokenInfo.token_type = sessionStorage.getItem("token_type");
        tokenInfo.token_scope=sessionStorage.getItem("scope");
        return tokenInfo;
    },
}

export default token;