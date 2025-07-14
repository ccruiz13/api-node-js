const { DynamoDBClient } = require('@aws-sdk/client-dynamodb');
const { DynamoDBDocumentClient, QueryCommand } = require('@aws-sdk/lib-dynamodb');
const EnvConfig = require('../../../config/env')
const SuscriptionEntity = require('../entities/SuscriptionEntity')