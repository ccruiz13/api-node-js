const twilio = require('twilio');

class SmsClient {
  constructor() {
    this.client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
  }

  async send(to, message) {
    await this.client.messages.create({
      body: message,
      from: process.env.TWILIO_FROM_NUMBER,
      to
    });
  }
}

module.exports = SmsClient;
