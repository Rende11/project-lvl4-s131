module.exports = {
  "development": {
    database: 'database.sqlite',
    dialect: 'sqlite'
  },
  "test": {
    database: 'database.sqlite',
    dialect: 'sqlite'
  },
  "production": {
    username: process.env.PROD_DB_USERNAME,
    password: process.env.PROD_DB_PASSWORD,
    database: process.env.PROD_DB_NAME,
    host: process.env.PROD_DB_HOSTNAME,
    dialect: 'postgres'
  }
}