# React Dashboard Example

## Setup
### Initialize KeyCloak

```bash
docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:21.1.1 start-dev
```

Follow the steps to create OIDC credentials:

* Create a realm: okapia
* Switch to okapia, create a client: dashboard
    * Set root url:http://localhost:3000/
    * Set valid redirect url: http://localhost:3000/*
    * Set web origins: +
    * Enable: "Client authentication"
    * Get client secret and replace it in index.tsx
* Create a user under okapia realm

Ref:
* https://blog.logrocket.com/implement-keycloak-authentication-react/
* https://github.com/authts/react-oidc-context