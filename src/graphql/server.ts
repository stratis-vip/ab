import {ApolloServer} from 'apollo-server'
import typeDefs from './typedefs'
import resolvers from './resolvers'
import {db} from "../db";
import {appMdl, tokenMdl, userMdl} from "../db/models";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors:true
})

const syncTables = async (val:boolean) =>{
  if (val){
    try {
      await userMdl.sync({force: true})
      await appMdl.sync({force:true})
      await tokenMdl.sync({force: true})

    }catch (e){
      throw new Error(e.message)
    }
  }
}

export const connect = async (showDefs:boolean=false) =>{
  try {
    if (showDefs){
      console.log( resolvers)
    }
    await db.authenticate()
    console.log('Database connected successfully')
    await syncTables(false)
    // await syncTables(true)
    const serv = await server.listen()
    console.log(`serv is running at ${serv.url}`)
  }catch (er){
    console.log(er)
  }
}