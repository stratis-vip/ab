"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_1 = require("apollo-server");
exports.default = apollo_server_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    scalar Date\n    scalar DateOnly\n    \n    type Query{\n        hi:String!\n    }\n\n    type Mutation{\n        createUser(newUser:inUser!):User!\n        hiq:String!\n    }\n    enum Role{\n        GUEST,\n        MEMBER,\n        ADMIN\n    }\n    \n    input inUser{\n        name:String!\n        email:String!\n        password:String!\n        role: Role!\n    }\n    type User{\n        id:ID!\n        name:String!\n        email:String!\n        password:String!\n        role: Role!\n    }\n"], ["\n    scalar Date\n    scalar DateOnly\n    \n    type Query{\n        hi:String!\n    }\n\n    type Mutation{\n        createUser(newUser:inUser!):User!\n        hiq:String!\n    }\n    enum Role{\n        GUEST,\n        MEMBER,\n        ADMIN\n    }\n    \n    input inUser{\n        name:String!\n        email:String!\n        password:String!\n        role: Role!\n    }\n    type User{\n        id:ID!\n        name:String!\n        email:String!\n        password:String!\n        role: Role!\n    }\n"])));
var templateObject_1;
