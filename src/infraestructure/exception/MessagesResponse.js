class MessagesResponse {
  static GENERIC_EXCEPTION = 'Error interno del servidor';
  static INTERNAL_SERVER_ERROR = 'InternalServerError';
  static CUSTOMER_ID_REQUIRED_MESSAGE = 'El customer_id es obligatorio'
  static SUCCESSFUL_QUERY_MESSAGE = 'Consulta exitosa';
  static NOTIFICATION_SUCCESS = 'Notificacion enviada exitosamente';
  static INVALID_TOKEN_ERROR = 'El token proporcionado no es válido.';


  static values() {
    return [this.GENERIC_EXCEPTION, this.INTERNAL_SERVER_ERROR , this.CUSTOMER_ID_REQUIRED_MESSAGE, this.SUCCESSFUL_QUERY_MESSAGE, this.NOTIFICATION_SUCCESS
      , this.INVALID_TOKEN_ERROR
    ];
  }
}

Object.freeze(MessagesResponse);
module.exports = MessagesResponse;