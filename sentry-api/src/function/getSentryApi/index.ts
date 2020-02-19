import * as express from "express";
const serverless = require("serverless-http");
import { DatabaseService } from "../../shared/database.service";
import { Context } from "aws-lambda";

export const app = express();

app.set("etag", false);
app.use(express.json());

app.use("/get_sentry_api", async (req: any, res: any) => {
  try {
    const databaseService = new DatabaseService();
    await databaseService.connect();
    const response: any = await databaseService.query(
      "SELECT * FROM sentinel_DB.sentinel_info;"
    );
    console.log(response);

    res.set(200).send(JSON.stringify(response));
  } catch (error) {
    console.log(error);
    res.set(500).send("Error Executing");
  }
});

module.exports.handler = serverless(app, {
  request: async (request: any, event: any, context: Context) => {
    request.context = event.requestContext;
  }
});
