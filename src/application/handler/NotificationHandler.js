const NotificationDTO = require('../dto/request/NotificationDTO');
const NotificationMapper = require('../mapper/NotificationMapper');

class NotificationHandler {
  /**
   * @param {NotificationUseCase} notificationUseCase
   */

  constructor(notificationUseCase) {
    this.notificationUseCase = notificationUseCase;
  }

  /**
   * Maneja el envío de notificaciones por ambos canales
   * @param {Object} dto
   * @returns {Promise<void>}
   */
  async sendNotification(dto) {
   const notification = NotificationMapper.toDomain(dto);
   await this.notificationUseCase.sendNotification(notification);
  }

}

module.exports = NotificationHandler;