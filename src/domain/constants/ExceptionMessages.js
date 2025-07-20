const ExceptionMessages = Object.freeze({
  SUBSCRIPTIONS_NOT_FOUND: 'No se encontraron suscripciones para el cliente',
  GET_SUBSCRIPTIONS_BY_CUSTOMER_ID_NOT_IMPLEMENTED_MESSAGE: 'El método getSubscriptionsByCustomerId debe ser implementado',
  SUBSCRIPTION_ADAPTER_REQUIRED_MESSAGE: 'SubscriptionAdapter es requerido',
  SEND_NOTIFICATION_NOT_IMPLEMENTED_MESSAGE: 'Método no implementado: sendNotification',
  NOTIFICATION_ADAPTER_REQUIRED_MESSAGE: 'Se requiere el NotificationAdapter para continuar con el envío de notificaciones.',
  EMAIL_REQUIRED_AND_STRING: 'El correo electrónico es obligatorio y debe ser una cadena',
  PHONE_REQUIRED_AND_STRING: 'El número de teléfono es obligatorio y debe ser una cadena',
  MESSAGE_REQUIRED_AND_STRING: 'El mensaje es obligatorio y debe ser una cadena',

});

module.exports = ExceptionMessages;
