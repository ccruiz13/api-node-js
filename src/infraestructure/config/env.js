require('dotenv').config();
const { SSMClient, GetParameterCommand } = require('@aws-sdk/client-ssm');

const ssmClient = new SSMClient({ region: process.env.AWS_REGION });

async function getSecureParameter(name) {
  const command = new GetParameterCommand({
    Name: name,
    WithDecryption: true
  });
  const response = await ssmClient.send(command);
  return response.Parameter.Value;
}

class EnvConfig {
  static AWS_REGION = process.env.AWS_REGION;
  static AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
  static AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

  static DYNAMO_TABLE_NAME = process.env.DYNAMO_SUBSCRIPTION_TABLE;
  static NOTIFICATION_TOPIC_ARN = process.env.NOTIFICATION_TOPIC_ARN;
  static JAVA_BASE_URL = process.env.BASE_URL_JAVA;

  // Secretos que deben obtenerse desde AWS SSM
  static async loadSecrets() {
    EnvConfig.TWILIO_ACCOUNT_SID = await getSecureParameter('/btg/api-node/TWILIO_ACCOUNT_SID');
    EnvConfig.TWILIO_AUTH_TOKEN = await getSecureParameter('/btg/api-node/TWILIO_AUTH_TOKEN');
    EnvConfig.TWILIO_FROM_NUMBER = await getSecureParameter('/btg/api-node/TWILIO_FROM_NUMBER');
  }

  static validateEnvVars() {
    const required = [
      'AWS_REGION',
      'AWS_ACCESS_KEY_ID',
      'AWS_SECRET_ACCESS_KEY',
      'DYNAMO_TABLE_NAME',
      'NOTIFICATION_TOPIC_ARN',
      'JAVA_BASE_URL'
    ];

    const missing = required.filter((key) => !process.env[key]);

    if (missing.length > 0) {
      throw new Error(`Missing environment variables: ${missing.join(', ')}`);
    }
  }
}

EnvConfig.validateEnvVars();

module.exports = EnvConfig;
