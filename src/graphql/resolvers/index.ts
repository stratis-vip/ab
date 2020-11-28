import {strings} from './strings'
import {scalars} from "./scalars";
import {users} from '../../graphql/resolvers/users'
import {tokens} from './tokens'
import { Model } from 'sequelize';
import {Role} from "../../types";

export class TokenModel extends Model {
  public id?:string
  public user?:any
  public token?:string
}

export class UserModel extends Model {
  public id?:string
  public name?:string
  public email?:string
  public password?:string
  public role?:Role
}

export class AppModel extends Model {
  public id?:string
  public name?:string
  public description?:string
}




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