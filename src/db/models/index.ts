import {db} from '../index'
import {DataTypes} from "sequelize";

export const userMdl = db.define('user', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  role: {
    type: DataTypes.TINYINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0
  },
}, {
  charset: 'utf8'
})

export const tokenMdl = db.define('token', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  token: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
}, {
  indexes: [{unique: true, fields: ['userId']}],
  charset: 'utf8'
})

userMdl.hasOne(tokenMdl)
tokenMdl.belongsTo(userMdl)
