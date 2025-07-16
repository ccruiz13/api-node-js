const { SNSClient, PublishCommand } = require('@aws-sdk/client-sns');

class SnsEmailClient {
  constructor() {
    this.client = new SNSClient({ region: process.env.AWS_REGION });
    this.topicArn = process.env.NOTIFICATION_TOPIC_ARN;
  }

  async send(to, subject, message) {
    const params = {
      TopicArn: this.topicArn,
      Message: message,
      Subject: subject
    };

    await this.client.send(new PublishCommand(params));
  }
}

module.exports = SnsEmailClient;
