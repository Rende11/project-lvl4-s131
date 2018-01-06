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
    use_env_variable: "postgres://pcccwdobftjkho:2d2f64a0c325162db78bd152ba37af186185e24b12a8d5e79436eeb8a2b17b9e@ec2-107-22-183-40.compute-1.amazonaws.com:5432/db0sa6nfjsqvfk",
    username: "pcccwdobftjkho",
    password: "2d2f64a0c325162db78bd152ba37af186185e24b12a8d5e79436eeb8a2b17b9e",
    database: "db0sa6nfjsqvfk",
    host: "ec2-107-22-183-40.compute-1.amazonaws.com",
    dialect: "postres",
    port: "5432",
  },
}