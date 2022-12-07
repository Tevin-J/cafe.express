import * as mysql from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

export const connection = mysql.createConnection({
  port: parseInt(process.env.DB_PORT!, 10),
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
});

export function dbConnect() {
  connection.connect((e) => {
    if (e) {
      console.log(`connection error: ${e}`);
      throw e;
    }
    console.log('successfully connected to database');
  });
}
