const Suscription = require('../model/Subscription')
const ISuscriptionAdapter = require('../ports/output/ISuscriptionAdapter')
const ISubscriptionServicePort = require('../ports/input/ISuscriptionServicePort')
const DomainConfigurationException = require('../exceptions/DomainConfigurationException');
const ExceptionMessages = require('../constants/ExceptionMessages');

class SubscriptionUseCase extends ISubscriptionServicePort {
  constructor(subscriptionAdapter) {
    super();

    if (!subscriptionAdapter) {
      throw new Error(ExceptionMessages.SUBSCRIPTION_ADAPTER_REQUIRED_MESSAGE);
    }

    this.subscriptionAdapter = subscriptionAdapter;
  }

  async getSubscriptionsByCustomerId(customerId) {
        const subscriptions = await thissuscriptionAdapter.getSubscriptionsByCustomerId(customerId);
        console.log(subscriptions);
        if (!subscriptions || subscriptions.length === 0) {
            throw new DomainConfigurationException(ExceptionMessages.SUBSCRIPTIONS_NOT_FOUND);
        }

        return subscriptions;

    }
}

module.exports = SubscriptionUseCase;