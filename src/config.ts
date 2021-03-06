const config = {
    auth: {
        PROD: {
            GitHubOauthClientId: 'cab2f1d73e2dc96c7f8b',
            GitHubOauthScope: 'repo user:email read:user',
            GitHubOauthRedirectUrl: 'https://op-build-prod.azurewebsites.net/v1/Authorizations/github',
            AADAuthTenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
            AADAuthClientId: '53bb1162-c37b-4176-8ddf-ce47964c3fcd',
            AADAuthScope: 'openid offline_access profile',
            AADAuthResource: 'https://graph.windows.net',
            AADAuthRedirectUrl: 'https://op-build-prod.azurewebsites.net/v1/Authorizations/aad'
        },
        PPE: {
            GitHubOauthClientId: '7decdab5f6801e75e1d5',
            GitHubOauthScope: 'repo user:email read:user',
            GitHubOauthRedirectUrl: 'https://op-build-sandbox2.azurewebsites.net/v1/Authorizations/github',
            AADAuthTenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
            AADAuthClientId: '90e8d374-2270-4528-86d0-77b9f736ffbf',
            AADAuthScope: 'openid offline_access profile',
            AADAuthResource: 'https://graph.windows.net',
            AADAuthRedirectUrl: 'https://op-build-sandbox2.azurewebsites.net/v1/Authorizations/aad'
        }
    },
    OPBuildAPIEndPoint: {
        PROD: 'https://op-build-prod.azurewebsites.net',
        PPE: 'https://op-build-sandbox2.azurewebsites.net'
    },
    SignInTimeOut: 120000
};

export default config;