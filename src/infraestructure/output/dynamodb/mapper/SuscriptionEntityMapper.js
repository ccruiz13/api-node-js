const Suscription = require('../../../../domain/model/Subscription')
const SuscriptionStatus = require('../../../../domain/constants/SubscriptionStatus')
const SuscriptionEntity = require('../entities/SuscriptionEntity')
class SuscriptionEntityMapper{

    static toEntity(domainModel) {
    return new SuscriptionEntity({
      subscription_id: domainModel.subscription_id,
      customer_id: domainModel.customer_id,
      fund_id: domainModel.fund_id,
      amount: domainModel.amount,
      timestamp: domainModel.timestamp.toISOString(), 
      status: domainModel.status
    });
}

static toDomain(entity) {
    return new Subscription({
      subscription_id: entity.subscription_id,
      customer_id: entity.customer_id,
      fund_id: entity.fund_id,
      amount: entity.amount,
      timestamp: new Date(entity.timestamp),
      status: entity.status
    });
  }

}
module.exports = SuscriptionEntityMapper;