const express = require('express');
const { SuccessResponse } = require('../response/GenericResponse');
const { BadRequestException } = require('../../exception/BaseException');
const { MessagesResponse } = require('../../exception/MessagesResponse');
const ErrorHandler = require('../../exceptionhandler/ErrorHandler');
const SubscriptionHandler = require('../../../application/handler/SubscriptionHandler');

class SubscriptionRouter {

    constructor(suscriptionHandler) {
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
    this.router.get('/:customer_id', async (req, res, next) => {
      try {
        const { customer_id } = req.params;

        if (!customer_id) {
          throw new BadRequestException('El customer_id es obligatorio');
        }

        const subscriptions = await this.handler.getSubscriptionsByCustomerId(customer_id);

        return res.status(200).json(new SuccessResponse('Consulta exitosa', subscriptions));
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