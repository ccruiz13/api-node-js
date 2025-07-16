const INotificationAdapter = require('../../../../domain/ports/output/INotificationAdapter');
const Notification = require('../../../../domain/model/Notification');
const SmsClient = require('../clients/SmsClient');
const SnsEmailClient = require('../clients/SnsEmailClient');

class NotificationAdapter extends INotificationAdapter {
    constructor() {
        super();
        this.emailClient = new SnsEmailClient();
        this.smsClient = new SmsClient();
    }

    /**
   * Envía notificación por ambos canales (correo y SMS)
   * @param {NotificationPreference} preference
   * @param {string} message
   */
    async sendNotification(notification, message) {
        const {email, phone} = notification;
        const subject = 'Solicitud de suscripción recibida - BTG Funds';
        const emailPromise = this.emailClient.send(email, subject, message);
        const smsPromise = this.smsClient.send(phone, message);

        //Correo y mensaje de texto
        await Promise.all([emailPromise, smsPromise]);

    }
}

module.exports = NotificationAdapter;
