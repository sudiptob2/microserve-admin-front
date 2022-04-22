import Keycloak from 'keycloak-js';

const keycloak = new Keycloak({
    url: "http://keycloak.microserve.com/auth/",
    realm: "microserve",
    clientId: "admin-front",
});

export default keycloak;