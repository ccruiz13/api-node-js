class TokenJwtConfig {
    static PREFIX_TOKEN = 'Bearer ';
    static HEADER_AUTHORIZATION = 'Authorization';
    static CONTENT_TYPE = 'application/json';

    static values(){
        return[this.PREFIX_TOKEN, this.HEADER_AUTHORIZATION, this.CONTENT_TYPE];
    }
}

Object.freeze(TokenJwtConfig);
module.exports = TokenJwtConfig;