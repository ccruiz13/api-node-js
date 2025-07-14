class MessagesResponse{
    static GENERIC_EXCEPTION = 'Error interno del servidor';
    static INTERNAL_SERVER_ERROR = 'InternalServerError';

     static values() {
    return [this.GENERIC_EXCEPTION, this.INTERNAL_SERVER_ERROR];
  }
}

Object.freeze(MessagesResponse);
module.exports = MessagesResponse;