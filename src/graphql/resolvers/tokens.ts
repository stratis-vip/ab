import {InUser, Token} from '../../types'
import {UserInputError} from 'apollo-server'
import {tokenMdl, userMdl} from "../../db/models";
import Model from "sequelize";

export const tokens ={

  Mutation:{
    createToken: async (_:any, args:{userId:string,token:string} )=> {
      try {
        const user = await userMdl.findByPk(args.userId)
        if (!user) throw new UserInputError('Invalid userid')
        const {id}= await tokenMdl.create({...args}) as any
        return {userId: user, id , token: args.token}
      }catch (error){
        throw new UserInputError(error.message, error)
      }
    }
  },
  Others:{
    Token: {
      userId: ({userId}:Token) => userMdl.findByPk(userId.id)
    }
  }
}