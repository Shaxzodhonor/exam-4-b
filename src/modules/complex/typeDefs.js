const { gql } = require("apollo-server");

module.exports = gql`

  type Complex {
    id: ID!
    name: String!
    reference: ID!
  }

  extend type Query {
    complex(id: ID!): [ Complex! ]!
    allComplex: [Data]!
  }

  extend type Mutation {
    createdComplex(name: String!, reference: ID!): Complex!
  }
`