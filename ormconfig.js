const SnakeNamingStrategy = require('typeorm-naming-strategies')
  .SnakeNamingStrategy;

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'docker',
  database: 'gostack_gobarber',
  entities: [
    './src/modules/appointments/infra/typeorm/entities/*.ts',
    './src/modules/users/infra/typeorm/entities/*.ts',
  ],
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  cli: {
    migrationsDir: './src/shared/infra/typeorm/migrations',
  },
  namingStrategy: new SnakeNamingStrategy(),
};
