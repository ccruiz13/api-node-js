const SubscriptionRouter = require('../input/rest/SubscriptionRouter');
const SubscriptionHandler = require('../../application/handler/SubscriptionHandler');
const SubscriptionUseCase = require('../../domain/usecase/SuscriptionUseCase');
const SuscriptionAdapter = require('../output/dynamodb/adapter/SuscriptionAdapter')

const NotificationAdapter = require('../output/notification/adapter/NotificationAdapter');
const NotificationUseCase = require('../../domain/usecase/NotificationUseCase');
const NotificationHandler = require('../../application/handler/NotificationHandler');
const NotificationRouter = require('../input/rest/NotificationRouter');

class DependencyContainer {
    static getSubscriptionRouter() {
        const adapter = new SuscriptionAdapter();
        const useCase = new SubscriptionUseCase(adapter);
        const handler = new SubscriptionHandler(useCase);
        return new SubscriptionRouter(handler);
    }

    static getNotificationRouter(){
        const adapter = new NotificationAdapter();
        const useCase = new NotificationUseCase(adapter);
        const handler = new NotificationHandler(useCase);
        return new NotificationRouter(handler);
        }
}

module.exports = DependencyContainer;