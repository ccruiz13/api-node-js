const twilio = require('twilio');
const EnvConfig = require('../../../config/env');

class SmsClient {
  constructor() {
    const accountSid = EnvConfig.TWILIO_ACCOUNT_SID;
    const authToken = EnvConfig.TWILIO_AUTH_TOKEN;

    // Inicialización del cliente Twilio
    this.client = twilio(accountSid, authToken);
    this.from = EnvConfig.TWILIO_FROM_NUMBER;
  }

  /**
   * Envía un mensaje SMS con Twilio
   * @param {string} to - Número de teléfono destino (formato E.164)
   * @param {string} message - Contenido del mensaje
   */
  async send(to, message) {
    console.log('Twilio SID:', EnvConfig.TWILIO_ACCOUNT_SID);
    console.log('Twilio Token:', EnvConfig.TWILIO_AUTH_TOKEN);

    try {
      const result = await this.client.messages.create({
        to: to,
        from: this.from,
        body: message
      });

      console.log('SMS enviado correctamente. SID:', result.sid);
    } catch (error) {
      console.error('Error al enviar SMS:', error.message);
      throw error;
    }
  }
}

module.exports = SmsClient;
