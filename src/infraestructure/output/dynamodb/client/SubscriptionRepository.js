const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, QueryCommand } = require('@aws-sdk/lib-dynamodb');
const EnvConfig = require('../../../config/env');
const SubscriptionEntity = require('../entities/SuscriptionEntity');

class SubscriptionRepository {
  constructor() {
    const client = new DynamoDBClient({
      region: EnvConfig.AWS_REGION,
      credentials: {
        accessKeyId: EnvConfig.AWS_ACCESS_KEY_ID,
        secretAccessKey: EnvConfig.AWS_SECRET_ACCESS_KEY,
      },
    });

    this.docClient = DynamoDBDocumentClient.from(client);
    this.tableName = EnvConfig.DYNAMO_TABLE_NAME;
  }

  async getSubscriptionsByCustomerId(customerId) {
    console.log('AWS_ACCESS_KEY_ID:', EnvConfig.AWS_ACCESS_KEY_ID);
    console.log('AWS_SECRET_ACCESS_KEY:', EnvConfig.AWS_SECRET_ACCESS_KEY);

    const params = {
      TableName: this.tableName,
      IndexName: 'customer_id-index', // <--- usa el índice simple
      KeyConditionExpression: 'customer_id = :cid',
      FilterExpression: '#status = :status',
      ExpressionAttributeNames: {
        '#status': 'status',
      },
      ExpressionAttributeValues: {
        ':cid': customerId,
        ':status': 'ACTIVE',
      },
    };


    const command = new QueryCommand(params);
    const result = await this.docClient.send(command);

    return result.Items.map(item => SubscriptionEntity.fromItem(item));
  }
}

module.exports = SubscriptionRepository;
