'use strict';
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.create = async (event) => {
  const data = JSON.parse(event.body);
  console.log('-----------------------------------------------------');
  console.log(data);
  // Asegúrate de que `data` incluya el campo `id`
  const params = {
    TableName: process.env.DYNAMODB_TABLE,
    Item: {
      id: uuidv4(),
      nombre: data.nombre,
      precio: data.precio,
      cantidad:data.cantidad,
    }
  };

  try {
    await dynamoDb.put(params).promise();
    return { statusCode: 200, body: JSON.stringify(params.Item) };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: "No se puede crear producto " + error.message }) };
  }
};