import { Context } from "aws-lambda";
import { DatabaseService } from "../../shared/database.service";

module.exports.handler = async (
  event: any,
  context: Context,
  callback: any
) => {
  const response = {
    statusCode: 0,
    body: ""
  };
  try {
    const rfId = Number(event.path.split("/")[2]);
    console.log(`RFID: ${rfId}`);
    
    const databaseService = new DatabaseService();
    await databaseService.connect();
    const queryResponse: any = await databaseService.query(
      //Get the data row for given RFID 
      `SELECT * FROM sentinel_DB.sentinel_info WHERE RFID=${rfId}`
    );
    let status = false ;

    //Check for authentication 
    if (queryResponse.length > 0){
      if (((queryResponse[0]["Heartrate"]) == "1") && ((queryResponse[0]["Geolocation"]) == "Austin")){
          status = true;
      }
    }

    console.log(`Query Response: ${JSON.stringify(queryResponse)}`);
    
    
    console.log(`RFID Exist: ${status}`);
    
    response["statusCode"] = 200;
    response["body"] = JSON.stringify({status});
    
    console.log('response:' , response);
  } catch (error) {
    console.log(error);
    response["statusCode"] = 500;
    response["body"] = JSON.stringify(error);
  }
  context.callbackWaitsForEmptyEventLoop = false;
  return callback(null, response);
};
