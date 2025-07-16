const DomainConfigurationException = require('../../exceptions/DomainConfigurationException');
const ExceptionMessages = require('../../constants/ExceptionMessages');
class INotificationServicePort {
  /**
   * Envía notificación por el canal preferido
   * @param {NotificationPreference} preference
   * @param {string} message
   * @returns {Promise<void>}
   */
  async sendNotification(notification) {
    throw new DomainConfigurationException(ExceptionMessages.SEND_NOTIFICATION_NOT_IMPLEMENTED_MESSAGE);
  }
}

module.exports = INotificationServicePort;
