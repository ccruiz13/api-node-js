const SubscriptionStatus = require('../constants/SubscriptionStatus');
const DomainConfigurationException = require('../exceptions/DomainConfigurationException');
const ExceptionMessages = require('../constants/ExceptionMessages');

class Notification {
    constructor({ email, phone, message }) {

        if (!email || typeof email !== 'string') {
            throw new DomainConfigurationException(ExceptionMessages.EMAIL_REQUIRED_AND_STRING);
        }
        if (!phone || typeof phone !== 'string') {
            throw new DomainConfigurationException(ExceptionMessages.PHONE_REQUIRED_AND_STRING);
        }
        if (!message || typeof message !== 'string') {
            throw new DomainConfigurationException(ExceptionMessages.MESSAGE_REQUIRED_AND_STRING);
        }


        this.email = email;
        this.phone = phone;
        this.message = message;
        this.preferredChannel = SubscriptionStatus.BOTH;
    }

}

module.exports = Notification;