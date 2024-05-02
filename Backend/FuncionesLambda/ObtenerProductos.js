'use strict';
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
module.exports.get = async (event) => {
  console.log('-----------------------------------------------------');
  console.log(event.pathParameters.id);
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        id: event.pathParameters.id
      }
    };
  
    try {
      const result = await dynamoDb.get(params).promise();
      if (result.Item) {
        return { statusCode: 200, body: JSON.stringify(result.Item) };
      } else {
        return { statusCode: 404, body: JSON.stringify({ error: 'No hay productos' }) };
      }
    } catch (error) {
      console.error(error);
      return { statusCode: 500, body: JSON.stringify({ error: 'No se pudieron recuperar los productos' }) };
    }
  };