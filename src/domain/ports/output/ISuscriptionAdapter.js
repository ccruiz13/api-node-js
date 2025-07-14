const DomainConfigurationException = require('../../exceptions/DomainConfigurationException')

class ISuscriptionAdapter{
    /**
   * Recupera el historial de suscripciones de un cliente
   * @param {string} customerId
   * @returns {Promise<Subscription[]>}
   */
  async getSubscriptionsByCustomerId(customerId) {
    throw new MethodNotImplementedException('getSubscriptionsByCustomerId');
  }
        
    
}