const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BTG Funds API',
      version: '1.0.0',
      description: 'Documentación de la API para gestionar suscripciones a fondos de inversión',
    },
    servers: [
      {
        url: 'http://localhost:4000',
      },
    ],
  },
  apis: ['./src/infraestructure/input/rest/*.js'], 
};


const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
