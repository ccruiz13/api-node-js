const SubscriptionResponseMapper = require('../mapper/SubscriptionResponseMapper');

class SubscriptionHandler {
  /**
   * @param {SubscriptionUseCase} subscriptionUseCase
   */
  constructor(subscriptionUseCase) {
    this.subscriptionUseCase = subscriptionUseCase;
  }

  /**
   * Maneja la petición para obtener el historial de suscripciones por cliente
   * @param {string} customerId
   * @returns {Promise<SubscriptionHistoryResponseDTO[]>}
   */
  async getSubscriptionsByCustomerId(customerId) {
    const subscriptions = await this.subscriptionUseCase.getSubscriptionsByCustomerId(customerId);
    return subscriptions.map(SubscriptionResponseMapper.toDTO);
  }
}

module.exports = SubscriptionHandler;
