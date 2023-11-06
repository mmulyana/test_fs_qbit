import { Request, Response } from 'express'
import Property from '../database/models/properties'

export async function getAllProperties(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const properties = await Property.findAll()
    return res.status(200).send({
      message: 'success',
      data: properties,
    })
  } catch (error: any) {
    if (error != null && error instanceof Error) {
      return res.status(500).send({
        status: 500,
        message: error.message,
        errors: error,
      })
    }
    return res.status(500).send({
      status: 500,
      message: 'Internal server error',
      errors: error,
    })
  }
}

export async function getProperty(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const { slug } = req.params
    const property = await Property.findOne({
      where: {
        slug: slug,
      },
    })
    return res.status(200).send({
      message: 'Success',
      data: property,
    })
  } catch (error: any) {
    if (error != null && error instanceof Error) {
      return res.status(500).send({
        status: 500,
        message: error.message,
        errors: error,
      })
    }
    return res.status(500).send({
      status: 500,
      message: 'Internal server error',
      errors: error,
    })
  }
}
