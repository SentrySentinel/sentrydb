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
    //const geolocation = event.path.split("/")[3];

    let jsonbody =  JSON.parse(event.body) 
    const geolocation = jsonbody["geolocation"]
    
    console.log(`RFID: ${rfId}`);
    
    const databaseService = new DatabaseService();
    await databaseService.connect();
    const queryResponse: any = await databaseService.query(
      //Get the data row for given RFID 
      `UPDATE sentinel_DB.sentinel_info SET Geolocation = '${geolocation}' WHERE RFID=${rfId}`
    );
    let status = "geolocation updated";

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
