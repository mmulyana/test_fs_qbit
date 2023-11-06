export type Property = {
  id: number
  name: string
  slug: string
  rating: number
  price: number
  location: string
  description: string
  url_location: string
  type: string
  images: string
  room: number
  bathroom: number
  kitchen: boolean
  wifi: boolean
  guest: number

  createdAt: Date
  updatedAt: Date
}
