import { SignupManager } from './signup.manager.js';
import * as express from 'express';
import { mysqlClient } from '../server.js';

export async function signup(req: express.Request, res: express.Response) {
  console.log('[signup] request body', req?.body);
  try {
    const manager: SignupManager = new SignupManager();
    await manager.signup(mysqlClient, req.body);
    res.status(200).send({ message: `user ${req.body.email} has been created` });
  } catch (e) {
    console.log('[signup] error: ', e);
    return res.status(400).send({ errors: [{ message: `signup error: ${e}` }] });
  }
}
