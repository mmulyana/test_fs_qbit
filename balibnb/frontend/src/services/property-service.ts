import { Property } from '../model/property-model'
import http from '../utils/http'

export type PropertyRes = {
  message: string
  data: Property | Property[] | null
}

export async function getAllProperties(): Promise<PropertyRes> {
  try {
    const { data }: { data: PropertyRes } = await http('/property')

    return {
      ...data,
    }
  } catch (error) {
    console.log(error)
    return {
      message: 'error',
      data: null,
    }
  }
}

export async function getProperty(slug: string): Promise<PropertyRes> {
  try {
    const data: PropertyRes = await http(`/property/${slug}`)

    return {
      ...data,
    }
  } catch (error) {
    console.log(error)
    return {
      message: 'error',
      data: null,
    }
  }
}
