import {strings} from './strings'
import {scalars} from "./scalars";
import {users} from '../../graphql/resolvers/users'

export default {
  Query:{
    ...strings.Query,
  },
  Mutation:{
    ...users.Mutation
  },
  ...scalars
}