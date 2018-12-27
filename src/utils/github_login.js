let loginUtils = {
    login: function (vue) {
        return new Promise((rs,rj)=>{
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
    logout: function (vue) {

    }
}

export default loginUtils;