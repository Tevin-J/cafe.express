import { MySQL } from './../services/mysql.js';
import { CreateUserData, RegularUserData } from './signup.interfaces.js';
import { SignupService } from './signup.service.js';
export class SignupManager {
  service: SignupService;
  constructor() {
    this.service = new SignupService();
  }

  public async signup(mysqlClient: MySQL, userData: CreateUserData): Promise<void> {
    const userResult = await this.service.getUserByEmail(mysqlClient, userData.email);
    if (userResult.length > 0) {
      throw new Error('user already exists');
    }
    await this.service.createUser(mysqlClient, userData);
  }

  public async getRegularUsers(mysqlClient: MySQL): Promise<RegularUserData[]> {
    return this.service.getRegularUsers(mysqlClient);
  }
}
