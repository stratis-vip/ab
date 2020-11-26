import {sayHi} from "./utils"
import path from 'path';
import {connect} from './graphql/server'
//
global.__dirname = path.resolve('./');
console.log(__dirname);
// sayHi(
// )

// const {sayHi} = require("./utils")
// const path = require('path')
// const {connect} = require('./lib/server.js')

global.__dirname = path.resolve('./');
console.log(__dirname);
sayHi()
connect()