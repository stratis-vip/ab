import {gql} from 'apollo-server'

export default gql`
    scalar Date
    scalar DateOnly
    
    type Query{
        hi:String!
    }

    type Mutation{
        createUser(newUser:inUser!):User!
        hiq:String!
    }
    enum Role{
        GUEST,
        MEMBER,
        ADMIN
    }
    
    input inUser{
        name:String!
        email:String!
        password:String!
        role: Role!
    }
    type User{
        id:ID!
        name:String!
        email:String!
        password:String!
        role: Role!
    }
`