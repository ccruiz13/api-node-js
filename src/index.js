const express = require('express');
require('dotenv').config();

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./infraestructure/config/Swagger');


const DependencyContainer = require('./infraestructure/config/DependencyContainer');
const RouteConstants = require('./infraestructure/commons/RouteConstants');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const subscriptionRouter = DependencyContainer.getSubscriptionRouter();
app.use(RouteConstants.SUBSCRIPTION_BASE_PATH, subscriptionRouter.getRouter());

app.get('/', (req, res) => {
  res.send('BTG Funds API Node.js funcionando correctamente');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
