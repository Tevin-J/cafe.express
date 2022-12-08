import * as mysql from 'mysql2/promise';

export class MySQL {
  private connection!: mysql.Connection;
  constructor(
    private host: string,
    private port: number,
    private user: string,
    private password: string,
    private database: string
  ) {
    return this;
  }

  async createConnection(): Promise<void> {
    this.connection = await mysql.createConnection({
      host: this.host,
      port: this.port,
      user: this.user,
      password: this.password,
      database: this.database,
    });
  }

  async connect() {
    return this.connection.connect.bind(this.connection)();
  }

  async close() {
    return this.connection.end.bind(this.connection)();
  }

  async query(query: string, args?: any) {
    console.log('\nquery', query);
    console.log('args', args);
    console.log('\n');
    return this.connection.query.bind(this.connection)(query, args);
  }
}
