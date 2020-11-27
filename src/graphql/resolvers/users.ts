import {InUser} from '../../types'
import {UserInputError} from 'apollo-server'
import {userMdl} from "../../db/models";

export const users ={

  Mutation:{
    createUser: async (_:any, args:{newUser:InUser} )=> {
      try {
        const user = await userMdl.create({...args.newUser})
        return user
      }catch (error){
        throw new UserInputError(error.message, error)
      }
    }
  }
}