const SubscriptionStatus = require('../constants/SubscriptionStatus');

class Subscription {
  constructor({ subscription_id, customer_id, fund_id, amount, timestamp, status }) {
    this.subscription_id = subscription_id;
    this.customer_id = customer_id;
    this.fund_id = fund_id;
    this.amount = amount; 
    this.timestamp = timestamp instanceof Date ? timestamp : new Date(timestamp);

    if (!SubscriptionStatus.values().includes(status)) {
      throw new Error(`Invalid subscription status: ${status}`);
    }

    this.status = status;
  }
}

module.exports = Subscription;