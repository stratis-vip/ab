"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var strings_1 = require("./strings");
var scalars_1 = require("./scalars");
var users_1 = require("../../graphql/resolvers/users");
var tokens_1 = require("./tokens");
exports.default = __assign(__assign({ Query: __assign(__assign({}, strings_1.strings.Query), users_1.users.Query), Mutation: __assign(__assign({}, users_1.users.Mutation), tokens_1.tokens.Mutation) }, tokens_1.tokens.Others), scalars_1.scalars);
