import {ApolloError, UserInputError} from 'apollo-server'
import {appMdl, tokenMdl, userMdl} from "../../db/models";
import {AppModel, TokenModel, UserModel} from ".";
import {App, Token, User} from "../../types";


export const tokens = {
  Mutation: {
    createToken: async (_: any, args: { user: string, app: string, token: string }): Promise<Token> => {
      const errors: { [value: string]: any } = {}

      try {
        const {user: userId, token, app: appId} = args
        const userFromDb: UserModel | null = await userMdl.findByPk(userId)

        if (userFromDb) {
          const appFromDb: AppModel | null = await appMdl.findByPk(appId)

          if (appFromDb) {
            const tok: TokenModel | null = await tokenMdl.findOne({where: {userId,appId}})
            let retVal = {} as Token

            if (tok) {
              await tokenMdl.update({userId, token}, {where: {id: tok.id}})
              retVal = {id: tok.id!, user: userFromDb as User, token, app: appFromDb as App}
            } else {
              const dbToken: TokenModel | null = await tokenMdl.create({userId, appId, token})

              if (dbToken) {
                retVal = {id: dbToken.id!, user: userFromDb as User, token: dbToken.token!, app: appFromDb as App}
              } else {
                errors.token = 'Token not exists'
              }
            }
            return retVal
          } else {
            errors.user = 'User not exists'
          }
        } else {errors.app = 'App not exists'}
        throw new UserInputError('Error', errors)
      } catch (error) {
        throw new UserInputError('Token Errors', {...errors, general: error.message})
      }
    }
  },
  Others: {
    Token: {
      user: async (parent: Token): Promise<UserModel> => {
        try {
          const retVal: UserModel | null = await userMdl.findByPk(parent.user.id)
          if (retVal) {
            return retVal
          }
          throw new ApolloError('User not exists')
        } catch (error) {
          throw new ApolloError(error.message)
        }
      },
      app: async (parent: Token): Promise<AppModel> => {
        try {
          const retVal: AppModel | null = await appMdl.findByPk(parent.app.id)
          if (retVal) {
            return retVal
          }
          throw new ApolloError('Application not exists')
        } catch (error) {
          throw new ApolloError(error.message)
        }
      }
    }
  }
}