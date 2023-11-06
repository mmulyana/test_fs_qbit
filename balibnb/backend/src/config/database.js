const dotenv = require('dotenv')

dotenv.config()

const USER = process.env.DB_USER
const PASSWORD = process.env.DB_PASSWORD
const DB = process.env.DB_NAME
const HOST = process.env.DB_HOST
const PORT = process.env.DB_PORT

module.exports = {
  development: {
    username: USER,
    password: PASSWORD,
    database: DB,
    host: HOST,
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'database_test',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0.0.1',
    dialect: 'mysql',
  },
}
