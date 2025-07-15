const express = require('express');
const { SuccessResponse } = require('../response/GenericResponse');
const { BadRequestException } = require('../../exception/BaseException');
const MessagesResponse = require('../../exception/MessagesResponse');
const ErrorHandler = require('../../exceptionhandler/ErrorHandler');
const RouteConstants = require('../../commons/RouteConstants');

class SubscriptionRouter {
  /**
   * @param {SubscriptionHandler} subscriptionHandler
   */  constructor(subscriptionHandler) {
    this.router = express.Router();
    this.handler = subscriptionHandler;
    this.setupRoutes();
  }

  setupRoutes() {
 /**
 * @swagger
 * /subscriptions/{customer_id}:
 *   get:
 *     summary: Obtener historial de transacciones por customer_id
 *     parameters:
 *       - in: path
 *         name: customer_id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Consulta exitosa
 */
this.router.get(RouteConstants.GET_CUSTOMER_BY_ID, async (req, res, next) => {
      try {
        console.log('➡️  Entró a la ruta con ID:', customer_id);

        const { customer_id } = req.params;

        if (!customer_id) {
          throw new BadRequestException(MessagesResponse.CUSTOMER_ID_REQUIRED_MESSAGE);
        }

        const subscriptions = await this.handler.getSubscriptionsByCustomerId(customer_id);

        return res
          .status(200)
          .json(new SuccessResponse(MessagesResponse.SUCCESSFUL_QUERY_MESSAGE, subscriptions));
      } catch (err) {
        return ErrorHandler.handle(err, req, res, next);
      }
    });
  }

  getRouter() {
    return this.router;
  }
}

module.exports = SubscriptionRouter;
