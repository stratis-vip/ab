"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scalars = void 0;
var apollo_server_1 = require("apollo-server");
var graphql_1 = require("graphql");
var moment_1 = __importDefault(require("moment"));
exports.scalars = {
    // Stats: new GraphQLScalarType({
    //   name: 'Stats',
    //   description: 'Τύπος στατιστικών που κρατά τα στατιστικά μηνυμάτων\n   σε μορφή πίνακα ακεραίων ανά ώρα [0,0,0...0]. Ενα μέλος ανα ώρα',
    //   parseValue: (value) => {
    //     const local = Array.isArray(value) ? value : []
    //     return JSON.stringify(local.length > 0 ? local : [...Array(24)].map(_ => 0))
    //   },
    //   serialize: value => {
    //     return JSON.parse(value)
    //   }
    // }),
    DateOnly: new graphql_1.GraphQLScalarType({
        name: 'DateOnly',
        description: 'Τύπος ημερομηνίας που κρατά την ημερομηνία σε μορφή YYYY-MM-DD',
        parseValue: function (value) {
            return value;
        },
        serialize: (function (value) {
            if (moment_1.default(value, "YYYY-MM-DD").isValid())
                return value;
            else
                throw new apollo_server_1.ApolloError('Date is wrong');
        })
    }),
    Date: new graphql_1.GraphQLScalarType({
        name: 'Date',
        description: 'Τύπος ημερομηνίας που κρατά την ημερομηνία σε μορφή YYYY-MM-DD HH:MM:SS',
        parseValue: function (value) { return new Date(value); },
        serialize: function (value) { return new Date(value); }
    }),
    Role: {
        GUEST: 0,
        MEMBER: 1,
        ADMIN: 2
    }
};
