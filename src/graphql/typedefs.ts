import {gql} from 'apollo-server'

export default gql`    
    type Query{
        hi:String!
    }

    type Mutation{
        hiq:String!
    }
`