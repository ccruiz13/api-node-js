class NotificationDTO {

    /**
   * @param {Object} params
   * @param {string} params.email
   * @param {string} params.phone
   * @param {string} params.message
   */
    constructor(email, phone, message) {
        this.email = email;
        this.phone = phone;
        this.message = message;

    }
}

module.exports = NotificationDTO;