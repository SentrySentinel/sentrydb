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
    //const userName = (event.path.split("/")[3]);
    //const password = (event.path.split("/")[4]);

    let jsonbody =  JSON.parse(event.body)   
    const userName = jsonbody["username"];
    const password = jsonbody["password"];


    console.log(`RFID: ${rfId}`);
    console.log (`username: ${userName}`)
    console.log (`password: ${password}`)

    const databaseService = new DatabaseService();
    await databaseService.connect();
    let status = "login unsuccessful";


    const queryResponse: any = await databaseService.query(
      //Get the data row for given RFID 
      `SELECT * FROM sentinel_DB.sentinel_info WHERE RFID=${rfId}`
    );
    
    if (queryResponse.length > 0){
      if (((queryResponse[0]["Username"]) == userName) && ((queryResponse[0]["Password"]) == password)){
          status = 'login successful';
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
