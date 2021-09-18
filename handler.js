'use strict'

module.exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event
      },
      null,
      2
    )
  }

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
}

// write message to the table
module.export.post = async (event) => {

console.log('Executing post @', new Date().toUTCString())
    console.log("Request: " + JSON.stringify(event));

const body = JSON.parse(event.body)

    const params = {
        Items = {
            messageId: new Date().getTime(),
            message: body.message
        },
    };

try {
    const data = params.Items,
    return { statusCode: 200, body: JSON.stringify({ event, params, data })};
} catch (error) {
    return { statusCode: 400, request: { evnet, params }, error: `Error -> Post: ${error.stack}`};
}
}
