import express from 'express'
const routes = express.Router()
import property from './property'

routes.use('/property', property)

export default routes
