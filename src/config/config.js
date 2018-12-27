let config = {
    authorizationUrl: "https://github.com/login/oauth/authorize",
    accessTokenUri: "/github/login/oauth/access_token",
    redirect_uri: "http://localhost:8080/login",
    res_uri: "",
    clientId: "5530ff0bf3177b556bbb",
    clientSecret: "b909618d06fce0b82a105b3c13d535b8b0093291",
    scope: "user:email",
    state: "",
    response_type: "token",
    grant_type : "authorization_code",
    userInfoUri:"https://api.github.com/user"

}

export default config;