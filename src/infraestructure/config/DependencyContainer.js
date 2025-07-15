const SubscriptionRouter = require('../input/rest/SubscriptionRouter');
const SubscriptionHandler = require('../../application/handler/SubscriptionHandler');
const SubscriptionUseCase = require('../../domain/usecase/SuscriptionUseCase');
const SuscriptionAdapter = require('../output/dynamodb/adapter/SuscriptionAdapter')

class DependencyContainer {
    static getSubscriptionRouter() {
        const adapter = new SuscriptionAdapter();
        const useCase = new SubscriptionUseCase(adapter);
        const handler = new SubscriptionHandler(useCase);
        return new SubscriptionRouter(handler);
    }
}

module.exports = DependencyContainer;