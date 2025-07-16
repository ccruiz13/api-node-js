const SubscriptionStatus = require('../constants/SubscriptionStatus');

class Notification {
    constructor({ email, phone }) {
        this.email = email;
        this.phone = phone;
        this.preferredChannel = SubscriptionStatus.BOTH;
    }

}

module.exports = Notification;