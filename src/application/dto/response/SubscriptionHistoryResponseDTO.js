class SubscriptionHistoryResponseDTO{
  constructor({
    subscription_id,
    customer_id,
    category,
    minimum_amount,
    status,
    timestamp
  }) {
    this.subscription_id = subscription_id;
    this.customer_id = customer_id;
    this.category = category; 
    this.minimum_amount = minimum_amount; 
    this.status = status;
    this.timestamp = timestamp;
  }
}

module.exports = SubscriptionHistoryResponseDTO;
