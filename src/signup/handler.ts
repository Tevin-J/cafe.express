import { RegularUserData } from './signup.interfaces.js';
import { SignupManager } from './signup.manager.js';
import * as express from 'express';
import { mysqlClient } from '../server.js';

export async function signup(req: express.Request, res: express.Response): Promise<express.Response<string>> {
  console.log('[signup] request body', req?.body);
  try {
    const manager: SignupManager = new SignupManager();
    await manager.signup(mysqlClient, req.body);
    return res.status(200).send({ message: `user ${req.body.email} has been created` });
  } catch (e) {
    console.log('[signup] error: ', e);
    return res.status(400).send({ errors: [{ message: `${e}` }] });
  }
}

export async function getRegularUsers(
  req: express.Request,
  res: express.Response
): Promise<express.Response<RegularUserData[]>> {
  console.log('[getRegularUsers]');
  try {
    const manager: SignupManager = new SignupManager();
    const users = await manager.getRegularUsers(mysqlClient);
    return res.status(200).send(users);
  } catch (e) {
    console.log('[getRegularUsers] error: ', e);
    return res.status(400).send({ errors: [{ message: `${e}` }] });
  }
}

export async function updateUser(req: express.Request, res: express.Response): Promise<express.Response<string>> {
  console.log('[updateUser] request body: ', req.body);
  try {
    const manager: SignupManager = new SignupManager();
    await manager.updateUser(mysqlClient, req.body);
    return res.status(200).send({ message: 'user has been successfully updated' });
  } catch (e) {
    console.log('[updateUser] error: ', e);
    return res.status(400).send({ errors: [{ message: `${e}` }] });
  }
}
