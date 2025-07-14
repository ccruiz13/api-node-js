const SubscriptionHistoryResponseDTO = require('../dto/response/SubscriptionHistoryResponseDTO')
class SubscriptionResponseMapper {
  static toDTO(subscription) {
    return new SubscriptionHistoryResponseDTO({
      subscription_id: subscription.subscription_id,
      customer_id: subscription.customer_id,
      category: subscription.fund_id, // usamos fund_id como categoría
      minimum_amount: subscription.amount, // usamos amount como monto mínimo
      status: subscription.status,
      timestamp: subscription.timestamp
    });
  }
}

module.exports = SubscriptionResponseMapper;