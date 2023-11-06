import { DataTypes, Model, Optional } from 'sequelize'
import db from '../../config/connect'

export interface UserI {
  id?: number
  username?: string | null
  email?: string | null
  password?: string | null
  access_token?: string | null
  createdAt?: Date
  updatedAt?: Date
}

export interface UserReq extends Optional<UserI, 'id'> {}
export interface UserRes extends Required<UserI> {}

class User extends Model<UserI, UserReq> implements UserI {
  public id!: number
  public username!: string
  public email!: string
  public password!: string
  public access_token!: string

  public readonly createdAt?: Date
  public readonly updatedAt?: Date
}

User.init(
  {
    id: {
      allowNull: true,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    username: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    email: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    password: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    access_token: {
      allowNull: true,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    sequelize: db,
    underscored: false,
  }
)

export default User
