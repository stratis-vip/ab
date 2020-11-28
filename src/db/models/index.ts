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

export const appMdl = db.define('app', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING(200),
    allowNull: false
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
  indexes: [{name:'app_user',unique: true, fields: ['userId', 'appId']}],
  charset: 'utf8'
})

userMdl.hasMany(tokenMdl,{
  foreignKey: {
    allowNull: false
  }
})
tokenMdl.belongsTo(userMdl,{
  foreignKey:{
    allowNull:false
  }
})
appMdl.hasMany(tokenMdl,{
  foreignKey:{
    allowNull:false
  }
})
tokenMdl.belongsTo(appMdl,{
  foreignKey:{
    allowNull:false
  }
})

