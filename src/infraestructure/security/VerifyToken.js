const axios = require('axios');
const Endpoints = require('../commons/Endpoints');
const TokenJwtConfig = require('./TokenJwtConfig')
const MessagesResponse = require('../exception/MessagesResponse');
const { ErrorResponse } = require('../input/response/GenericResponse');

class VerifyToken {
    constructor() {
        const DECODE_URL = '/decode';
        this.API_DECODE = Endpoints.JAVA_BASE_URL + Endpoints.USER_BASE_PATH + DECODE_URL;
    }

    /**
    * Middleware para verificar el token JWT mediante el servicio Java
    */
    execute() {
        return async (req, res, next) => {
            console.log('URL API: ' + this.API_DECODE);

            const authHeader = req.headers.authorization;
            if (!authHeader || !authHeader.startsWith(TokenJwtConfig.PREFIX_TOKEN)) {
                return res.status(401).json(
                    new ErrorResponse(MessagesResponse.INVALID_TOKEN_ERROR, 'No autorizado')
                );
            }

            const token = authHeader.split(' ')[1];

            try {
                const response = await axios.get(this.API_DECODE, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                req.user = response.data.data;
                next();
            } catch (error) {
                console.error('Error verificando token:', error.message);

                const err = new ErrorResponse(
                    MessagesResponse.INVALID_TOKEN_ERROR,
                    'InvalidTokenException'
                );

                return res.status(400).json(err);
            }
        };
    }

}
module.exports = VerifyToken;