const INotificationServicePort = require('../ports/input/INotificationServicePort');
const DomainConfigurationException = require('../exceptions/DomainConfigurationException');
const ExceptionMessages = require('../constants/ExceptionMessages');

class NotificationUseCase extends INotificationServicePort {

    /**
   * @param {INotificationAdapter} notificationAdapter
   */
    constructor(notificationAdapter) {
        super();
        if (!notificationAdapter) {
            throw new DomainConfigurationException(ExceptionMessages.NOTIFICATION_ADAPTER_REQUIRED_MESSAGE);
        }
        this.notificationAdapter = notificationAdapter;
    }

    /**
 * @param {NotificationPreference} notification
 * @param {string} message
 */

    async sendNotification(notification) {
  try {
    await this.notificationAdapter.sendNotification(notification);
  } catch (error) {
    console.error('Error al enviar la notificación:', error);
    throw new DomainConfigurationException(ExceptionMessages.SEND_NOTIFICATION_FAILED_MESSAGE);
  }
}

}

module.exports = NotificationUseCase;