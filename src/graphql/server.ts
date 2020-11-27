import {ApolloServer} from 'apollo-server'
import typeDefs from './typedefs'
import resolvers from './resolvers'
import {db} from "../db";
import {tokenMdl, userMdl} from "../db/models";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors:true
})

const syncTables = async (val:boolean) =>{
  if (val){
    try {
      await userMdl.sync({alter: true})
      await tokenMdl.sync({alter: true})
    }catch (e){
      throw new Error(e.message)
    }
  }
}

export const connect = async () =>{
  try {
    await db.authenticate()
    console.log('Database connected successfully')
    await syncTables(false)
    const serv = await server.listen()
    console.log(`serv is running at ${serv.url}`)
  }catch (er){
    console.log(er)
  }
}