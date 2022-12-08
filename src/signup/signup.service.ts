import { MySQL } from './../services/mysql.js';
import {
  getUserByEmailQuery,
  createUserQuery,
  getRegularUsersQuery,
  updateUserQuery,
} from '../querries/userQuerries.js';
import { CreateUserData, RegularUserData, UpdateUserPayload } from './signup.interfaces.js';
import { ResultSetHeader } from 'mysql2/promise';
export class SignupService {
  async getUserByEmail(mysqlClient: MySQL, email: string): Promise<CreateUserData[]> {
    try {
      const response = await mysqlClient.query(getUserByEmailQuery, [email]);
      return response[0] as unknown as Promise<CreateUserData[]>;
    } catch (e) {
      throw new Error(`[getUserByEmail] error: ${e}`);
    }
  }

  async createUser(mysqlClient: MySQL, userData: CreateUserData): Promise<void> {
    try {
      await mysqlClient.query(createUserQuery, [userData.name, userData.contact, userData.email, userData.password]);
    } catch (e) {
      throw new Error(`[createUser] error: ${e}`);
    }
  }

  async getRegularUsers(mysqlClient: MySQL): Promise<RegularUserData[]> {
    try {
      const response = await mysqlClient.query(getRegularUsersQuery);
      return response[0] as unknown as Promise<RegularUserData[]>;
    } catch (e) {
      throw new Error(`[getRegularUsers] error: ${e}`);
    }
  }

  async updateUser(mysqlClient: MySQL, userData: UpdateUserPayload): Promise<void> {
    const res: ResultSetHeader = (
      await mysqlClient.query(updateUserQuery, [userData.status, userData.id])
    )[0] as ResultSetHeader;
    if (!res.affectedRows) {
      throw new Error(`User with id ${userData.id} does not exist`);
    }
  }
}
