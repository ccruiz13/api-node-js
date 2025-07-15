class MessagesResponse {
  static GENERIC_EXCEPTION = 'Error interno del servidor';
  static INTERNAL_SERVER_ERROR = 'InternalServerError';
  static CUSTOMER_ID_REQUIRED_MESSAGE = 'El customer_id es obligatorio'
  static SUCCESSFUL_QUERY_MESSAGE = 'Consulta exitosa';

  static values() {
    return [this.GENERIC_EXCEPTION, this.INTERNAL_SERVER_ERROR , this.CUSTOMER_ID_REQUIRED_MESSAGE, this.SUCCESSFUL_QUERY_MESSAGE];
  }
}

Object.freeze(MessagesResponse);
module.exports = MessagesResponse;