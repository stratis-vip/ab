import {UserInputError} from 'apollo-server'
import {tokenMdl, userMdl} from "../../db/models";
import {Model, ModelCtor, ModelStatic} from "sequelize";
import {Token} from "../../types";


class TokenMdl extends Model {
  public id?:string
  public user?:any
  public token?:string

}
export const tokens = {

  Mutation: {
    createToken: async (_: any, args: { user: string, token: string }) => {
      try {
        const {user:userId, token} = args
        const tok:TokenMdl | null  = await tokenMdl.findOne({where: {userId}})
        const userFromDb = await userMdl.findOne({where: {id:userId}})
        if (tok){
          await tokenMdl.update({userId, token}, {where:{id:tok.id}})
          return {id: tok.id, user:userFromDb, token}
        }else {
          const dbToken:TokenMdl | null = await tokenMdl.create({userId, token})
          return {id: dbToken!.id, user:userFromDb, token:dbToken!.token}
        }
      } catch (error) {
        throw new UserInputError(error.message, error)
      }
    }
  },
  Others: {
    Token: {
      user: async (parent: any) => {
        console.log('USER', parent.user.id)
        return await userMdl.findByPk(parent.user.id)
      }
    }
  }
}