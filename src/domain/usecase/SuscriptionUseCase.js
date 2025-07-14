const Suscription = require('../model/Subscription')
const ISuscriptionAdapter = require('../ports/output/ISuscriptionAdapter')
const ISuscriptionServicePot = require('../ports/input/ISuscriptionServicePort')
const DomainConfigurationException = require('../exceptions/DomainConfigurationException');
const ExceptionMessages = require('../constants/ExceptionMessages');
class SuscriptionUseCase extends ISuscriptionServicePort {
    constructor(suscriptionAdapter) {
        super();
        if (!suscriptionAdapter) {
            throw new Error('SuscriptionAdapter is required');
        }

        this.suscriptionAdapter = suscriptionAdapter;
    }

    /**
     * Método del servicio: listar historial de transacciones por cliente
     * @param {string} customerId
     * @returns {Promise<Suscription[]>}
     */
    async getSubscriptionsByCustomerId(customerId) {
        const subscriptions = await this.suscriptionAdapter.getSubscriptionsByCustomerId(customerId);
        if (!subscriptions || subscriptions.length === 0) {
      throw new DomainConfigurationException(ExceptionMessages.SUBSCRIPTIONS_NOT_FOUND);
    }

    return subscriptions;

    }
}

module.exports = SuscriptionUseCase;