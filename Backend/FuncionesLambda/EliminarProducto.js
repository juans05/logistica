'use strict';
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
module.exports.delete = async (event) => {
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        id: event.pathParameters.id
      }
    };
  
    try {
      await dynamoDb.delete(params).promise();
      return { statusCode: 200, body: JSON.stringify({ message: 'Product deleted' }) };
    } catch (error) {
      console.error(error);
      return { statusCode: 500, body: JSON.stringify({ error: 'Could not delete product' }) };
    }
  };