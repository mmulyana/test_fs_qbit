import { DataTypes, Model, Optional } from 'sequelize'
import db from '../../config/connect'

interface IProperty {
  id?: number
  name?: string | null
  slug?: string | null
  rating?: number | null
  price?: number | null
  location?: string | null
  description?: string | null
  url_location?: string | null
  type?: string | null
  images?: string | null
  room?: number | null
  bathroom?: number | null
  kitchen?: boolean | null
  wifi?: boolean | null
  guest?: number | null

  createdAt?: Date
  updatedAt?: Date
}

export interface PropertyReq extends Optional<IProperty, 'id'> {}
export interface BookRes extends Required<IProperty> {}

class Property extends Model<IProperty, PropertyReq> implements IProperty {
  public id!: number
  public name!: string
  public slug!: string
  public rating!: number
  public price!: number
  public location!: string
  public description!: string
  public url_location!: string
  public type!: string
  public images!: string
  public room!: number
  public bathroom!: number
  public kitchen!: boolean
  public wifi!: boolean
  public guest!: number

  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

Property.init(
  {
    id: {
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    slug: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    rating: {
      allowNull: true,
      type: DataTypes.NUMBER,
    },
    price: {
      allowNull: true,
      type: DataTypes.NUMBER,
    },
    location: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    description: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    url_location: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    type: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    images: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    room: {
      allowNull: true,
      type: DataTypes.NUMBER,
    },
    bathroom: {
      allowNull: true,
      type: DataTypes.NUMBER,
    },
    kitchen: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
    },
    wifi: {
      allowNull: true,
      type: DataTypes.BOOLEAN,
    },
    guest: {
      allowNull: true,
      type: DataTypes.NUMBER,
    },
  },
  {
    timestamps: true,
    sequelize: db,
    underscored: false,
  }
)

export default Property
