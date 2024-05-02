'use strict';
const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();

module.exports.list = async (event) => {
    const params = {
        TableName: process.env.DYNAMODB_TABLE
    };

    try {
        const result = await dynamoDb.scan(params).promise();
        if (result.Items.length > 0) {
            return { statusCode: 200, body: JSON.stringify(result.Items) };
        } else {
            return { statusCode: 404, body: JSON.stringify({ error: 'No hay productos' }) };
        }
    } catch (error) {
        console.error(error);
        return { statusCode: 500, body: JSON.stringify({ error: 'No se pudieron recuperar los productos' }) };
    }
};