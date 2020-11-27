import { ApolloError } from "apollo-server";
import {GraphQLScalarType} from "graphql"
import moment from "moment";


export const scalars = {
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
  DateOnly: new GraphQLScalarType({
    name: 'DateOnly',
    description: 'Τύπος ημερομηνίας που κρατά την ημερομηνία σε μορφή YYYY-MM-DD',
    parseValue: (value) => {
      return value
    },
    parseLiteral: (value)=>value,
    serialize: (value => {
      if (moment(value, "YYYY-MM-DD").isValid())
        return value
      else
        throw new ApolloError('Date is wrong')
    })
  }),
  Date: new GraphQLScalarType({
    name: 'Date',
    description: 'Τύπος ημερομηνίας που κρατά την ημερομηνία σε μορφή YYYY-MM-DD HH:MM:SS',
    parseValue: value => new Date(value),
    parseLiteral: value => value,
    serialize: value => new Date(value)
  }),
  Role: {
    GUEST: 0,
    MEMBER: 1,
    ADMIN: 2
  }
}