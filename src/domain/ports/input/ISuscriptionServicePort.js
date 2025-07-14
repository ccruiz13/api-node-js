const DomainConfigurationException = require('../../exceptions/DomainConfigurationException')

class ISuscriptionServicePot{
    /**
   * Recupera el historial de suscripciones de un cliente
   * @param {string} customerId
   * @returns {Promise<Subscription[]>}
   */
  async getSubscriptionsByCustomerId(customerId) {
    throw new DomainConfigurationException('getSubscriptionsByCustomerId');
  }
        
    
}
module.exports = ISuscriptionServicePot;