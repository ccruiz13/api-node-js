const Suscription = require('../../../../domain/model/Subscription');
const SuscriptionStatus = require('../../../../domain/constants/SubscriptionStatus');
const SuscriptionEntity = require('../entities/SuscriptionEntity');
const SuscriptionRepository = require('../client/SubscriptionRepository');
const SuscriptionEntityMapper = require('../mapper/SuscriptionEntityMapper');
const ISuscriptionAdapter = require('../../../../domain/ports/output/ISuscriptionAdapter');

class SuscriptionAdapter extends ISuscriptionAdapter {
  constructor() {
    super();
    this.repository = new SuscriptionRepository();
  }

  async getSubscriptionsByCustomerId(customerId) {
    const dynamoItems = await this.repository.getSubscriptionsByCustomerId(customerId);
    return dynamoItems.map(item => SuscriptionEntityMapper.toDomain(item));
  }
}

module.exports = SuscriptionAdapter;
