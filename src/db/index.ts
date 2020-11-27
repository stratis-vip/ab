import {Sequelize} from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()


export const db = new Sequelize(process.env.DBASE!,process.env.DBUSER!, process.env.DBPASS!,{
  dialect:"mariadb",
  port: Number(process.env.PORT!),
  timezone:"Europe/Athens",
  define:{
    charset: 'utf8'
  }
})