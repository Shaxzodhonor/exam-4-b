const { gql } = require("apollo-server");

module.exports = gql`
 
  type House {
    id: ID!
    size: Int!
    rooms: Int!
    price: Int!
    location: String
    reference: ID!
  }

  extend type Query {
    house(id: ID!): [ House! ]!
  }

  extend type Mutation {
    createHouse(price: Int!, rooms: Int!, size: Int!, location: String!, reference: ID!): House
  }
`