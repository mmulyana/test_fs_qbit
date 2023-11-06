import express from 'express'
import {
  getAllProperties,
  getProperty,
} from '../controllers/property-controller'
const routes = express.Router()

routes.get('/', getAllProperties)
routes.get('/:slug', getProperty)

export default routes
