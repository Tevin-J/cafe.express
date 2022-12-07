import { connection } from './../connection.js';
import * as express from 'express';

export function signup(req?: express.Request, res?: express.Response): string {
  console.log('signup request', req?.body);
  const user = req?.body;
  let query = `
    SELECT email,password,contact FROM User
    WHERE email=?
  `;
  connection.query(query, [user.email], (err, result) => {
    if (err) {
      console.log(`signup error: ${err}`);
      return res?.status(500).json(err);
    } else {
      if (result.length <= 0) {
        query = `
          INSERT INTO User(name,contact,email,password,status,role)
          VALUES(?,?,?,?,"false","user")
        `;
        connection.query(query, [user.name, user.contact, user.email, user.password], (err, result) => {
          if (err) {
            return res?.status(500).json(err);
          } else {
            return res?.status(200).json({ message: 'Successfully registered!' });
          }
        });
      } else {
        return res?.status(400).json({ message: 'Email already exists' });
      }
    }
  });
  return 'signup works';
}
