const { gql } = require("apollo-server");

module.exports = gql`

  type Bank {
    id: ID!
    name: String!
    upto: String!
    duration: [ Int! ]
    starting_payment: Int!
    service: String!
  }

  type Query {
    bank(id: ID!): [ Bank! ]
  }
`