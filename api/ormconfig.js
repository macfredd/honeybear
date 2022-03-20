const dbConfig = {
  synchronize: true,
  migrations: ['migrations/*.js'],
  cli: {
    migrationsDir: 'migrations',
  },
};

Object.assign(dbConfig, {
  type: 'postgres',
  host: 'localhost',
  port: '5432',
  database: 'honeybear',
  username: 'honeybear',
  password: 'honeybear',
  url: process.env.DATABASE_URL,
  entities: ['**/*.entity.js'],
  migrationsRun: true,
});

module.exports = dbConfig;
