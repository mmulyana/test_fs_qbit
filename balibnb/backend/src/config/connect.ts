import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()

const USER = process.env.DB_USER as string
const PASSWORD = process.env.DB_PASSWORD
const DB = process.env.DB_NAME as string
const HOST = process.env.DB_HOST
const PORT = parseInt(process.env.DB_PORT as string)

const db = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: 'mysql',
  port: PORT,
})

export default db
