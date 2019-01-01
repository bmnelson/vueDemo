let repository = {
    createRepository: function (vue, params) {
        return new Promise((rs, rj) => {
            vue.$http.post_auth(vue.$config.create_repo, params).then((res) => {
                rs(res)
            })
        })

    }
}

export default repository;