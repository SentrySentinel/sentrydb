import { Context } from "aws-lambda";
import { DatabaseService } from "../../shared/database.service";

module.exports.handler = async (
  event: any,
  context: Context,
  callback: any
) => {
  console.log(event);

  const response = {
    statusCode: 0,
    body: ""
  };
  try {
    const databaseService = new DatabaseService();
    await databaseService.connect();
    const qeryResponse: any = await databaseService.query(
      //Write a query on this to authenticate and check
      "SELECT * FROM sentinel_DB.sentinel_info;"
    );
    response["statusCode"] = 200;
    response["body"] = JSON.stringify(qeryResponse);
    console.log('response:' , response);
    
  } catch (error) {
    console.log(error);
    response["statusCode"] = 500;
    response["body"] = JSON.stringify(error);
  }
  context.callbackWaitsForEmptyEventLoop = false;
  return callback(null, response);
};
