let loginUtils = {
    login: function (vue) {
        return new Promise((rs, rj) => {
            let authorizationUrl = vue.$config.authorizationUrl;
            authorizationUrl = authorizationUrl + ('?' + vue.$querystring.stringify({
                client_id: vue.$config.clientId,
                scope: vue.$config.scope,
                state: vue.$config.state,
                redirect_uri: vue.$config.redirect_uri,
            }))
            window.location.href = authorizationUrl;
        })

    },
    logout: function (vue, redirect_url) {
        vue.$router.push('/logout' + "?redirect_url=" + redirect_url);
    },
    checkLogin: function (vue) {
        return vue.$token.loadToken().access_token != null && vue.$token.loadToken().access_token != "";
    }
}

export default loginUtils;