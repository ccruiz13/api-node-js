const { SNSClient, PublishCommand } = require('@aws-sdk/client-sns');

class SnsEmailClient {
  constructor() {
    this.client = new SNSClient({ region: process.env.AWS_REGION });
    this.topicArn = process.env.NOTIFICATION_TOPIC_ARN;
  }

  async send(to, subject, message) {
    if (!this.topicArn) {
      console.error("SNS Topic ARN is not defined");
      throw new Error("SNS Topic ARN is missing in environment variables");
    }

    const params = {
      TopicArn: this.topicArn,
      Subject: subject,
      Message: message
    };

    try {
      const response = await this.client.send(new PublishCommand(params));
      console.log(`Email sent via SNS. MessageId: ${response.MessageId}`);
    } catch (error) {
      console.error("Error sending email via SNS:", error);
      throw new Error("Failed to send SNS email notification");
    }
  }
}

module.exports = SnsEmailClient;

