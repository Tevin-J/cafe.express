import { MySQL } from './../services/mysql.js';
import { getUserByEmailQuery, createUserQuery } from '../querries/userQuerries.js';
import { CreateUserData } from './signup.interfaces.js';
export class SignupService {
  async getUserByEmail(mysqlClient: MySQL, email: string): Promise<CreateUserData[]> {
    try {
      const response = await mysqlClient.query(getUserByEmailQuery, [email]);
      return response[0] as unknown as Promise<CreateUserData[]>;
    } catch (e) {
      console.log('[getUserByEmail] error: ', e);
      throw new Error(`[getUserByEmail] error: ${e}`);
    }
  }

  async createUser(mysqlClient: MySQL, userData: CreateUserData): Promise<void> {
    try {
      await mysqlClient.query(createUserQuery, [userData.name, userData.contact, userData.email, userData.password]);
    } catch (e) {
      console.log('[createUser] error: ', e);
      throw new Error(`[createUser] error: ${e}`);
    }
  }
}
