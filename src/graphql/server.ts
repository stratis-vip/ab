import {ApolloServer} from 'apollo-server'
import typeDefs from './typedefs'
import resolvers from './resolvers'
import {db} from "../db";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors:true
})

export const connect = async () =>{
  try {
    await db.authenticate()
    console.log('Database connected successfully')

    // await userMdl.sync({alter:true})

    const serv = await server.listen()
    console.log(`serv is running at ${serv.url}`)
  }catch (er){
    console.log(er)
  }
}