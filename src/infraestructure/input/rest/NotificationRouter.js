const { Router } = require('express');
const { SuccessResponse } = require('../response/GenericResponse');
const ErrorHandler = require('../../exceptionhandler/ErrorHandler');
const MessagesResponse = require('../../exception/MessagesResponse');
const RouteConstants = require('../../commons/RouteConstants');

/**
 * @param {NotificationHandler} notificationHandler
 */
class NotificationRouter {
    constructor(notificationHandler) {
        this.notificationHandler = notificationHandler;
        this.router = express.Router();
        this.registerRoutes();
    }

    registerRoutes() {

        /**
 * @swagger
 * /notifications:
 *   post:
 *     summary: Envía notificación por correo y SMS
 *     tags:
 *       - Notificaciones
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: cliente@ejemplo.com
 *               phone:
 *                 type: string
 *                 example: "+573001112233"
 *               message:
 *                 type: string
 *                 example: Gracias por suscribirte al fondo BTG
 *     responses:
 *       200:
 *         description: Notificación enviada exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Se ha enviado notificación exitosa
 *       400:
 *         description: Petición inválida
 *       500:
 *         description: Error interno del servidor
 */
        this.router.post(RouteConstants.NOTIFICATION_BASE_PATH,
            async (req, res, next) => {
                try {
                    await this.notificationHandler.sendNotification(req.body);
                    return res.status(200)
                        .json(new SuccessResponse(MessagesResponse.NOTIFICATION_SUCCESS));
                } catch (error) {
                    ErrorHandler.handle(error, req, res, next);
                }
            }
        );

    }
}
module.exports = NotificationRouter;