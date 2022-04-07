const { gql } = require("apollo-server");

module.exports = gql`

  type Company {
    id: ID!
    name: String!
  }

extend type Query {
    company: [ Company! ]!
  }


  type Mutation {
    createdCompany(name: String!): Company!
  }

`