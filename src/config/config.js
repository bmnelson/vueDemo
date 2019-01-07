let config = {
    authorizationUrl: "https://github.com/login/oauth/authorize",
    accessTokenUri: "/github/login/oauth/access_token",
    create_repo: "https://api.github.com/user/repos",
    redirect_uri: "http://localhost:8080/enemy",
    res_uri: "",
    clientId: "5530ff0bf3177b556bbb",
    clientSecret: "b909618d06fce0b82a105b3c13d535b8b0093291",
    scope: "user public_repo",
    state: "",
    response_type: "token",
    grant_type: "authorization_code",
    userInfoUri: "https://api.github.com/user",
    checkMyAuth: "https://api.github.com/authorizations",
    getSingeGrant: function (authId) {
        return "https://api.github.com/authorizations/" + authId
    }

}

export default config;