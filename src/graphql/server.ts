import {ApolloServer} from 'apollo-server'
import typeDefs from './typedefs'
import resolvers from './resolvers'
import cors from 'cors'

const server = new ApolloServer({
  typeDefs,
  resolvers
})

export const connect = async () =>{
  try {
    const serv = await server.listen()
    console.log(`serv is running at ${serv.url}`)
  }catch (er){
    console.log(er)
  }
}