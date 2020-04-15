import { Context } from "aws-lambda";
import { DatabaseService } from "../../shared/database.service";

function getDistance(lat1,lon1,lat2,lon2) {
  var lat = (lat2-lat1)*(Math.PI/180); //haversine's formula
  var lon = (lon2-lon1)*(Math.PI/180);
  var a = Math.sin(lat/2)*Math.sin(lat/2) + Math.cos(lat1*(Math.PI/180))*Math.cos(lat2*(Math.PI/180))*Math.sin(lon/2)*Math.sin(lon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return c;
}

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
    let status = false;

    //Check for authentication (Check for pre-authentication?)
    if (queryResponse.length > 0){
        var location = (queryResponse[0]["Geolocation"]).split("-",3);
        var distance = getDistance(location[0], location[1],1,2);
        if(distance <= location[2]){
          status = true;
        }
          /*if((queryResponse[0]["Geolocation"]) == "Austin"){

          }*/
      
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
