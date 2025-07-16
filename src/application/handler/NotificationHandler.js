const Notification = require('../../domain/model/Notification');
const {BadRequestException} = require('../../infraestructure/exception/BaseException');
const ExceptionHandler = require('../../application/exception/ExceptionHandler');

class NotificationHandler {
  /**
   * @param {NotificationUseCase} notificationUseCase
   */

  constructor(notificationUseCase) {
    this.notificationUseCase = notificationUseCase;
  }

}

module.exports = NotificationHandler;