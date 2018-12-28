let repository = {
    createRepository: function (vue, params) {
        let tokenInfo = vue.$token.loadToken();
        return new Promise((rs, rj) => {
            vue.$http.post(vue.$config.create_repo, params, {headers: {"Authorization": tokenInfo.token_type + ' ' + tokenInfo.access_token}}).then((res) => {
                rs(res)
            })
        })

    }
}

export default repository;