import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()


export const db = new Sequelize(process.env.DBASE!,process.env.DBUSER!, process.env.DBPASS!,{
  dialect:"mariadb",
  port: Number(process.env.PORT!),
  dialectOptions: {
    timezone: "Europe/Athens",
  },
  logging: false,
  define:{
    charset: 'utf8'
  }
})