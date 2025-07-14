const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, QueryCommand } = require('@aws-sdk/lib-dynamodb');
const EnvConfig = require('../../../config/env')
const SuscriptionEntity = require('../entities/SuscriptionEntity')

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
    const params = {
      TableName: this.tableName,
      IndexName: 'customer_id-index', // Debes tener este GSI creado en DynamoDB
      KeyConditionExpression: 'customer_id = :cid',
      ExpressionAttributeValues: {
        ':cid': customerId,
      },
    };

    const command = new QueryCommand(params);
    const result = await this.docClient.send(command);

    return result.Items.map(item => SubscriptionEntity.fromItem(item));
  }
}

module.exports = SubscriptionRepository;