import { Context } from "aws-lambda";
import { DatabaseService } from "../../shared/database.service";


function getDistance(lat1: any, lon1: any, lat2: any , lon2: any ) {

  lat1 = Number(lat1);
  lat2 = Number(lat2);
  lon1 = Number(lon1);
  lon2 = Number(lon2);

  var lat = (lat2-lat1)*(Math.PI/180); //haversine's formula
  var lon = (lon2-lon1)*(Math.PI/180);
  var a = Math.sin(lat/2)*Math.sin(lat/2) + Math.cos(lat1*(Math.PI/180))*Math.cos(lat2*(Math.PI/180))*Math.sin(lon/2)*Math.sin(lon/2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return c * 6371 * 1000;
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
    let status = false ;

    //Check for authentication 
    if (queryResponse.length > 0){
      var location = queryResponse[0]["Geolocation"].split(",");
      var latitude = location[0];
      var longitude = location[1];
      
      //Change the hard coded values with the actual location of the microcontroller
      console.log(latitude);
      console.log(longitude);
      var distance = getDistance(30.348684, -97.687514, latitude, longitude)
      console.log("distance is ", distance);

      if ( distance < 3 ){
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
