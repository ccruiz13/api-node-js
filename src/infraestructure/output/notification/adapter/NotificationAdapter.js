const INotificationAdapter = require('../../../../domain/ports/output/INotificationAdapter');
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
   * @param {Notification} notification - Objeto de dominio con email, phone y message
   * @returns {Promise<void>}
   */
  async sendNotification(notification) {
    const { email, phone, message } = notification;
    const subject = 'Solicitud de suscripción recibida - BTG Funds';

    const emailPromise = this.emailClient.send(email, subject, message);
    const smsPromise = this.smsClient.send(phone, message);

    await Promise.all([emailPromise, smsPromise]);
  }
}

module.exports = NotificationAdapter;
