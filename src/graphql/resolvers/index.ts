import {strings} from './strings'
import {scalars} from "./scalars";
import {users} from '../../graphql/resolvers/users'
import {tokens} from './tokens'
export default {
  Query:{
    ...strings.Query,
    ...users.Query
  },
  Mutation:{
    ...users.Mutation,
    ...tokens.Mutation
  },
  ...tokens.Others,
  ...scalars
}