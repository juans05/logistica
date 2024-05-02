'use strict';
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
module.exports.update = async (event) => {
    const data = JSON.parse(event.body);
    const params = {
      TableName: process.env.DYNAMODB_TABLE,
      Key: {
        id: event.pathParameters.id
      },
      UpdateExpression: 'set #nombre = :nombre, precio = :precio, cantidad = :cantidad',
      ExpressionAttributeValues: {
        ':nombre': data.nombre,
        ':precio': data.precio,
        ':cantidad': data.cantidad
      },
      ExpressionAttributeNames: {
        '#nombre': 'nombre'
      },
      ReturnValues: 'ALL_NEW'
    };
  
    try {
      const result = await dynamoDb.update(params).promise();
      return { statusCode: 200, body: JSON.stringify(result.Attributes) };
    } catch (error) {
      console.error(error);
      return { statusCode: 500, body: JSON.stringify({ error: 'No se pudo actualizar' }) };
    }
  };