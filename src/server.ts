import dotenv from 'dotenv';
dotenv.config();
import http from 'http';
import { app } from './index.js';
import { MySQL } from './services/mysql.js';

export const mysqlClient = new MySQL(
  process.env.DB_HOST!,
  parseInt(process.env.DB_PORT!, 10),
  process.env.DB_USERNAME!,
  process.env.DB_PASSWORD!,
  process.env.DB_NAME!
);

async function start() {
  try {
    const server = http.createServer(app);
    await mysqlClient.createConnection();
    await mysqlClient.connect();
    console.log('connected to db');
    server.listen(process.env.PORT || 8080);
    console.log(`HTTP listening on port ${process.env.PORT}`);
  } catch (e) {
    console.log('start server error: ', e);
  }
}
start().then();
