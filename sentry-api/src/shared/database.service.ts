const mysql = require("mysql");

export class DatabaseService {
  connection: any;
  constructor() {
    this.connection = mysql.createConnection({
      host: process.env.RDS_HOSTNAME,
      user: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      port: process.env.RDS_PORT
    });
  }

  connect() {
    return new Promise((resolve: any, reject: any) => {
      this.connection.connect((err: any) => {
        if (!!err) {
          console.error("Database connection failed: " + err.stack);
          return reject(err);
        }
        console.log("Connected to database.");
        return resolve();
      });
    });
  }

  query(qr: string) {
    return new Promise((resolve: any, reject: any) => {
      this.connection.query(qr, (data: any, err: any) => {
        if (!!err) {
          return reject(err);
        }
        return resolve(data);
      });
    });
  }

  disconnect() {
    return new Promise((resolve: any, reject: any) => {
      this.connection.end((err: any) => {
        if (!!err) {
          console.error("Database connection failed: " + err.stack);
          return reject(err);
        }
        console.log("Connected to database.");
        return resolve();
      });
    });
  }
}
