const DomainConfigurationException = require('../../exceptions/DomainConfigurationException');
const ExceptionMessages = require('../../constants/ExceptionMessages')

class ISubscriptionServicePort {
  /**
   * Recupera el historial de suscripciones de un cliente
   * @param {string} customerId
   * @returns {Promise<Subscription[]>}
   */
  async getSubscriptionsByCustomerId(customerId) {
    throw new DomainConfigurationException(ExceptionMessages.GET_SUBSCRIPTIONS_BY_CUSTOMER_ID_NOT_IMPLEMENTED_MESSAGE);
  }
}

module.exports = ISubscriptionServicePort;
