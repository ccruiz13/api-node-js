require('dotenv').config();

class EnvConfig {
  static AWS_REGION = process.env.AWS_REGION;
  static AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
  static AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

  static DYNAMO_TABLE_NAME = process.env.DYNAMO_SUBSCRIPTION_TABLE;
  static NOTIFICATION_TOPIC_ARN = process.env.NOTIFICATION_TOPIC_ARN;

  static TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
  static TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
  static TWILIO_FROM_NUMBER = process.env.TWILIO_FROM_NUMBER;

  static validate() {
    const requiredVars = [
      'AWS_REGION',
      'AWS_ACCESS_KEY_ID',
      'AWS_SECRET_ACCESS_KEY',
      'DYNAMO_TABLE_NAME',
      'NOTIFICATION_TOPIC_ARN',
      'TWILIO_ACCOUNT_SID',
      'TWILIO_AUTH_TOKEN',
      'TWILIO_FROM_NUMBER'
    ];

    const missing = requiredVars.filter((key) => !process.env[key]);

    if (missing.length > 0) {
      throw new Error(`Missing environment variables: ${missing.join(', ')}`);
    }
  }
}

// Valida al momento de importar
EnvConfig.validate();

module.exports = EnvConfig;
