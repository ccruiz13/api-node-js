const ExceptionMessages = Object.freeze({
  SUBSCRIPTIONS_NOT_FOUND: 'No se encontraron suscripciones para el cliente',
  GET_SUBSCRIPTIONS_BY_CUSTOMER_ID_NOT_IMPLEMENTED_MESSAGE: 'El método getSubscriptionsByCustomerId debe ser implementado',
  SUBSCRIPTION_ADAPTER_REQUIRED_MESSAGE: 'SubscriptionAdapter es requerido',
  SEND_NOTIFICATION_NOT_IMPLEMENTED_MESSAGE : 'Método no implementado: sendNotification'
});

module.exports = ExceptionMessages;
