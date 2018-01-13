module.exports = {
  "development": {
    database: 'database.sqlite',
    dialect: 'sqlite'
  },
  "test": {
    database: 'database.sqlite',
    dialect: 'sqlite',
    logging: false
  },
  "production": {
    use_env_variable: process.env.USER_ENV_VARIABLE,
    url: process.env.URL,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: "postgres",
    port: "5432",
    dialectOptions: {
      ssl: true,
    },
  },
}