const Suscription = require('../model/Subscription')
const ISuscriptionAdapter = require('../ports/output/ISuscriptionAdapter')
const ISuscriptionServicePot = require('../ports/input/ISuscriptionServicePort')
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
        return await this.suscriptionAdapter.getSubscriptionsByCustomerId(customerId);
    }
}

module.exports = SuscriptionUseCase;