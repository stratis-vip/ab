import {InUser} from '../../types'
import {ApolloError, UserInputError} from 'apollo-server'
import {userMdl} from "../../db/models";
import {UserModel} from '.'
import  crypt from 'bcrypt'

export const users = {
  Query: {
    getUsers: () => userMdl.findAll()
  },
  Mutation: {
    createUser: async (_: any, args: { newUser: InUser }): Promise<UserModel> => {
      try {
        args.newUser.password = await crypt.hash(args.newUser.password,12)
        const user: UserModel | null = await userMdl.create({...args.newUser})
        if (user) {
          return user
        }
        throw new ApolloError('Cant Create user')
      } catch (error) {
        throw new UserInputError(error.message, error)
      }
    }
  },

}