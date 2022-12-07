import dotenv from 'dotenv';
dotenv.config();
import http from 'http';
import { dbConnect } from './connection.js';
import { app } from './index.js';

async function start() {
  try {
    const server = http.createServer(app);
    server.listen(process.env.PORT || 8080);
    dbConnect();
    console.log(`HTTP listening on port ${process.env.PORT}`);
  } catch (e) {
    console.log(e);
  }
}
start().then();
