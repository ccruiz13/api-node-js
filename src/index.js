const express = require('express');
const serverless = require('serverless-http');
const app = require('./app');
const VerifyToken = require('./infraestructure/security/VerifyToken');
const verifyToken = new VerifyToken().execute();
require('dotenv').config();
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./infraestructure/config/Swagger');


const DependencyContainer = require('./infraestructure/config/DependencyContainer');
const RouteConstants = require('./infraestructure/commons/RouteConstants');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());


app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const subscriptionRouter = DependencyContainer.getSubscriptionRouter();
const notificationRouter = DependencyContainer.getNotificationRouter();
app.use(RouteConstants.SUBSCRIPTION_BASE_PATH, verifyToken, subscriptionRouter.getRouter());
app.use(RouteConstants.NOTIFICATION_BASE_PATH, verifyToken, notificationRouter.getRouter());

app.get('/', (req, res) => {
  res.send('BTG Funds API Node.js funcionando correctamente');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
module.exports.handler = serverless(app);