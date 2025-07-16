const NotificationDTO = require('../dto/request/NotificationDTO');
const Notification = require('../../domain/model/Notification');
class NotificationMapper{

     /**
   * Convierte un NotificationDTO a un objeto de dominio Notification
   * @param {NotificationDTO} dto
   * @returns {Notification}
   */
  static toDomain(dto) {
    return new Notification({
      email: dto.email,
      phone: dto.phone,
      message: dto.message
    });
  }

}
module.exports = NotificationMapper;