"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var path_1 = __importDefault(require("path"));
var server_1 = require("./graphql/server");
//
global.__dirname = path_1.default.resolve('./');
console.log(__dirname);
// sayHi(
// )
// const {sayHi} = require("./utils")
// const path = require('path')
// const {connect} = require('./lib/server.js')
global.__dirname = path_1.default.resolve('./');
console.log(__dirname);
utils_1.sayHi();
server_1.connect();
